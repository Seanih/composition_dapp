export const MyContractABI = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: '_age',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: '_goal',
				type: 'string',
			},
		],
		name: 'addNewUser',
		outputs: [
			{
				internalType: 'bool',
				name: 'success',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'iContractAddress',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'introduceUser',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'newShowUsers',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'age',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'walletAddress',
						type: 'address',
					},
					{
						internalType: 'string',
						name: 'goal',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'active',
						type: 'bool',
					},
				],
				internalType: 'struct MyInterface.User[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

export default MyContractABI;
