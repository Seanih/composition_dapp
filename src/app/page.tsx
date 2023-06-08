'use client';

import {
	checkForEthers,
	getContractThunk,
} from './Redux/features/contract/contractSlice';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState, AppDispatch } from './Redux/store';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
	const { isThereEthers, contractsConnected, connectionError, signerAddress } =
		useSelector((state: RootState) => state.smartContracts);

	const dispatch = useDispatch<AppDispatch>();

	const formattedAddress = (address: string) =>
		address.slice(0, 5) + '...' + address.slice(address.length - 4);

	useEffect(() => {
		dispatch(checkForEthers());
	});

	return (
		<main className='flex flex-col items-center justify-center p-24'>
			<h1>Main Page</h1>
			{isThereEthers && !contractsConnected ? (
				<button
					className='px-4 bg-sky-700'
					type='button'
					onClick={() => dispatch(getContractThunk())}
				>
					Connect Smart Contract
				</button>
			) : null}

			{!isThereEthers && (
				<button className='px-4 bg-green-700' type='button'>
					Install Metamask
				</button>
			)}

			{contractsConnected && (
				<>
					<p>Contract is connected!</p>
					<p>
						Signer address: <span>{formattedAddress(signerAddress)}</span>
					</p>
					<Link
						href={'/my-contract'}
						className='bg-green-600 px-4 my-4 rounded-md'
					>
						<button>Play with MyContract</button>
					</Link>
					<Link href={'i-contract'} className='bg-sky-700 px-4 rounded-md'>
						<button>Play with Reference Contract</button>
					</Link>
				</>
			)}
		</main>
	);
}
