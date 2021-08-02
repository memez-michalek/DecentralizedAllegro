import {ethers} from "ethers";
import Payments from "../../build/contracts/Payments.json"
import Web3 from "web3"

async function withdrawListener(contract){
    contract.on("Withdraw", (data) =>{
        console.log(data)
        return [data, true]
    })
    contract.on("WithdrawFailure", (data) =>{
        return [data, false]
    })
}


export default async function withdrawForm(amount){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const contract = new ethers.Contract("0x9dc196b88318B0D1D5E2Edd22F0a19655a2a1dc8", Payments.abi, signer)

    try{
    const tx = await contract.withdraw(Web3.utils.toWei(amount, 'ether'))
    let listener, state = await withdrawListener(contract)
    await tx.wait()
    if (state === false){
    throw new Error("withdraw error occured")
    }
    return listener
    }catch(err){
        console.log(err)
    }
    
} 


