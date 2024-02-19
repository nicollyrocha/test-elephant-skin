import 'material-icons/iconfont/material-icons.css';

export const ButtonIcon = ({
	onClick,
	icon,
	height,
	width,
	textSize,
}: {
	onClick: () => void;
	icon: string;
	height: string;
	width: string;
	textSize: string;
}) => {
	return (
		<button
			className={`bg-opacity-20 bg-neutral-200 backdrop-blur-md ${height} ${width} rounded-full shadow-inner shadow-white`}
			onClick={() => onClick()}
		>
			<span
				className={`material-symbols-outlined ${textSize} text-white flex items-center justify-center`}
			>
				{icon}
			</span>
		</button>
	);
};
