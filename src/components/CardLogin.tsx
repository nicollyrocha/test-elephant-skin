import LoginImg from '../images/img-login.png';
import Logo from '../images/logo.svg';
import { ButtonText } from './ButtonText';
import { useState } from 'react';
export const CardLogin = ({ onClick }: { onClick: () => void }) => {
	const [userInfo, setUserInfo] = useState({ email: '', password: '' });
	return (
		<>
			<div className='bg-neutral-800 bg-opacity-70 p-10 rounded-xl flex flex-col md:flex-row shadow-inner shadow-white md:gap-10'>
				<div className='h-full md:flex items-center justify-center hidden'>
					<img className='relative' src={LoginImg} alt='login img' />
					<img className='absolute bottom-52 w-48' src={Logo} alt='login img' />
				</div>
				<div className='text-white flex flex-col md:gap-10 gap-5'>
					<div className='flex flex-col gap-5'>
						<div className='text-3xl'>ACCESS THE PLATFORM</div>
						<div className='text-base'>
							Access as a spectator by clicking let me in or log in as a broker.
						</div>
					</div>
					<div className='cursor-pointer underline'>JOIN AS GUEST</div>
					<ButtonText
						onClick={() => {}}
						text={'LET ME IN'}
						color='bg-transparent'
						textColor='text-white'
						width='w-32'
					/>
					<hr />
					<div className='cursor-pointer underline'>I'M A BROKER</div>
					<div className='flex flex-col gap-5'>
						<input
							onChange={(e) => {
								setUserInfo({ ...userInfo, email: e.target.value });
							}}
							className='bg-neutral-700 rounded-full shadow-inner shadow-white py-3 px-3 focus:outline-none'
							type='text'
							placeholder='Type your email'
						/>
						<input
							onChange={(e) => {
								setUserInfo({ ...userInfo, password: e.target.value });
							}}
							className='bg-neutral-700 rounded-full shadow-inner shadow-white py-3 px-3 focus:outline-none'
							type='password'
							placeholder='Type your password'
						/>
					</div>
					<div className='flex flex-col gap-5'>
						<ButtonText
							disabled={userInfo.email && userInfo.password ? false : true}
							onClick={() => onClick()}
							text={'LOGIN'}
							color='bg-white'
							textColor='text-black'
							icon='arrow_forward'
							width='w-full'
						/>
						<div className='flex flex-row gap-2 w-full justify-center'>
							<div>Don't have an account?</div>
							<div className='cursor-pointer underline text-yellow-200'>
								Create new account
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
