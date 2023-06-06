// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

import "./MyInterface.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyContract {
    MyInterface private myInterface;
    address public iContractAddress;

    constructor(address _address) {
        iContractAddress = _address;

        myInterface = MyInterface(iContractAddress);
    }

    function newShowUsers() public view returns (MyInterface.User[] memory) {
        return myInterface.showAllUsers();
    }

    function addNewUser(
        string memory _name,
        uint _age,
        string memory _goal
    ) public returns (bool success) {
        return myInterface.addUser(_name, _age, _goal);
    }

    function introduceUser(uint _id) public view returns (string memory) {
        (string memory userName, uint age, , , , ) = myInterface.userIdMap(_id);

        require(bytes(userName).length > 0 && age > 17, "User doesn't exist");

        string memory phrase = string(
            string.concat(
                "Their name is ",
                userName,
                " and they're ",
                Strings.toString(age),
                " years old"
            )
        );

        return phrase;
    }
}
