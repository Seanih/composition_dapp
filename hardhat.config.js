require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: __dirname + '/.env.local' });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',
	networks: {
		hardhat: {},
		sepolia: {
			url: process.env.SEPOLIA_KEY,
			accounts: [process.env.MY_PK],
		},
	},
};
