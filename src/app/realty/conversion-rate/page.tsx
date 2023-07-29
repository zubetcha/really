const ConversionRatePage = () => {
	return (
		<div className="flex flex-col gap-y-6">
			<div className="bg-white shadow-lg rounded-xl p-5">
				<h3 className="text-xl font-bold">💸 월세 {'>'} 전세</h3>
			</div>
			<div className="bg-white shadow-lg rounded-xl p-5">
				<h3 className="text-xl font-bold">💸 전세 {'>'} 월세</h3>
			</div>
		</div>
	);
};

export default ConversionRatePage;
