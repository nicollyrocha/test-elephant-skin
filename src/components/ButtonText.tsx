export const ButtonText = ({
	onClick,
	text,
	color,
	textColor,
	icon,
	width,
	disabled,
}: {
	onClick: () => void;
	text: string;
	color: string;
	textColor: string;
	icon?: string;
	width?: string;
	disabled?: boolean;
}) => {
	return (
		<button
			disabled={disabled}
			className={`${
				disabled ? 'bg-gray-300' : color
			} p-3 rounded-full shadow-inner shadow-white ${
				disabled ? 'text-gray-400' : textColor
			} ${width} flex flex-row justify-center items-center font-semibold`}
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
