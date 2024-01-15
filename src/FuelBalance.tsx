import { Table, Typography } from 'antd'

export const FuelBalance = ({ id }: { id?: string }) => {
	return (
		<Table
			id={id}
			pagination={false}
			title={() => (
				<Typography.Title level={4}>
					Fuel balance
				</Typography.Title>
			)}
			columns={[
				{
					title: 'Fuel Balance',
					dataIndex: 'fb',
				},
				{
					title: 'Unit',
					render: () => 'TJ',
				},
				{
					title: 'Total fuel input',
					dataIndex: 'tfi',
					render: () => 0,
				},
				{
					title: 'Direct fuel for CBAM goods',
					render: () => 0,
				},
				{
					title: 'Fuel for electricity',
					render: () => 0,
				},
				{
					title: 'Direct fuel for non CBAM goods',
					render: () => 0,
				},
				{
					title: 'Rest',
					dataIndex: 'rest',
					render: () => 0,
				},
			]}
			dataSource={[
				{ fb: 'from sheet B_EmInst' },
				{ fb: 'manual entries' },
				{ fb: 'Results' },
			]}
		/>
	)
}
