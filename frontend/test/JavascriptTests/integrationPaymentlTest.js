const Payments = artifacts.require("Payments");

contract("integration Payment test", (accounts)=>{

    it("should deposit funds from user's account then give the balance and finally withdraw all the funds", async ()=>{
        const usersAddress = accounts[6];
        const amount = web3.utils.toWei("1", "ether");
        const initialUsersBalance = await web3.eth.getBalance(usersAddress);
        const gasPrice = 200000000000;

        const meta = await Payments.deployed();
        const paymentsAddress = meta.address;
        const initialPaymentsBalance = await web3.eth.getBalance(paymentsAddress);

        const transaction1 = await meta.deposit({from: usersAddress, gasPrice: gasPrice, value: amount});
        const transaction1Price = parseInt(transaction1.receipt.gasUsed) * gasPrice;
        const usersBalanceAfterTransaction1 = web3.eth.getBalance(usersAddress);

        const transaction2 = await meta.getCurrentBalance({from: usersAddress, gasPrice: gasPrice});
        const paymentsBalanceAfterTransaction2 = await web3.eth.getBalance(paymentsAddress);
        const transaction2Price = parseInt(transaction2.receipt.gasUsed) * gasPrice;
        const usersBalanceAfterTransaction2 = await parseInt(web3.eth.getBalance(usersAddress));

        const transaction3 = await meta.withdraw(amount, { gasPrice: gasPrice, from: usersAddress});
        const transaction3Price = parseInt(transaction3.receipt.gasUsed) * gasPrice
        const paymentsBalanceAfterTransaction3 = await web3.eth.getBalance(paymentsAddress);
        const usersBalanceAfterTransaction3 = await web3.eth.getBalance(usersAddress);

        const AllTransactionPrice = transaction1Price + transaction2Price + transaction3Price;
        
        assert.strictEqual(
            parseInt(usersBalanceAfterTransaction3) + AllTransactionPrice,
            parseInt(initialUsersBalance),
            "Too many ether has been sent back"
        )
        assert.strictEqual(
            paymentsBalanceAfterTransaction2,
            amount,
            "wrong amount has been deposited"
        )
        assert.strictEqual(
            parseInt(paymentsBalanceAfterTransaction3),
            0,
            "amount has not been withdrawn"
        )
        assert.strictEqual(
            parseInt(initialPaymentsBalance),
            0,
            "initial payment balance does not equal zero"
        )
        assert.notStrictEqual(
            parseInt(transaction1Price) + parseInt(transaction2Price) + parseInt(transaction3Price),
            amount,
            "invalid amount of eth to transfer"
        )
        assert.notStrictEqual(
            parseInt(usersBalanceAfterTransaction1),
            0,
            "too little ether to proceed with transaction 2"
        )
        assert.notStrictEqual(
            parseInt(usersBalanceAfterTransaction2),
            0,
            "too little ether to proceed with transaction 3"
        )
    })
})
