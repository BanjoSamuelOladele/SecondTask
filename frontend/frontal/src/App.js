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