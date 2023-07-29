import SideMenu from '@/components/common/SideMenu';
import React from 'react';

const rootPath = '/realty';

const menuList = [
	{
		id: 'CONVERSION_RATE',
		title: '전월세 전환율 계산',
		path: `${rootPath}/conversion-rate`,
	},
];

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full flex flex-col gap-y-5">
			<SideMenu menuList={menuList} />
			<div className="w-full">{children}</div>
		</div>
	);
};

export default Layout;
