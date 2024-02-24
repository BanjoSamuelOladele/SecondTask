// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Person {
    string private personName;
    uint private personAge;

    constructor(string memory name, uint age) {
        personName = name;
        personAge = age;
    }
    function updatePersonName(string memory newName) external {
        personName = newName;
    }

    function updatePersonAge(uint newAge) external {
        personAge = newAge;
    }

    function getPerson() external view returns (string memory name, uint age) {
        return (personName, personAge);
    }
}