import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const {KEY, MUBAI} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia:{
      url: "",
      accounts:[]
    },
    mumbai:{
      url: MUBAI,
      accounts:[KEY as string]
    },
  },
};

export default config;
