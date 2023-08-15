'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import PageLayout from '@/components/common/PageLayout';
import SideMenu from '@/components/common/SideMenu';
import { PAGE_MENU_LIST } from '@/lib/constants/menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	const activeMenu = useMemo(() => {
		const { calc: menuList } = PAGE_MENU_LIST;

		return menuList.find(({ path }) => path === pathname) || menuList[0];
	}, [pathname]);

	const { title, icon } = activeMenu;

	return (
		<PageLayout title={`${icon} ${title}`}>
			<div className="border-b" />
			<div className="m-auto w-256 mt-4 relative">
				<div className="flex gap-x-4">
					<div className="grow">{children}</div>
					<div className="shrink-0 sticky top-20 h-fit">
						<SideMenu menuList={PAGE_MENU_LIST.calc} activeMenu={activeMenu} />
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Layout;
