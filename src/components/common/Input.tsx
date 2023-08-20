import React from 'react';
import { Input as AntdInput } from 'antd';
import type { InputProps } from 'antd';

type Props = {
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	label?: React.ReactNode;
	placeholder?: string;
	helperText?: string;
} & InputProps;

const Input = ({
	name,
	value,
	onChange,
	id,
	label,
	placeholder,
	helperText,
	...props
}: Props) => {
	return (
		<div className="flex flex-col gap-y-2 w-full">
			{label && (
				<label htmlFor={id} className="text-gray-800 font-medium text-lg">
					{label}
				</label>
			)}
			<AntdInput
				id={id}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				{...props}
			/>
			{helperText && <span>{helperText}</span>}
		</div>
	);
};

export default Input;
