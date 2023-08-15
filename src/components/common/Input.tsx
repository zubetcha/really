import React from 'react';
import { Input as AntdInput } from 'antd';
import type { InputProps } from 'antd';

type Props = {
	id: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: React.ReactNode;
	placeholder?: string;
	helperText?: string;
} & InputProps;

const Input = ({
	id,
	value,
	onChange,
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
				name={id}
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
