import { Table, Typography } from 'antd'

export const FuelIntoChp = ({ id }: { id?: string }) => {
	return (
		<Table
			id={id}
			pagination={false}
			title={() => (
				<Typography.Title
					level={4}
					style={{
						marginTop: 0,
						marginBottom: 0,
					}}
				>
					Total amount of fuel input into CHP
					units
				</Typography.Title>
			)}
			columns={[
				{
					title: 'Parameter',
					dataIndex: 'a',
				},
				{
					title: 'Fuel input into CHP',
					dataIndex: 'b',
				},
				{
					title: 'Heat output from CHP',
					dataIndex: 'c',
				},
				{
					title: 'Electricity output from CHP',
					dataIndex: 'd',
				},
				{
					title: 'Electricity output from CHP',
					dataIndex: 'e',
				},
			]}
			dataSource={[
				{
					a: 'Unit',
					b: 'TJ',
					c: 'TJ',
					d: 'MWh',
					e: 'TJ',
				},
				{
					a: 0,
					b: 0,
					c: 0,
					d: 0,
					e: 0,
				},
			]}
		/>
	)
}
