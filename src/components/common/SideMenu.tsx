import React from 'react';
import { useRouter } from 'next/navigation';

import Box from '@/components/common/Box';

type Menu = {
	id: string;
	title: string;
	icon?: React.ReactNode;
	path: string;
};

type Props = {
	menuList: Menu[];
	activeMenu?: Menu;
};

const SideMenu = ({ menuList, activeMenu }: Props) => {
	const router = useRouter();

	const handleMenuClick = (path: string) => router.push(path);
	const isActive = (id: string) => id === activeMenu?.id;

	return (
		<Box>
			<ul className="flex flex-col gap-y-2 w-64">
				{menuList.map(({ id, title, path, icon }) => (
					<li key={id}>
						<div
							className={`flex gap-x-2 items-center rounded-lg py-4 px-4 cursor-pointer  transition duration-200 hover:bg-indigo-50 ${
								isActive(id) ? 'bg-indigo-50' : ''
							}`}
							onClick={() => handleMenuClick(path)}
						>
							{icon}
							<p
								className={`${
									isActive(id) ? 'text-gray-800' : 'text-gray-500'
								} text-lg font-medium`}
							>
								{title}
							</p>
						</div>
					</li>
				))}
			</ul>
		</Box>
	);
};

export default SideMenu;
