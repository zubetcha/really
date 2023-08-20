import type { InputProps } from '@/types/common';

const JEONSE_TO_MONTHLY_FEE: InputProps[] = [
	{
		id: 'jeonse',
		label: '전세금',
		suffix: '원',
		unit: 'currency',
		initialValue: '0',
		placeholder: '총 전세금을 입력해주세요',
	},
	{
		id: 'deposit',
		label: '보증금',
		suffix: '원',
		unit: 'currency',
		initialValue: '0',
		placeholder: '보증금을 입력해주세요',
	},
	{
		id: 'conversionRate',
		label: '전월세 전환율',
		suffix: '%',
		unit: 'percent',
		initialValue: '0.0',
		placeholder: '전월세 전환율을 입력해주세요',
	},
];

const MONTHLY_FEE_TO_JEONSE: InputProps[] = [
	{
		id: 'deposit',
		label: '보증금',
		suffix: '원',
		unit: 'currency',
		initialValue: '0',
		placeholder: '보증금을 입력해주세요',
	},
	{
		id: 'monthlyFee',
		label: '월세',
		suffix: '원',
		unit: 'currency',
		initialValue: '0',
		placeholder: '월세를 입력해주세요',
	},
	{
		id: 'conversionRate',
		label: '전월세 전환율',
		suffix: '%',
		unit: 'percent',
		initialValue: '0.0',
		placeholder: '전월세 전환율을 입력해주세요',
	},
];

export { JEONSE_TO_MONTHLY_FEE, MONTHLY_FEE_TO_JEONSE };
