import { TiArrowRightThick } from 'react-icons/ti';
import ConversionRateBox from '@/components/realty/conversion-rate/ConversionRateBox';

const ConversionRatePage = () => {
	return (
		<div className="flex flex-col gap-y-6">
			<ConversionRateBox
				title={
					<>
						💸 월세 <TiArrowRightThick /> 전세
					</>
				}
			>
				<div>
					<label>보증금</label>
					<input />
				</div>
				<div>
					<label>월세</label>
					<input />
				</div>
				<div>
					<label>전환율</label>
					<input placeholder="" />
				</div>
				<div>
					<label>예상 전세 보증금</label>
					<input placeholder="" />
				</div>
			</ConversionRateBox>
		</div>
	);
};

export default ConversionRatePage;
