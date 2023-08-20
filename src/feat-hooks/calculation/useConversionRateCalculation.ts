'use client';

import React, { useState, useEffect, useMemo } from 'react';
import type { InputUnit } from '@/types/common';

type Form = Record<string, string>;

type Props = {
	initialForm: Form;
};

const useConversionRateCalculation = ({ initialForm }: Props) => {
	const [form, setForm] = useState<Form>({});
	const [expectedValue, setExpectedValue] = useState(0);

	const valueFormatter = useMemo(() => {
		return {
			currency: (value: string) => {
				const newValue = value.replace(/[^0-9]/g, '') || '0';
				return new Intl.NumberFormat('en-US').format(parseInt(newValue));
			},
			percent: (value: string) => {
				// const pattern = /^(\d{2,})(\.\d{1,2})?$/;
				const newValue = value.replace(/[^0-9.]/g, '');

				// if (!pattern.test(newValue)) {
				// 	return '';
				// }

				return newValue;
			},
		};
	}, []);

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		unit: InputUnit
	) => {
		const { name, value } = e.target;
		const newValue = valueFormatter[unit](value);

		setForm({ ...form, [name]: newValue });
	};

	const handleCalcClick = () => {};
	const handleInitClick = () => {
		setForm(initialForm);
	};

	useEffect(() => {
		setForm(initialForm);
	}, [initialForm]);

	return {
		form,
		expectedValue,
		handleFormChange,
		handleCalcClick,
		handleInitClick,
	};
};

export default useConversionRateCalculation;
