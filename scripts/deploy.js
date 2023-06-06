// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require('hardhat');

async function main() {
	const IContract = await ethers.getContractFactory('MyInterface');
	const iContract = await IContract.deploy();
	await iContract.deployed();

	const contract = await ethers.getContractFactory('MyContract');
	const myContract = await contract.deploy(iContract.address);
	await myContract.deployed();

	let tx = await myContract.addNewUser(
		'Sean A.',
		35,
		'become a professional developer this summer'
	);
	await tx.wait();

	console.log(`myContract deployed to: ${myContract.address}`);
	console.log(`iContract deployed to: ${await myContract.iContractAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error);
	process.exitCode = 1;
});
