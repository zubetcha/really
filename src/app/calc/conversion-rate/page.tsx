'use client';
import { TiArrowRightThick } from 'react-icons/ti';
import { Button } from 'antd';

import useConversionRateCalculation from '@/feat-hooks/calculation/useConversionRateCalculation';
import {
	JEONSE_TO_MONTHLY_FEE,
	MONTHLY_FEE_TO_JEONSE,
} from '@/lib/constants/conversion-rate';

import ConversionRateBox from '@/components/realty/conversion-rate/ConversionRateBox';
import Input from '@/components/common/Input';

const initialMonthlyFeeForm = Object.fromEntries(
	JEONSE_TO_MONTHLY_FEE.map(({ id, initialValue }) => [
		id,
		initialValue.toString(),
	])
);
const initialJeonseFrom = Object.fromEntries(
	MONTHLY_FEE_TO_JEONSE.map(({ id }) => [id, ''])
);

const ConversionRatePage = () => {
	const monthlyFeeCalculation = useConversionRateCalculation({
		initialForm: initialMonthlyFeeForm,
	});
	const jeonseCalculation = useConversionRateCalculation({
		initialForm: initialJeonseFrom,
	});

	return (
		<div className="flex flex-col gap-y-4">
			<ConversionRateBox
				title={
					<>
						전세 <TiArrowRightThick /> 월세
					</>
				}
			>
				{JEONSE_TO_MONTHLY_FEE.map(
					({ id, type, label, suffix, placeholder }) => (
						<Input
							key={`to-monthly-fee-${id}`}
							id={`to-monthly-fee-${id}`}
							size="large"
							label={label}
							type={type}
							placeholder={placeholder}
							suffix={suffix}
							value={monthlyFeeCalculation.form[id]}
							onChange={monthlyFeeCalculation.handleFormChange}
						/>
					)
				)}
				<div className="grid grid-cols-2 gap-x-2 py-4">
					<Button
						size="large"
						type="primary"
						onClick={monthlyFeeCalculation.handleCalcClick}
					>
						계산하기
					</Button>
					<Button size="large" onClick={monthlyFeeCalculation.handleInitClick}>
						초기화하기
					</Button>
				</div>

				<div>예상 월세는 원 입니다.</div>
			</ConversionRateBox>
			<ConversionRateBox
				title={
					<>
						월세 <TiArrowRightThick /> 전세
					</>
				}
			>
				{MONTHLY_FEE_TO_JEONSE.map(
					({ id, type, label, suffix, placeholder }) => (
						<Input
							key={`to-monthly-fee-${id}`}
							id={`to-monthly-fee-${id}`}
							size="large"
							label={label}
							type={type}
							suffix={suffix}
							placeholder={placeholder}
							value={jeonseCalculation.form[id]}
							onChange={jeonseCalculation.handleFormChange}
						/>
					)
				)}
				<div className="grid grid-cols-2 gap-x-2 py-4">
					<Button
						size="large"
						type="primary"
						onClick={jeonseCalculation.handleCalcClick}
					>
						계산하기
					</Button>
					<Button size="large" onClick={jeonseCalculation.handleInitClick}>
						초기화하기
					</Button>
				</div>
				<div>예상 전세 보증금은 원 입니다.</div>
			</ConversionRateBox>
		</div>
	);
};

export default ConversionRatePage;
