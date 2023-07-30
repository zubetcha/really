type Props = {
	children: React.ReactNode;
};

const Box = ({ children }: Props) => {
	return <div className="bg-white shadow-lg rounded-xl p-5">{children}</div>;
};

export default Box;
