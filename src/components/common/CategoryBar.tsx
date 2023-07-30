'use client';

import { useRouter } from 'next/navigation';

import React, { useState, useMemo } from 'react';
import Button from '@/components/common/Button';

type Menu = {
	id: string;
	title: string;
	path: string;
};

type Props = {
	menuList: Menu[];
};

const CategoryBar = ({ menuList }: Props) => {
	const router = useRouter();

	const [activeId, setActiveId] = useState(menuList[0].id);

	const isActive = (id: string) => activeId === id;
	const handleClick = ({ id, path }: Pick<Menu, 'id' | 'path'>) => {
		setActiveId(id);
		router.push(path);
	};

	return (
		<ul className="flex items-center gap-x-3">
			{menuList.map(({ id, title, path }) => (
				<li key={id}>
					<Button
						onClick={() => handleClick({ id, path })}
						size="sm"
						variant="outlined"
						text={isActive(id) ? 'text-indigo-500' : ''}
						color={isActive(id) ? 'primary' : 'secondary'}
						className={isActive(id) ? 'border-2 font-semibold' : ''}
					>
						{title}
					</Button>
				</li>
			))}
		</ul>
	);
};

export default React.memo(CategoryBar);
