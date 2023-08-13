import React from 'react';

import Box from '@/components/common/Box';

type Menu = {
	id: string;
	title: string;
	icon?: React.ReactNode;
	path: string;
};

type Props = {
	menuList: Menu[];
};

const SideMenu = ({ menuList }: Props) => {
	return (
		<Box>
			<ul className="flex flex-col gap-y-2 w-64">
				{menuList.map(({ id, title, path, icon }) => (
					<li key={id}>
						<div className="flex gap-x-2 items-center rounded-lg py-3 px-2 cursor-pointer  transition duration-200 hover:bg-indigo-50 ">
							{icon}
							<p className="text-gray-800 text-lg font-medium">{title}</p>
						</div>
					</li>
				))}
			</ul>
		</Box>
	);
};

export default SideMenu;
