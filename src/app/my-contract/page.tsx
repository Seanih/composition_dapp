'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppDispatch, RootState } from '../Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import MyContractABI from '../../../ABIs/MyContractABI';
import { ethers } from 'ethers';

function MyContractPage() {
	const [allUsers, setAllUsers] = useState([]);
	const { contractsConnected, signer, myContractAddress } = useSelector(
		(state: RootState) => state.smartContracts
	);

	const myContractInstance = new ethers.Contract(
		myContractAddress,
		MyContractABI,
		signer ?? undefined
	);

	const router = useRouter();

	const dispatch = useDispatch<AppDispatch>();

	const showAllUsers = async () => {
		const users = await myContractInstance.newShowUsers();

		setAllUsers(users);
	};

	useEffect(() => {
		if (!contractsConnected) {
			router.push('/');
		}
	});

	return (
		<div className='flex flex-col items-center'>
			<h1>MyContract Page</h1>
			<button className='bg-teal-700 px-4 rounded-md' onClick={showAllUsers}>
				log all users
			</button>
			{allUsers.length > 0 && (
				<ul>
					{allUsers.map(user => (
						<li key={user[4]}>{`${user[0]} is ${user[1]} years old.`}</li>
					))}
				</ul>
			)}
		</div>
	);
}
export default MyContractPage;
