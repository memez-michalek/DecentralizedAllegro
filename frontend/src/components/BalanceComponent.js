import React from "react";
import {useEffect, useState} from "react"
import Typography from '@material-ui/core/Typography'
//import Web3 from "web3";
import {ethers} from "ethers"
import Payments from "../build/contracts/Payments.json"
import IconButton from "@material-ui/core/IconButton"
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import Divider from '@material-ui/core/Divider';

export default function BalanceComponent(props){
    const[balance, changeBalance] = useState(0);
    const[balanceInsideContract, changeInsideBalance] = useState("");
    const provider = new ethers.providers.Web3Provider(window.ethereum)        
    const signer = provider.getSigner()
    const contract = new ethers.Contract("0x9dc196b88318B0D1D5E2Edd22F0a19655a2a1dc8",Payments.abi, signer)


    async function getBalanceInsideListener(){
        contract.on("CurrentBalance", (data)=>{
            changeInsideBalance(ethers.utils.formatEther(data))
        })
    }

    async function getBalanceInsideCaller(){
        const tx = await contract.getCurrentBalance()
        await tx.wait()
    }

    const balanceInsideOnClick = (e) =>{
        e.preventDefault()
        try{
        getBalanceInsideCaller()
        getBalanceInsideListener()

    }catch(e){
        console.log(e)
    }
        //changeInsideBalance(ethers.utils.formatEther(data.value))
    
    }

    useEffect(() => {
    async function getWalletBalance(){   

    //CHANGE CONTRACT TO TRANSACTION THEN ACCESS events
    try{    
    const balance = await provider.getBalance(window.ethereum.selectedAddress)
    changeBalance(ethers.utils.formatEther(balance))
    }catch(e){
        console.log(e)
    }


}   
    getWalletBalance()
    
    }, [])

    
    
    if(balanceInsideContract !== ""){
    return(
        <div>
            <Typography
            variant="p"
            >Balance inside metamsk {balance} ETH</Typography>
            <Divider/>
            <Typography
            variant="p"
            color={"red"}
            >Balance inside smart contract {balanceInsideContract} ETH</Typography>

        </div>
    )
    }else{
        return(
            <div>
                <Typography
                variant="p"
                >Balance inside metamsk {balance} ETH</Typography>
                
                <Divider/>
                <IconButton
                    
                    onClick={balanceInsideOnClick}
                    aria-label="get deposited balance"
                >
                <AccountBalanceWalletOutlinedIcon
                color="secondary"
                />
                </IconButton>
            </div>
        )

    }
}