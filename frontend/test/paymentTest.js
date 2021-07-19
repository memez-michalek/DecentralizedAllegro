const Payments = artifacts.require("Payments");


contract("Payments", accounts=>{
    it("should deposit user's funds to contract", async () => {
        let balance;
        const UsersBalance = accounts[0]
        
        const amount = 10; 

        const meta = await Payments.deployed();
        

        const ContractAddress = meta.address;
        balance = await meta.getBalance.call(ContractAddress)
        const ContractStartingBalance = balance.toNumber();
        
        balance = await meta.getBalance.call(UsersBalance);
        const UsersStartingBalance = balance.toNumber();

        //await meta.deposit().send({from: UsersBalance, value: amount})
        await meta.deposit({from: UsersStartingBalance, value: amount})

        balance = await meta.getBalance.call(UsersBalance);
        const UsersEndingBalance = balance.toNumber();

        balance = await meta.getBalance.call(ContractAddress)
        const ContractsEndingBalance = balance.toNumber();

        assert.Equal(
            UsersEndingBalance,
            UsersStartingBalance - amount,
            "Amount was not substracted"
        )
        assert.Equal(
            ContractsEndingBalance,
            ContractStartingBalance + amount,
            "Amount was not addded"
        )
    })

})