import logo from './logo.svg';
import './App.css';
import Web3 from "web3";
 


import React from "react"
import fs from "fs"
import Payments from "./build/contracts/Payments.json"



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={account: "", balance: "", address: "", amount: "", web3: null}
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
  
 onSubmit = (e) =>{
  e.preventDefault()
  
  

  const contract = new this.state.web3.eth.Contract(Payments.abi,"0x29118205e1DC737F52FE0E9A82d1085b44309609" ,{
    gasPrice: "20000000000",
    from: this.state.account,
  }, function(error, callback){
    if (error !== "undefinded"){
      console.error(error)
    }else{
      console.log(callback)
    }
  })
  
  console.log(this.state.amount)
  contract.methods.deposit(2).send({from: this.state.account, gasPrice: "20000000000", value: this.state.amount}).on("transactionHash", function(hash){
    console.log(hash)
  }).on("error", function(receipt, err){
    console.log(receipt, err)
  }).on("receipt", function(receipt){
    console.log(receipt)
  }).on("confirmation", function(confirmation, receipt){
    console.log(confirmation, receipt)
  })


}

  render(){
    

    return (
      <div>
      <h1>Metmask address {this.state.account} Balance {this.state.balance}</h1>

      
      <form onSubmit={this.onSubmit}>
        <label>Amount</label>
        <input name="amount" type="number" onChange={this.onChange}></input>
        <button type="submit" >Send!</button>
      </form>


      </div>

    )
  }
}
export default App;
