import Link from 'next/link';
import React from 'react';

type Menu = {
	id: string;
	title: string;
	path: string;
};

type Props = {
	menuList: Menu[];
};

const SideMenu = ({ menuList }: Props) => {
	return (
		<div>
			<ul>
				{menuList.map(({ id, title, path }) => (
					<li key={id}>
						<Link href={path}>{title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideMenu;
