import { Input } from 'antd';
import { TiArrowRightThick } from 'react-icons/ti';

import ConversionRateBox from '@/components/realty/conversion-rate/ConversionRateBox';
import VerticalTable from '@/components/common/VerticalTable';

const columns = [
	{
		id: 'deposit',
		dataIndex: 'deposit',
		title: '보증금',
		render: () => <Input />,
	},
	{
		id: 'monthlyRent',
		dataIndex: 'monthlyRent',
		title: '월세',
		render: () => <Input />,
	},
	{
		id: 'conversionRate',
		dataIndex: 'conversionRate',
		title: '전환율',
		render: () => <Input />,
	},
];

const ConversionRatePage = () => {
	return (
		<div className="flex flex-col gap-y-4">
			<ConversionRateBox
				title={
					<>
						월세 <TiArrowRightThick /> 전세
					</>
				}
			>
				<VerticalTable columns={columns} />
				<div>예상 전세 보증금은 n원 입니다.</div>
			</ConversionRateBox>
			<div className="bg-white shadow-lg rounded-xl p-5">
				<h3 className="text-xl font-bold flex items-center gap-x-2">
					전세 <TiArrowRightThick /> 월세
				</h3>
				<div>
					<div>
						<label>총 전세금</label>
						<Input />
					</div>
					<div>
						<label>보증금</label>
						<Input />
					</div>
					<div>
						<label>월세로 전환할 보증금</label>
						<input placeholder="총 전세 보증금 - 보증금" />
					</div>
					<div>
						<label>전환율</label>
						<input placeholder="" />
					</div>
					<div>
						보증금은 n원이며,
						<br />
						예상 월세는 n원 입니다.
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConversionRatePage;
