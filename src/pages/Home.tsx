import { useState } from 'react';
import { ButtonIcon } from '../components/ButtonIcon';
import Logo from '../images/logo.svg';
import './index.css';
// UNCOMMENT
/* import sea from './videos/sea.mp4';
import urban from './videos/urban.mp4';
import rain from './videos/rain.mp4'; */
import { CardLogin } from '../components/CardLogin';
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import building2 from '../images/building2.jpg';
import building3 from '../images/building3.jpg';
import building4 from '../images/building4.jpg';
import gallery from '../images/gallery.jpg';
import surroundings from '../images/surroundings.jpg';
import galleryImg from '../images/galleryImg.jpg';
import { CarouselComponent } from '../components/Carousel';
import Icon360 from '../images/icon-360.svg';
import IconPerson360 from '../images/icon-person-360.svg';
import IconCircle from '../images/icon-circle.svg';
import IconSurroundings from '../images/icon-surroundings.svg';
import IconGallery from '../images/icon-gallery.svg';
import IconMovie from '../images/icon-movie.svg';
import { ButtonText } from '../components/ButtonText';
import urbanImg from '../images/urbanImg.png';
/* import TourVideo from '../pages/videos/tourVideo.mp4';
import AmenitiesVideo from '../pages/videos/amenitiesVideo.mp4'; 
import cityVideo from '../pages/videos/city_video.mp4';
*/

