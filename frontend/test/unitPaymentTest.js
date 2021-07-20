const Payments = artifacts.require("Payments");


contract("Payments", accounts=>{
    it("should deposit user's funds to contract", async () => {
        let balance;
        const UsersAddress = accounts[4]
        const gasPrice = "200000000000"
        const amount = web3.utils.toWei("1", "ether")
        
        const meta = await Payments.deployed();
        const ContractAddress = meta.address;
        
        balance = await web3.eth.getBalance(ContractAddress)
        const ContractStartingBalance = balance
        
        balance = await web3.eth.getBalance(UsersAddress);
        const UsersStartingBalance = balance

        const transaction = await meta.deposit({from: UsersAddress, value: amount, gasPrice: gasPrice})
        const transactionCost = transaction.receipt.gasUsed * gasPrice;

        balance = await web3.eth.getBalance(UsersAddress);
        const UsersEndingBalance = balance

        balance = await web3.eth.getBalance(ContractAddress)
        const ContractsEndingBalance = balance


        assert.equal(
            UsersEndingBalance,
            UsersStartingBalance - amount - transactionCost,
            "Amount was not substracted"
        )
        
        assert.equal(
            ContractsEndingBalance,
            parseInt(ContractStartingBalance) + parseInt(amount),
            "Amount was not addded"
        )
    })
    it("should check users balance inside smart contract", async ()=>{
        const usersAddress = accounts[1];
        const initialUsersBalance = await web3.eth.getBalance(usersAddress)
        const gasPrice = "200000000000"

        const meta = await Payments.deployed()
        const contractReturn = await meta.getCurrentBalance({from: accounts[0], gasprice: gasPrice})
        const returnedBalance = contractReturn.receipt.logs[0].args["amount"].words[0]
        const transactionCost = contractReturn.receipt.gasUsed * gasPrice

        const currentUsersBalance = await web3.eth.getBalance(usersAddress)

        assert.strictEqual(
            returnedBalance,
            0,
            "get balance returned ethereum"
        )
        
        assert.strictEqual(
            parseInt(currentUsersBalance),
            parseInt(initialUsersBalance),
            "balance does not match"
        )


    })
    it("should withdraw users assets", async ()=>{
        const usersAddress = accounts[8];
        const gasPrice = "200000000000";
        const withdrawAmount = web3.utils.toWei("1", "ether");
        const initialUsersBalance = await web3.eth.getBalance(usersAddress)

        const meta = await Payments.deployed();
        const transaction = await meta.withdraw(withdrawAmount,{ gasPrice: gasPrice, from: usersAddress})
        const withdrawStatus = transaction.logs[0].event
        const transactionCost = parseInt(transaction.receipt.gasUsed) * parseInt(gasPrice)
        const currentUsersBalance = await web3.eth.getBalance(usersAddress)
        console.log(transaction)

        assert.strictEqual(
            withdrawStatus,
            "WithdrawFailure",
            "Wrong withdraw status"
        )
        
        assert.strictEqual( 
            parseInt(currentUsersBalance) + transactionCost,
            parseInt(initialUsersBalance),
            "ethereum has been transfered to account"
        )
    })

})