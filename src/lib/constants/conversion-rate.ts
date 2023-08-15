const JEONSE_TO_MONTHLY_FEE = [
	{
		id: 'jeonse',
		label: '전세금',
		type: 'number',
		suffix: '원',
		initialValue: 0,
		placeholder: '총 전세금을 입력해주세요',
	},
	{
		id: 'deposit',
		label: '보증금',
		type: 'number',
		suffix: '원',
		initialValue: 0,
		placeholder: '보증금을 입력해주세요',
	},
	{
		id: 'conversionRate',
		label: '전월세 전환율',
		type: 'number',
		suffix: '%',
		initialValue: 0.0,
		placeholder: '전월세 전환율을 입력해주세요',
	},
];

const MONTHLY_FEE_TO_JEONSE = [
	{
		id: 'deposit',
		label: '보증금',
		// type: 'number',
		suffix: '원',
		initialValue: 0,
		placeholder: '보증금을 입력해주세요',
	},
	{
		id: 'monthlyFee',
		label: '월세',
		type: 'number',
		suffix: '원',
		initialValue: 0,
		placeholder: '월세를 입력해주세요',
	},
	{
		id: 'conversionRate',
		label: '전월세 전환율',
		type: 'number',
		suffix: '%',
		initialValue: 0.0,
		placeholder: '전월세 전환율을 입력해주세요',
	},
];

export { JEONSE_TO_MONTHLY_FEE, MONTHLY_FEE_TO_JEONSE };
