// this overcomes a Polygon Mumbai error where the addresses returned from a deployed contract appear random
// this gets the correct address, which is required for minted NFTs to approve the market to sell them
// otherwise, users won't be able to buy anything!
// error: https://github.com/nomiclabs/hardhat/issues/2162#issuecomment-1011824602

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();

  txHash = nftMarket.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftMarketAddress = txReceipt.contractAddress;

  console.log("nftMarket deployed to:", nftMarketAddress);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarketAddress);
  await nft.deployed();

  txHash = nft.deployTransaction.hash;
  // console.log(`NFT hash: ${txHash}\nWaiting for transaction to be mined...`);
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftAddress = txReceipt.contractAddress;

  console.log("nft deployed to:", nftAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
