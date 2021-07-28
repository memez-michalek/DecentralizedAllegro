import React from "react"
import {useState, useEffect} from "react"
import Web3 from "web3"

import FormComponent from "../components/FormComponent"

export default function DepositSite(){
    const [depositAmount, changeDepositAmount] = useState();
    const [address, changeAddress] = useState();
    const onChange = (e) =>{
        e.preventDefault();
    }
    
    
    return(
        <div>
            
            <FormComponent version="deposit"></FormComponent>
        </div>

    )
}
