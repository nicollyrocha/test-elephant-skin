import { useState } from 'react';
import LogoWithoutIcon from '../images/logo-without-icon.png';
import UserIcon from '../images/user-icon.png';
import '../pages/index.css';

export const Header = () => {
	const [clicked, setClicked] = useState({
		home: true,
		project: false,
		sales: false,
	});
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	return (
		<div className='w-[97%] flex flex-row justify-between items-start pt-12'>
			<div className='w-9/12 hidden md:flex md:flex-col'>
				<div className='flex flex-row justify-start gap-7 text-white'>
					<div className='flex flex-col'>
						<div
							className={`cursor-pointer hover:font-semibold mb-1 ${
								clicked.home && 'font-semibold'
							}`}
							onClick={() => setClicked({ ...clicked, home: !clicked.home })}
						>
							HOME
						</div>
						{clicked.home && <hr />}
					</div>

					<div className='flex flex-col'>
						<div
							className={`cursor-pointer hover:font-semibold mb-1 ${
								clicked.project && 'font-semibold'
							}`}
							onClick={() => setClicked({ ...clicked, project: !clicked.project })}
						>
							PROJECT
						</div>
						{clicked.project && <hr />}
					</div>
					<div className='flex flex-col'>
						<div
							className={`cursor-pointer hover:font-semibold mb-1 ${
								clicked.sales && 'font-semibold'
							}`}
							onClick={() => setClicked({ ...clicked, sales: !clicked.sales })}
						>
							SALES
						</div>
						{clicked.sales && <hr />}
					</div>
				</div>
				<div className='bg-gradient-to-r mt-[-1px] h-[1px] w-[100%] from-white/50 via-white/30 to-transparent'></div>
			</div>
			<div className='flex md:hidden flex-col'>
				<div
					className='bg-white rounded-full flex items-center justify-center h-10 w-10 cursor-pointer'
					onClick={() => setOpenMobileMenu(!openMobileMenu)}
				>
					<span className='material-symbols-outlined text-black'>
						{openMobileMenu === false ? 'menu' : 'close'}
					</span>
				</div>
				{openMobileMenu && (
					<div className='dropdown dropdown-4 absolute z-[1000] mt-12'>
						<div className='flex flex-col gap-3 bg-neutral-700 p-5 rounded dropdown_menu'>
							<div className='text-white cursor-pointer hover:underline'>HOME</div>
							<hr className='opacity-50' />
							<div className='text-white cursor-pointer hover:underline'>PROJECT</div>
							<hr className='opacity-50' />
							<div className='text-white cursor-pointer hover:underline'>SALES</div>
						</div>
					</div>
				)}
			</div>
			<div className='flex items-center gap-5 w-max'>
				<div className='rounded-full bg-gradient-to-r from-neutral-500 to-white p-0.5 w-fit'>
					<img
						className='rounded-full border-2 border-neutral-700 border-solid w-10 md:w-full'
						src={UserIcon}
						alt='icon'
					/>
				</div>

				<img className='w-32 md:w-full' src={LogoWithoutIcon} alt='logo' />
			</div>
		</div>
	);
};
