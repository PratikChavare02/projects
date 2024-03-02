// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract lottery{
    address public manager;
    address payable[] public buyer;

    constructor(){

        manager=msg.sender;
    } 
    receive() external payable {
        require(msg.value==1 ether);
        buyer.push(payable(msg.sender));
     }

    function seebalance() public view returns(uint){
        require(msg.sender==manager);
        return address(this).balance;
    }
    function random() public view returns(uint){
        return uint(keccak256(abi.encodePacked(block.basefee,block.timestamp,buyer.length)));
    }

    function seewinner() public {
        require(msg.sender==manager);
        require(buyer.length>=3);
        uint r=random();
        address payable winner;
        uint index=r % buyer.length;
        winner=buyer[index];
        winner.transfer(seebalance());
        buyer=new address payable[](0);


    }


    


}