import logo from './logo.svg';
import './App.css';
import Web3 from "web3";

import React from "react"
import fs from "fs"
import Payments from "./build/contracts/Payments.json"
import {NotificationContainer, NotificationManager}  from "react-notifications"


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={account: "", balance: "",  amount: "",withdrawAmount: "", contractBalance: "", web3: null}
  }
  async componentDidMount() {
    try{
      let web3;
      if (window.ethereum){
        web3 = new Web3(window.ethereum);
      }else if(window.web3.currentProvider){
        web3 = new Web3(window.web3.currentProvider) 

      }else{
        alert("no provider available")
      }
      
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0])
      console.log(accounts[2])
      const balance = await web3.eth.getBalance(accounts[0]);
      

      /*
      web3.eth.sendTransaction({
        from: accounts[0], 
        data: Payments.abi,
      }, function(error, callback){
        console.log(error)
      })
      */
      this.setState({account: accounts[0], balance: balance, web3: web3})
      
      

    }catch(e){
      console.log(e)
    }

  }

  onChange = (event) =>{
    event.preventDefault();
    
    if(event.target.name === "amount"){
      this.setState({amount: event.target.value})
    }

  }
  
 onSubmit = async (e) =>{
  e.preventDefault()
  
  const contract = new this.state.web3.eth.Contract(Payments.abi,"0x764b8BAdAF577a341d42c0fc6C22177D438C9FE8" ,{
    gasPrice: "20000000000",
    
  }, function(error, callback){
    if (error !== "undefinded"){
      console.error(error)
    }else{
      console.log(callback)
    }
  })
  
  console.log(this.state)
  
  await contract.methods.deposit().send({
    from: this.state.account,
    gasPrice: "20000000000",
    gasLimit: "6000000",
    value: this.state.amount
  }).then(function(receipt){
    console.log(receipt)
  }, function(error, callback){
    console.error(error)
    NotificationManager.info("transaction has been rejected")
  })
  
  
  
  }

  onWithdraw = (event) =>{
    event.preventDefault();
    
    if(event.target.name === "amount"){
      this.setState({withdrawAmount: event.target.value})
    }

  }


  onSubmitWithdraw = async (e) =>{
    e.preventDefault();

    const contract = new this.state.web3.eth.Contract(Payments.abi,"0x764b8BAdAF577a341d42c0fc6C22177D438C9FE8" ,{
      gasPrice: "20000000000",
      gasLimit: "6000000",
      from: this.state.account,
    }, function(error, callback){
      console.log(error, callback)
    })

    await contract.methods.withdraw(
      this.state.withdrawAmount,
      ).send({
        from: this.state.account,
        gasPrice: "20000000000",
        gasLimit: "6000000"
      }
      ).then(function(receipt){
        console.log(receipt)
        if(receipt.events.WithdrawFailure){
          NotificationManager.info("insufficient balance")
        }
      }, function(error, callback){
        NotificationManager.info("transaction rejected")
      })

  } 
  currentBalanceInside = async (e) =>{
    e.preventDefault();
    
    const contract = new this.state.web3.eth.Contract(Payments.abi, "0x764b8BAdAF577a341d42c0fc6C22177D438C9FE8", {
      gasPrice: "20000000000",
      gasLimit: "6000000",
      from: this.state.account
    })

    await contract.methods.getCurrentBalance().send({from: this.state.account,  gasLimit: "6000000"}).then((receipt)=>{
      console.log(receipt)
      this.setState({contractBalance: receipt.events.CurrentBalance.returnValues.amount})
    }, function(error, callback){
      NotificationManager.info("transaction rejected")
    })
    

  }

  render(){
    

    return (

      <div>
      <NotificationContainer/>
      <div>
      <h1>Metmask address {this.state.account} Balance {this.state.balance}</h1>
      <span>Deposit</span>
      
      <form onSubmit={this.onSubmit}>
        <label>Amount</label>
        <input name={"amount"} type={"number"} onChange={this.onChange}></input>
        <button >Send!</button>
      </form>


      </div>
      <div>
        <span>Withdraw</span>
        <form onSubmit={this.onSubmitWithdraw}>
          <label>Amount</label>
          <input name={"amount"} type={"number"} onChange={this.onWithdraw}></input>
          <button type={"submit"} >les go</button>

        </form>



      </div>
      <div>
      <p>Get current balance inside smart contract</p>
      <p>Your balnce in smart contract {this.state.contractBalance}</p>
      <button onClick={this.currentBalanceInside}>Get Balance</button>


      </div>
      </div>

    )
  }
}
export default App;
