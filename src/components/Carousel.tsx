import '../pages/index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../pages/index.css';
import { ButtonIcon } from './ButtonIcon';
// UNCOMMENT
/* import cityVideo from '../pages/videos/city_video.mp4'; */
import { useState } from 'react';
export const CarouselComponent = ({
	items,
	setCurrIndex,
}: {
	items: {
		title: string;
		subtitle: string;
		img: string;
		type: string;
		icon: string;
	}[];
	setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [openIconItem, setOpenIconItem] = useState([
		{
			type: '360',
			iconButton: 'add',
			value: true,
		},
		{
			type: 'tour',
			iconButton: 'add',
			value: true,
		},
		{
			type: 'amenities',
			iconButton: 'add',
			value: true,
		},
		{
			type: 'surroundings',
			iconButton: 'add',
			value: true,
		},
		{
			type: 'gallery',
			iconButton: 'add',
			value: true,
		},
		{
			type: 'video',
			iconButton: 'add',
			value: true,
		},
	]);

	const onCurrentChange = (index: any) => {
		setCurrIndex(index);
	};

	return (
		<div className='container'>
			<Swiper
				initialSlide={0}
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				modules={[EffectCoverflow, Pagination]}
				className='h-96'
				spaceBetween={50}
				slideToClickedSlide
				onActiveIndexChange={(e: any) => onCurrentChange(e.activeIndex)}
				normalizeSlideIndex
			>
				{items.map((item, index) => (
					<SwiperSlide style={{ height: '384px', width: '208px' }}>
						{item.type !== 'video' ? (
							<img
								className='object-cover rounded-lg h-96 w-52 absolute'
								src={item.img}
								alt={item.title}
							/>
						) : (
							<video autoPlay loop muted className='videobg rounded-lg'>
								{/* UNCOMMENT */}
								{/* <source src={cityVideo} type='video/mp4' /> */}
								Your browser doesn't support HTML video.
							</video>
						)}

						<div className='flex flex-row items-center justify-between px-2 relative top-[340px]'>
							<img src={item.icon} alt='' />

							<div className='text-white'>{item.title}</div>
							<ButtonIcon
								height='h-[30px]'
								width='w-[30px]'
								icon={openIconItem[index].value ? 'add' : 'remove'}
								onClick={() =>
									setOpenIconItem({
										...openIconItem,
										[index]: {
											...openIconItem[index],
											value: !openIconItem[index].value,
										},
									})
								}
								textSize='lg'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
