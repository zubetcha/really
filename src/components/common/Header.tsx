'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Logo from '@/components/common/Logo';
import { HEADER_MENU_LIST } from '@/lib/constants/menu';

const Header = () => {
	const router = useRouter();
	const handleLogoClick = () => router.push(HEADER_MENU_LIST[0].path);

	return (
		<div className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-300 flex justify-center items-center z-50">
			<div className="w-256 h-full flex items-center gap-x-12">
				<div className="cursor-pointer" onClick={handleLogoClick}>
					<Logo />
				</div>
				<div className="flex items-center h-full">
					{HEADER_MENU_LIST.map(({ id, name, path }) => (
						<div key={id} className="px-4 h-full">
							<Link
								href={path}
								className="font-medium px-4 h-full flex items-center border-b-4 border-indigo-500"
							>
								{name}
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export { Header };
