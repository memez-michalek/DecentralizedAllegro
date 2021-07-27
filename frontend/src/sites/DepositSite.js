import React from "react"
import {useState, useEffect} from "react"
import Web3 from "web3"

import FormComponent from "../components/FormComponent"

export default function DepositSite(){
    const [deposit, changeDeposit] = useState();
    const onChange = (e) =>{
        e.preventDefault();
    }
    
    useEffect(()=>{


    })
    return(
        <div>
            <FormComponent version="withdraw"></FormComponent>
        </div>

    )
}
