import React from "react";
import {useEffect, useState} from "react"
import Typography from '@material-ui/core/Typography'
import Web3 from "web3";
import Payments from "../build/contracts/Payments.json"
import red from "@material-ui/core/colors/red"

export default function BalanceComponent(){
    const[balance, changeBalance] = useState(0);
    const[balanceInsideContract, changeInsideBalance] = useState("");
    
    useEffect(() => {
        async function getAccounts(ethereum){
            return await ethereum.request({method: 'eth_accounts'})
        }
        async function getBalance(ethereum, accounts){
            let web3 = new Web3()
            const usersBalance = await ethereum.request({method: 'eth_getBalance', params: [accounts[0], "latest"]})
            const intBalance =  parseInt(usersBalance,16)
            const balance = web3.utils.fromWei(String(intBalance), "ether")
            return balance;
        }
        async function getCurrentProviderAndBalance(){
        try{
            if(typeof window.ethereum !== "undefined"){
                console.log("connected")
                
            }else{
                alert("error occurred")
            }
            const accounts = await getAccounts(window.ethereum)
            changeBalance(await getBalance(window.ethereum, accounts))
            
        }catch(e){
            console.error(e + "error occurred")
        }
    }
    async function getBalanceInsideContract(){
        let web3 = new Web3()
        
        const accounts = await getAccounts(window.ethereum)
        const contract = new web3.eth.Contract(Payments.abi, "0x14Fcb51087d9651F0b11CECEB3E989D8d01F4984",{
            from: accounts[0],
            gasLimit: "600000",
            gasPrice: "20000000000"
        })
        contract.methods.getCurrentBalance().send({from: accounts[0] }).then(function(receipt){
            changeInsideBalance(receipt.events.currentBalance.returnValues.amount)
        }, function(callback, err){
            console.error(err)
        })
    }

    getBalanceInsideContract()
    getCurrentProviderAndBalance()
    }, [])

    return(
        <div>
            <Typography
            variant="p"
            >Balance inside metamsk {balance} ETH</Typography>
            <Typography
            variant="p"
            color={"red"}
            >Balance inside smart contract {balanceInsideContract} ETH</Typography>

        </div>
    )

}