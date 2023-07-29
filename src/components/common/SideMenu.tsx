'use client';

import Link from 'next/link';

import { useState } from 'react';
import Button from '@/components/common/Button';

type Menu = {
	id: string;
	title: string;
	path: string;
};

type Props = {
	menuList: Menu[];
};

const SideMenu = ({ menuList }: Props) => {
	const [activeId, setActiveId] = useState(menuList[0].id);

	console.log(activeId);

	return (
		<div className="py-3">
			<ul>
				{menuList.map(({ id, title, path }) => (
					<li key={id}>
						{/* <Link href={path}> */}
						<Button onClick={() => {}} variant="outlined">
							{title}
						</Button>
						{/* </Link> */}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideMenu;
