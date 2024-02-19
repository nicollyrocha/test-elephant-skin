export const ButtonText = ({
	onClick,
	text,
	color,
	textColor,
	icon,
	width,
}: {
	onClick: () => void;
	text: string;
	color: string;
	textColor: string;
	icon?: string;
	width?: string;
}) => {
	return (
		<button
			className={`${color} p-3 rounded-full shadow-inner shadow-white ${textColor} ${width} flex flex-row justify-center items-center font-semibold`}
			onClick={() => onClick()}
		>
			<div className='flex flex-row gap-3'>
				<div>{text}</div>
				{icon && (
					<span
						className={`material-symbols-outlined text-2xlflex items-center justify-center`}
					>
						arrow_forward
					</span>
				)}
			</div>
		</button>
	);
};
