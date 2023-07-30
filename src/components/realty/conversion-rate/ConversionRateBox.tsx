import Box from '@/components/common/Box';

type Props = {
	title: React.ReactNode;
	children: React.ReactNode;
};

const ConversionRateBox = ({ title, children }: Props) => {
	return (
		<Box>
			<h3 className="text-xl font-bold flex items-center gap-x-2">{title}</h3>
			<div>{children}</div>
		</Box>
	);
};

export default ConversionRateBox;
