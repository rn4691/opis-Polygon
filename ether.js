const { ethers } = require("ethers");

// ethereum to metamask
const provider = new ethers.providers.Web3Provider(window.ethereum);

await provider.send("eth_requestAccounts", [opis]);

const signer = provider.getSigner();
