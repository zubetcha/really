'use client';

import React from 'react';

type Props = {
	title: React.ReactNode;
	children: React.ReactNode;
};

const PageLayout = ({ title, children }: Props) => {
	return (
		<div className="w-full flex flex-col">
			<div className="m-auto w-256">
				<div className="py-8">
					<h1 className="text-gray-900 font-semibold text-3xl">{title}</h1>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default PageLayout;
