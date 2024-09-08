import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAxios } from '../api/axios';
import { fill } from '../redux/user/actionCreators';

const Register: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');

	const dispatch = useDispatch();

	const writeCredentialsToState = (data) => {
		dispatch(fill(data));
	};

	return (
		<>
			<div className={clsx('w-full', 'h-full', 'grid', 'justify-center')}>
				<h1 className={clsx('text-7xl', 'mt-[5%]', 'mx-auto')}>REGISTER</h1>

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[650px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="email"
					name="email"
					placeholder="Email"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[154px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setEmail(e.target.value);
					}}
				></input>

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[650px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="password"
					name="password"
					placeholder="Password"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[279px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setPassword(e.target.value);
					}}
				></input>

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[650px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="text"
					name="nickname"
					placeholder="Nickname"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[405px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setNickname(e.target.value);
					}}
				></input>

				<Link to="/" className={clsx('justify-self-center')}>
					<button
						className={clsx(
							'w-[300px]',
							'h-[75px]',
							'bg-[#000000]',
							'justify-self-center',
							'mt-[50px]',
							'rounded-[25px]',
							'text-white',
							'text-4xl'
						)}
						onClick={() => {
							registerAxios(email, password, nickname, writeCredentialsToState);
						}}
					>
						ENTER
					</button>
				</Link>

				<p
					className={clsx(
						'w-auto',
						'justify-self-center',
						'mt-[20px]',
						'text-[#807e7e]',
						'text-2xl'
					)}
				>
					already have an account?
				</p>

				<Link to="/login" className={clsx('justify-self-center')}>
					<button
						className={clsx(
							'w-[300px]',
							'h-[75px]',
							'justify-self-center',
							'mt-[20px]',
							'rounded-[25px]',
							'text-[#807e7e]',
							'text-4xl',
							'border-[3px]',
							'border-solid',
							'border-[#807e7e]'
						)}
					>
						LOG IN
					</button>
				</Link>
			</div>
		</>
	);
};

export default Register;
