require("dotenv").config();
const prompt = require("prompt-sync")({ sigint: true });

const { ethers } = require("hardhat");
const { abi, address } = require("./constants/constants.js");
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

//provider ~ Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "maticmum"),
  API_KEY
);
//Signer ~ me
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract instance
const UniqueIdCheck = new ethers.Contract(address, abi, signer);

async function main() {
  //interact with the sol and deploy.js

  // const tx = await UniqueIdCheck.addId(123);
  // await tx.wait();
  // console.log("ID added");

  let inputID = prompt("Enter your ID");
  console.log("Checking for ID: " + inputID);
  const tx = await UniqueIdCheck.checkIfIdExists(inputID);
  console.log(tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
