import Payments from "../../build/contracts/Payments.json"
import Web3 from "web3"
export default async function deposit(amount){
    
    try{
        if(window.ethereum){
            const addresses = await window.ethereum.request({method: "eth_accounts"})
            const web3 = new Web3(window.ethereum)
            const etherAmount = web3.utils.toWei(amount, "ether")

            if(web3.eth.getBalance(addresses[0]) >= amount){
                const contract = new web3.eth.Contract(Payments.abi, "0x9dc196b88318B0D1D5E2Edd22F0a19655a2a1dc8",{
                    gasPrice: "20000000000"
                }, function(callback, error){
                    console.log(error)
                    return false
                })
                await contract.methods.deposit().send({
                    from: addresses[0],
                    gasLimit: "6000000",
                    value: etherAmount,
                }).then(function(receipt){
                    console.log(receipt)
                    return true
                })
            }else{
                return false
            }

        }else{
         return false   
        }
    }catch(e){
        console.error(e);
        alert("please refresh site")
        return false
    }


}