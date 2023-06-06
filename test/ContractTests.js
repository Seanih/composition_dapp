const {
	time,
	loadFixture,
} = require('@nomicfoundation/hardhat-network-helpers');

const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MyContract and MyInterface', function () {
	async function deployContractsFixture() {
		const [owner, user1, user2] = await ethers.getSigners();
		const interfaceContract = await ethers.getContractFactory('MyInterface');
		const contractContract = await ethers.getContractFactory('MyContract');

		const iContract = await interfaceContract.deploy();
		await iContract.deployed();

		const myContract = await contractContract.deploy(iContract.address);
		await myContract.deployed();

		let tx = await myContract.addNewUser(
			'Sean Anih',
			35,
			'Become a professional developer this summer'
		);
		await tx.wait();

		return { owner, user1, user2, iContract, myContract };
	}

	it('properly deploys both contracts', async () => {
		const { iContract, myContract } = await loadFixture(deployContractsFixture);

		expect(iContract.address).to.equal(await myContract.iContractAddress());
	});

	it('adds users to iContract via myContract', async () => {
		const { iContract } = await loadFixture(deployContractsFixture);

		let myData = await iContract.userIdMap(1);

		expect(myData.name).to.equal('Sean Anih');
		expect(await iContract.totalUsers()).to.equal(1);
	});

	it('properly introduces the selected user', async () => {
		const { myContract } = await loadFixture(deployContractsFixture);

		expect(await myContract.introduceUser(1)).to.equal(
			"Their name is Sean Anih and they're 35 years old"
		);
	});

	it('emits UserAdded event', async () => {
		const { myContract, iContract } = await loadFixture(deployContractsFixture);

		await expect(myContract.addNewUser('Bimboo', 36, 'Have fewer meetings'))
			.to.emit(iContract, 'UserAdded')
			.withArgs('Bimboo', 36, time.latestBlock);
	});
});
