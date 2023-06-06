// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.12;

contract MyInterface {
    address public owner;
    User[] public allUsers;
    mapping(uint => User) public userIdMap;

    struct User {
        string name;
        uint age;
        address walletAddress;
        string goal;
        uint id;
        bool active;
    }

    event UserAdded(string indexed _name, uint indexed _age, uint _timeAdded);

    modifier OnlyOwner() {
        require(msg.sender == owner, "must be the owner to use");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function showAllUsers() public view returns (User[] memory) {
        return allUsers;
    }

    function totalUsers() public view returns (uint) {
        return allUsers.length;
    }

    function addUser(
        string memory _name,
        uint _age,
        string memory _goal
    ) public returns (bool success) {
        require(bytes(_name).length > 0, "name can't be blank");
        require(_age > 17, "must be an adult");
        require(bytes(_goal).length > 4, "have a real goal...");

        User memory user = User(
            _name,
            _age,
            msg.sender,
            _goal,
            allUsers.length + 1,
            true
        );

        if (allUsers.length == 0) {
            userIdMap[1] = user;
        } else {
            userIdMap[allUsers.length + 1] = user;
        }

        allUsers.push(user);

        emit UserAdded(_name, _age, block.timestamp);

        return success = true;
    }

    function deactivateUser(
        uint _userId
    ) external OnlyOwner returns (string memory) {
        require(userIdMap[_userId].id == _userId, "user does not exist");

        userIdMap[_userId].active = false;
        allUsers[_userId - 1].active = false;

        return "user deleted";
    }
}
