'use client';

import React, { useState, useEffect } from 'react';

type Form = Record<string, string>;

type Props = {
	initialForm: Form;
};

const useConversionRateCalculation = ({ initialForm }: Props) => {
	const [form, setForm] = useState<Form>({});
	const [expectedValue, setExpectedValue] = useState(0);

	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		console.log(name, value);
		setForm({ ...form, [name]: value });
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
