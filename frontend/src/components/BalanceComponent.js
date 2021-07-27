import React from "react";
import {useEffect, useState} from "react"
import Web3 from "web3";
import Typography from '@material-ui/core/Typography'



export default function BalanceComponent(){
    const[balance, changeBalance] = useState(0);

    useEffect(() => {
        async function getAccounts(web3){
            return await web3.eth.getAccounts();
        }
        async function getCurrentAccountBalance(web3, account){
            return await web3.eth.getBalance(account);
        }
        
        try{
            let web3;
            if (window.ethereum){
                web3 = new Web3(window.ethereum);
            }else if(window.web3.currentProvider){
                web3 = new Web3(window.web3.currentProvider);
            }else{
                //TODO ADD NOTIFICATIONS
                alert("error")
            }
            const accounts = getAccounts(web3);
            changeBalance(getCurrentAccountBalance(web3, accounts[0]))



        }catch(e){
            console.error(e + "error occurred")
        }

    }, [])

    return(
        <div>
            <Typography
            variant="h6"
            >{balance}</Typography>

        </div>
    )

}