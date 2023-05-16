

async function main() {
  const UniqueIdCheck = await ethers.getContractFactory("UniqueIdCheck");

  // Start deployment, returning a promise that resolves to a contract object
  const UniqueIdCheckContract = await UniqueIdCheck.deploy();
  console.log("Contract deployed to address:", UniqueIdCheckContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
