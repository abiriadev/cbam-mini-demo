import { Table, Typography } from 'antd'

export const AGC = ({ id }: { id: string }) => {
	return (
		<Table
			id={id}
			title={() => (
				<Typography.Title
					level={4}
					style={{
						marginTop: 0,
						marginBottom: 0,
					}}
				>
					List of aggregated goods categories
				</Typography.Title>
			)}
			columns={[
				{
					title: 'Aggregated goods category',
				},
				{
					title: 'Route',
				},
				{
					title: 'Route 1',
				},
				{
					title: 'Route 2',
				},
				{
					title: 'Route 3',
				},
				{
					title: 'Route 4',
				},
				{
					title: 'Route 5',
				},
				{
					title: 'Route 6',
				},
			]}
			dataSource={[]}
		/>
	)
}
