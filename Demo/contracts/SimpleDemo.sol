pragma solidity 0.5.0;

contract SimpleDemo {
    address buyer;
    address payable seller;
    uint price;

    constructor(uint _integer) public {
        price = _integer;
        seller = msg.sender;
    }

    function buyItem() public payable {
        buyer = msg.sender;
        require(msg.value == price);
    }


    function transferFunds() public {
        buyer = msg.sender;
        address(seller).transfer(price);
    }
}

