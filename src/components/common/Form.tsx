import React from 'react';

type Props = {
	label: string;
	direction?: 'row' | 'column';
	placeholder?: string;
	type?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, placeholder, type, value, onChange }: Props) => {
	return (
		<div>
			<label>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
