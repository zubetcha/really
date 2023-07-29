import React from 'react';
import { COLORS, BG_COLORS, BORDER_COLORS } from '@/lib/constants/style';

export type ButtonProps = {
	children: React.ReactNode;
	size?: 'lg' | 'md' | 'sm';
	variant?: 'text' | 'filled' | 'outlined';
	shape?: 'round' | 'square';
	color?: 'primary' | 'secondary';
	text?: string;
	className?: string;
	disabled?: boolean;
	fullWidth?: boolean;
	onClick: () => void;
};

const variants = {
	text: 'bg-transparent',
	filled: '',
	outlined: 'bg-transparent border',
};

const bgColors = {
	primary: `${BG_COLORS.primary} text-slate-100`,
	secondary: `${BG_COLORS.secondary} text-slate-100`,
	error: `${BG_COLORS.error} text-slate-100`,
	warning: `${BG_COLORS.warning} text-slate-100`,
};

const borderColors = {
	primary: `${BORDER_COLORS.primary}`,
	secondary: `${BORDER_COLORS.secondary}`,
	error: `${BORDER_COLORS.error}`,
	warning: `${BORDER_COLORS.warning}`,
};

const sizes = {
	lg: 'text-lg px-6 py-3',
	md: 'text-base px-5 py-2.5',
	sm: 'text-sm px-4 py-2',
};

const shapes = {
	round: 'rounded-full',
	square: 'rounded-lg',
};

const Button = ({
	children,
	size = 'md',
	variant = 'filled',
	shape = 'round',
	color = 'primary',
	text = 'text-slate-900',
	className = '',
	disabled,
	fullWidth,
	onClick,
}: ButtonProps) => {
	const isFilled = variant === 'filled';
	const isOutlined = variant === 'outlined';

	const btnSize = sizes[size];
	const rounded = shapes[shape];
	const bgColor = isFilled ? bgColors[color] : variants[variant];
	const borderColor = isOutlined ? borderColors[color] : '';
	const width = fullWidth ? 'w-full' : 'w-fit';

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`flex flex-row items-center justify-center ${bgColor} ${borderColor} ${btnSize} ${rounded} ${width} ${text} ${className}`}
		>
			{children}
		</button>
	);
};

export default React.memo(Button);
