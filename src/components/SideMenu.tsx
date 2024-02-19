import Icon360 from '../images/icon-360.svg';
import IconPerson360 from '../images/icon-person-360.svg';
import IconCircle from '../images/icon-circle.svg';
import IconSurroundings from '../images/icon-surroundings.svg';
import IconGallery from '../images/icon-gallery.svg';
import IconMovie from '../images/icon-movie.svg';
import { ButtonIcon } from './ButtonIcon';
import { useState } from 'react';

export const SideMenu = ({
	setOpenCarousel,
	openCarousel,
	iconButtonSideMenu,
	setCurrIndex,
}: {
	setOpenCarousel: React.Dispatch<React.SetStateAction<boolean>>;
	openCarousel: boolean;
	iconButtonSideMenu: 'remove' | 'add';
	setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [showText, setShowText] = useState({ help: false, logout: false });
	const onChangeOpenCarousel = () => {
		setOpenCarousel((prev) => !prev);
		if (openCarousel) setCurrIndex(0);
	};

	return (
		<>
			<div className='flex flex-col pb-10 z-[1000]'>
				<div className='flex gap-10 flex-row h-[90%]'>
					{openCarousel === false && (
						<div className='md:flex justify-center items-center hidden'>
							<div className='h-[30%] w-px my-8 border-dotted border-[1px] border-white/50 absolute z-'></div>
							<div className='flex flex-col gap-10 justify-center relative z-50'>
								<img src={Icon360} alt='360' />
								<img src={IconPerson360} alt='person360' />
								<img src={IconCircle} alt='circle' />
								<img src={IconSurroundings} alt='surroundings' />
								<img src={IconGallery} alt='gallery' />
								<img src={IconMovie} alt='movie' />
							</div>
						</div>
					)}

					<div className='flex flex-row justify-center'>
						<div className='absolute flex self-center z-10'>
							<ButtonIcon
								textSize='text-3xl'
								height='h-[56px]'
								width='w-[56px]'
								onClick={onChangeOpenCarousel}
								icon={iconButtonSideMenu}
							/>
						</div>
						<div className='w-[1px] bg-gradient-to-b from-transparent from-3%  via-white/40 via-50% to-transparent to-97% relative z-0'></div>
					</div>
				</div>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-row gap-5 items-center hover:transition-opacity hover:duration-1000 hover:ease-linear'>
						<span
							onMouseEnter={() => setShowText({ ...showText, help: true })}
							onMouseLeave={() => setShowText({ ...showText, help: false })}
							className='material-icons text-white/50 cursor-pointer hover:text-white'
						>
							help
						</span>
						{showText.help && (
							<div className='text-white text-xs absolute ml-10'>HELP</div>
						)}
					</div>
					<div className='flex flex-row gap-5 items-center'>
						<span
							onMouseEnter={() => setShowText({ ...showText, logout: true })}
							onMouseLeave={() => setShowText({ ...showText, logout: false })}
							className='material-icons text-white/50 cursor-pointer hover:text-white'
						>
							power_settings_new
						</span>
						{showText.logout && (
							<div className='text-white text-xs absolute ml-10'>LOGOUT</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
