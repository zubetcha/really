import React from 'react';

import CategoryBar from '@/components/common/CategoryBar';

const rootPath = '/realty';

const menuList = [
	{
		id: 'CONVERSION_RATE',
		title: '전월세 전환율 계산',
		path: `${rootPath}/conversion-rate`,
	},
	{
		id: 'INTERCONVERSION_RATE',
		title: '상호전환이율 계산',
		path: `${rootPath}/interconversion-rate`,
	},
];

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full flex flex-col">
			{/* <div className="border-b"> */}
			<div className="m-auto w-256 py-4">
				<CategoryBar menuList={menuList} />
			</div>
			{/* </div> */}
			<div className="m-auto w-256 pt-4">{children}</div>
		</div>
	);
};

export default Layout;
