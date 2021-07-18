//SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;


contract Payments{   
    struct Transaction {
        uint  ID;
        uint value;
        address from;
        address to;
        uint    time;
        }
    uint internal transactionNumber;
    mapping(uint => Transaction) internal  transactions;
    mapping(address => uint) internal balance;



    event Withdraw(Transaction t, bytes data);
    event Deposit(Transaction t);
    event WithdrawFailure();
    event CurrentBalance(uint amount);
    event Balance(uint amount);
   
   
    function deposit() public payable{
        transactionNumber += 1;
        Transaction memory t = Transaction(
            transactionNumber,
            msg.value * 1 ether,
            msg.sender,
            address(this),
            block.timestamp
        );
        transactions[transactionNumber] = t;
        uint currentBalance = balance[msg.sender];
        balance[msg.sender] = currentBalance + msg.value;

        emit Balance(balance[msg.sender]);

        emit Deposit(t);
    
    }
    function withdraw(uint amount) public payable{
        if (balance[msg.sender] >= amount){
            transactionNumber += 1;
            Transaction memory t = Transaction(
                transactionNumber,
                amount,
                address(this),
                msg.sender,
                block.timestamp
            );
            balance[msg.sender] -= amount;
            transactions[transactionNumber] = t;
            (bool sent, bytes memory data) = msg.sender.call{value: amount}("");
            require(sent, "could not withdraw");
            emit Withdraw(t, data);

        }else{
            emit WithdrawFailure();
        }

    }
    function getCurrentBalance() public {
        emit CurrentBalance(balance[msg.sender]);
    }




}