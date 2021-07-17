const Web3 = require('web3');


const customProvider = {
    sendAsync: (payload, callback) => {
    
        console.log(payload);
        console.log("called");
        callback(undefined, 100);
    }
};


//const provider = new Web3.providers.HttpProvider("http://localhost:8545")
let web3;
if (window.ethereum){
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
}else if(window.web3.currentProvider){
    web = new Web3(window.web3.currentProvider);

}




web3.eth.getBlockNumber().then((blockNumber) =>{
    console.log(blockNumber);
})


