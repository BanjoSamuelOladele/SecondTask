# MetaCrafters Project: Function Frontend

## Smart Contract
### Person Contract

```solidity
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
```

## React Frontend
### App Component

```jsx
import React, { useState } from "react"
import contractABI from "./abi.json"
const { ethers } = require("ethers")

function App() {
  const [inputName, setInputName] = useState("")
  const [inputAge, setInputAge] = useState("")
  const [naming, setNaming] = useState('')
  const [aging, setAging] = useState('')

  const contractAddress = "0xe4B512D9d52c5DBbC3D996cbA9e98cb6D3C52f0E"

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  
  async function updateName() {
    console.log("updateDetails function called")
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      try {
        console.log("contract", contract);
        await contract.updatePersonName(inputName);
        // await contract.updatePersonAge(inputAge);
      } catch (err) {
        console.error('Error:', err);
      }
    }
  }

  async function updateAge() {
    console.log("updateDetails function called")
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      try {
        // await contract.updatePersonName(inputName);
        await contract.updatePersonAge(inputAge);
      } catch (err) {
        console.error('Error:', err);
      }
    }
  }

  async function getEntityDetails () {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      try {
        const details = await contract.getPerson();
        const [personName, personAge] = details;
        setAging(`Age is ${personAge}`)
        setNaming(`Name is ${personName}`)
      } catch (err) {
        console.error('Error:', err);
      }
    }
  }

  return (
    <div className="bg-red-400">
     <div>
      <input 
      type="text" 
      placeholder="Type your name" 
      value={inputName}
      onChange={(e) => {
        setInputName(e.target.value)}}
      className="border rounded-md mb-4 outline-none px-4 py-2 block"
      />
       <input 
      type="text" 
      placeholder="Type your age" 
      value={inputAge}
      onChange={(e) => {
        setInputAge(e.target.value)}}
      className="border rounded-md mb-4 outline-none px-4 py-2 block"
      />
      <button onClick={updateName} className="border bg-black block">UpdateName</button>
      <button onClick={updateAge} className="border bg-black block">UpdateAge</button>
     </div>
     <div>
      <button onClick={getEntityDetails} className="border bg-black block">Get Details</button>
     </div>
     <p>{naming}</p>
     <p>{aging}</p>
    </div>
  );
}

export default App;
```

## Instructions
1. Ensure you have MetaMask installed and connected to the Ethereum testnet.
2. Deploy the `Person` smart contract to an Ethereum testnet(i deployed to mumbai here), and replace `contractAddress` in the React frontend with the deployed contract address.
3. Run the React app to interact with the smart contract through the provided UI.

## Usage
- Enter your name and age in the respective input fields.
- Click "UpdateName" to update your name on the blockchain.
- Click "UpdateAge" to update your age on the blockchain.
- Click "Get Details" to retrieve and display your stored name and age from the blockchain.

Note: This is a basic example and may need adjustments later on.