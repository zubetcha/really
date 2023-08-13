'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Button as AntdButton } from 'antd';

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
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;
	const handleClickMenu = (path: Menu['path']) => router.push(path);

	return (
		<ul className="flex items-center gap-x-3">
			{menuList.map(({ id, title, path }) => (
				<li key={id}>
					<AntdButton
						className="bg-indigo-500"
						type={isActive(path) ? 'primary' : 'default'}
						shape="round"
						size="large"
						onClick={() => handleClickMenu(path)}
					>
						{title}
					</AntdButton>
				</li>
			))}
		</ul>
	);
};

export default React.memo(CategoryBar);
