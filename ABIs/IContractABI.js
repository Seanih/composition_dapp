export const IContractABI = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_age',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_timeAdded',
				type: 'uint256',
			},
		],
		name: 'UserAdded',
		type: 'event',
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
		name: 'addUser',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'allUsers',
		outputs: [
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
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_userId',
				type: 'uint256',
			},
		],
		name: 'deactivateUser',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
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
		inputs: [],
		name: 'showAllUsers',
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
	{
		inputs: [],
		name: 'totalUsers',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'userIdMap',
		outputs: [
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
		stateMutability: 'view',
		type: 'function',
	},
];

export default IContractABI;
