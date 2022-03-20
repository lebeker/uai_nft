async function main() {
  // Start deployment, returning a promise that resolves to a contract object
  const lbNFT =
    await (
      await ethers.getContractFactory("NFT_uai")
    ).deploy();

  await lbNFT.deployed();
  console.log("Contract deployed to address:", lbNFT.address);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
