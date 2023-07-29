import React from 'react';

type Props = {
	children: React.ReactNode;
	size?: 'lg' | 'md' | 'sm';
	variant?: 'text' | 'filled' | 'outlined';
	shape?: 'round' | 'square';
	color?: 'primary' | 'secondary';
	disabled?: boolean;
	fullWidth?: boolean;
	onClick: () => void;
};

const variants = {
	text: 'bg-transparent text-slate-900',
	filled: '',
	outlined: 'bg-transparent text-slate-900 border',
};

const colors = {
	primary: 'blue-500',
	secondary: 'gray-800',
	success: '',
	error: 'red-500',
	info: '',
	warning: 'yellow-400',
};

const bgColors = {
	primary: `bg-${colors.primary} text-slate-100`,
	secondary: `bg-${colors.secondary} text-slate-100`,
	error: `bg-${colors.error} text-slate-100`,
	warning: `bg-${colors.warning} text-slate-100`,
};

const borderColors = {
	primary: `border-${colors.primary}`,
	secondary: `border-${colors.secondary}`,
	error: `border-${colors.error}`,
	warning: `border-${colors.warning}`,
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
	disabled,
	fullWidth,
	onClick,
}: Props) => {
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
			className={`flex flex-row items-center justify-center ${bgColor} ${borderColor} ${btnSize} ${rounded} ${width}`}
		>
			{children}
		</button>
	);
};

export default React.memo(Button);
