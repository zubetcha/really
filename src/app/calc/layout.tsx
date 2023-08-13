import React from 'react';

import MenuBar from '@/components/common/MenuBar';
import PageLayout from '@/components/common/PageLayout';
import SideMenu from '@/components/common/SideMenu';

import { HEADER_MENU_LIST, PAGE_MENU_LIST } from '@/lib/constants/menu';

const { icon, name } = HEADER_MENU_LIST[0];

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<PageLayout title={`${icon} ${name}`}>
			<div className="border-b" />
			<div className="m-auto w-256 mt-4 relative">
				<div className="flex gap-x-4">
					<div className="grow">{children}</div>
					<div className="shrink-0">
						<SideMenu menuList={PAGE_MENU_LIST.calc} />
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Layout;