export const Home = () => {
	const [openLogin, setOpenLogin] = useState(false);
	const [openHomePageLogged, setOpenHomePageLogged] = useState(false);
	const [openCarousel, setOpenCarousel] = useState(false);
	const [currIndex, setCurrIndex] = useState(0);

	const iconButtonSideMenu = openCarousel ? 'remove' : 'add';
	const list = [
		{
			title: '360° BUILDING',
			subtitle: 'View the building and availability',
			img: urbanImg,
			type: '360',
			icon: Icon360,
		},
		{
			title: 'Tour virtual',
			subtitle: 'Take a tour of our building',
			img: building2,
			type: 'tour',
			icon: IconPerson360,
		},
		{
			title: 'Amenities',
			subtitle: 'See each floor and its amenities',
			img: building3,
			type: 'amenities',
			icon: IconCircle,
		},
		{
			title: 'Surroundings',
			subtitle: 'See whats around',
			img: building4,
			type: 'surroundings',
			icon: IconSurroundings,
		},
		{
			title: 'Gallery',
			subtitle: 'View images in high resolution',
			img: gallery,
			type: 'gallery',
			icon: IconGallery,
		},
		{
			title: 'Video',
			subtitle: '',
			img: '',
			type: 'video',
			icon: IconMovie,
		},
	];
	const onClickButtonLogin = () => {
		setOpenLogin(true);
	};
	const onClickButtonOpenHome = () => {
		setOpenLogin(false);
		setOpenHomePageLogged(true);
	};
	console.log(openCarousel);
	return (
		<>
			{!openLogin && !openHomePageLogged && (
				<>
					<video autoPlay loop muted className='videobg'>
						{/* UNCOMMENT */}
						{/* <source src={sea} type='video/mp4' /> */}
						Your browser doesn't support HTML video.
					</video>
					<div className='home flex flex-col items-center justify-center gap-20 animate-slide'>
						<img src={Logo} alt='logo' />
						<div className='flex flex-col gap-8 items-center justify-center'>
							<div className='text-white text-[24px]'>START EXPERIENCE</div>
							<ButtonIcon
								height='h-[56px]'
								width='w-[56px]'
								icon='arrow_forward'
								onClick={onClickButtonLogin}
								textSize='text-3xl'
							/>
						</div>
					</div>
				</>
			)}
			{openLogin && (
				<>
					<div>
						<video autoPlay loop muted className='videobg'>
							{/* UNCOMMENT */}
							{/* <source src={urban} type='video/mp4' /> */}
							Your browser doesn't support HTML video.
						</video>
					</div>

					<div className='animate-slide'>
						<CardLogin onClick={onClickButtonOpenHome} />
					</div>
				</>
			)}
			{openHomePageLogged === true && (
				<div
					style={{
						backgroundImage: `${
							openCarousel
								? `url(${
										list[currIndex].type === 'gallery'
											? galleryImg
											: list[currIndex].type === 'surroundings'
											? surroundings
											: ''
								  })`
								: ''
						}`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						transition: 'background 0.5s linear',
						opacity: '1',
					}}
					className='div-bg w-full h-screen'
				>
					<div>
						{list[currIndex].type === 'video' && (
							<video
								style={{ transition: 'background 1s linear' }}
								autoPlay
								loop
								muted
								className='videobg'
							>
								{/* UNCOMMENT */}
								{/* <source src={cityVideo} type='video/mp4' /> */}
								Your browser doesn't support HTML video.
							</video>
						)}
						{list[currIndex].type === '360' && (
							<video autoPlay loop muted className='videobg'>
								{/* UNCOMMENT */}
								{/* <source src={urban} type='video/mp4' /> */}
								Your browser doesn't support HTML video.
							</video>
						)}
						{list[currIndex].type === 'tour' && (
							<video autoPlay loop muted className='videobg'>
								{/* UNCOMMENT */}
								{/* <source src={TourVideo} type='video/mp4' /> */}
								Your browser doesn't support HTML video.
							</video>
						)}
						{list[currIndex].type === 'amenities' && (
							<video autoPlay loop muted className='videobg'>
								{/* UNCOMMENT */}
								{/* <source src={AmenitiesVideo} type='video/mp4' /> */}
								Your browser doesn't support HTML video.
							</video>
						)}
						{!openCarousel && (
							<video autoPlay loop muted className='videobg'>
								{/* UNCOMMENT */}
								{/* <source src={rain} type='video/mp4' /> */}
								Your browser doesn't support HTML video.
							</video>
						)}
					</div>

					<div className='w-full h-screen'>
						<div className='flex gap-3 md:gap-10 px-10 h-screen'>
							<SideMenu
								setOpenCarousel={setOpenCarousel}
								openCarousel={openCarousel}
								iconButtonSideMenu={iconButtonSideMenu}
								setCurrIndex={setCurrIndex}
							/>
							<div className='flex flex-col w-full'>
								<Header />
								{!openCarousel ? (
									<div className='flex flex-col items-center justify-around h-full text-white animate-slide'>
										<div className='flex flex-col gap-12 items-center w-full'>
											<div className='text-5xl text-center md:text-start'>
												INNOVATION IN YOUR HANDS
											</div>
											<div className='text-2xl opacity-70 md:w-5/12 text-center'>
												Explore, Interact and Transform the Real Estate Market with Our
												Smart Interactive Table.
											</div>
										</div>

										<div className='flex flex-col items-center gap-5'>
											<div className='text-white text-[24px]'>START EXPERIENCE</div>
											<ButtonIcon
												textSize='text-3xl'
												height='h-[56px]'
												width='w-[56px]'
												icon='arrow_forward'
												onClick={() => {}}
											/>
										</div>
									</div>
								) : (
									<>
										<div className='flex flex-col h-full mt-10 md:mt-32 justify-between'>
											<div className='flex flex-col md:flex-row items-center px-20'>
												<div className='flex flex-col gap-5 md:w-6/12 animate-slideY'>
													<div className='text-5xl text-white text-center md:text-start'>
														{list[currIndex].title}
													</div>
													<div className='text-2xl text-white text-center md:text-start'>
														{list[currIndex].subtitle}
													</div>
													<ButtonText
														text='LET ME IN'
														color='bg-white'
														onClick={() => {}}
														textColor='text-black'
														icon='arrow_forward'
														width='md:w-3/12'
													/>
												</div>
												<div className='md:w-7/12 flex items-center justify-center animate-slide '>
													<CarouselComponent setCurrIndex={setCurrIndex} items={list} />
												</div>
											</div>
											<div className='flex justify-end px-32 items-center content-end mb-10 gap-2'>
												<div className='text-white text-xl'>{currIndex + 1}</div>
												<div className='bg-gradient-to-r mt-[-1px] h-[1px] w-7 from-white/50 via-white/30 to-transparent'></div>
												<div className='text-white/70 text-xl'>{list.length}</div>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
