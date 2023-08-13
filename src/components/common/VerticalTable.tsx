import React from 'react';

type Column<T> = {
	id: string;
	dataIndex: string;
	title: string;
	align?: 'left' | 'center' | 'right';
	render?: (value: T) => React.ReactNode;
};

type Props<T> = {
	columns: Column<T>[];
	dataSource?: T;
};

const VerticalTable = <T extends Record<string, any>>({
	columns,
	dataSource,
}: Props<T>) => {
	return (
		<div>
			<table>
				<tbody>
					{columns.map(({ id, dataIndex, title, align, render }) => (
						<tr key={id}>
							<th className="p-2">{title}</th>
							<td className="p-2">
								{render?.(dataSource?.[dataIndex]) || dataSource?.[dataIndex]}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default VerticalTable;
