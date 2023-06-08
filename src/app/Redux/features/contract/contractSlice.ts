'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import MyContractABI from '../../../../../ABIs/MyContractABI';

declare global {
	interface Window {
		ethereum: any;
	}
}

interface AppState {
	isThereEthers: boolean;
	contractsConnected: boolean;
	connectionError: boolean;
	signer: ethers.providers.JsonRpcSigner | null; // Update the type for signer
	signerAddress: string;
	myContractAddress: string;
	iContractAddress: string;
}

const initialState: AppState = {
	isThereEthers: false,
	contractsConnected: false,
	connectionError: false,
	signer: null, // Set the initial value for signer to null
	signerAddress: '',
	myContractAddress: '0x52f077d59f16ebfcdfc15b1a82f77c1024009baa',
	iContractAddress: '0xa7a9bebffd1ff024b9dfbceae9a2957080035410',
};

export const getContractThunk = createAsyncThunk(
	'address/getAddressThunk',
	async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);

		await provider.send('eth_requestAccounts', []);

		const signer = provider.getSigner();
		const walletAddress = await signer.getAddress();

		return { signer, walletAddress };
	}
);

export const contractSlice = createSlice({
	name: 'contract',
	initialState,
	reducers: {
		checkForEthers: state => {
			if (window.ethereum) {
				state.isThereEthers = true;
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getContractThunk.fulfilled, (state, action) => {
				state.contractsConnected = true;
				state.connectionError = false;
				state.signer = action.payload.signer;
				state.signerAddress = action.payload.walletAddress;
			})
			.addCase(getContractThunk.rejected, state => {
				state.connectionError = true;
			});
	},
});

export const { checkForEthers } = contractSlice.actions;
export default contractSlice.reducer;
