export const HEADER_MENU_LIST = [
	{
		id: 1,
		name: '부동산 계산기',
		icon: '⚖️',
		path: '/calc/conversion-rate',
	},
];

export const PAGE_MENU_LIST = {
	calc: [
		{
			id: 'CONVERSION_RATE',
			title: '전월세 전환율 계산',
			icon: '🔍',
			path: `/calc/conversion-rate`,
		},
		{
			id: 'INTERCONVERSION_RATE',
			title: '보증금 증감액 계산',
			icon: '⚖️',
			path: `/calc/interconversion-rate`,
		},
	],
};
