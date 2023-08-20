import type { InputProps as AntdInputProps } from 'antd';

export type InputUnit = 'currency' | 'percent';

export type InputProps = {
	id: string;
	label?: React.ReactNode;
	unit: InputUnit;
	initialValue: string;
} & AntdInputProps;
