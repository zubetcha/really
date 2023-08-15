import Box from '@/components/common/Box';

type Props = {
	title: React.ReactNode;
	children: React.ReactNode;
};

const ConversionRateBox = ({ title, children }: Props) => {
	return (
		<Box>
			<div className="flex flex-col gap-y-6">
				<h3 className="text-2xl font-bold text-gray-800 flex items-center gap-x-2">
					{title}
				</h3>
				<div className="flex flex-col gap-y-4">{children}</div>
			</div>
		</Box>
	);
};

export default ConversionRateBox;
