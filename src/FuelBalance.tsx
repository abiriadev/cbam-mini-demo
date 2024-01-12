import { Table, Typography } from 'antd'

export const FuelBalance = ({ id }: { id?: string }) => {
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
					Fuel balance
				</Typography.Title>
			)}
			columns={[
				{
					title: 'Unit',
				},
				{
					title: 'Total fuel input',
				},
				{
					title: 'Direct fuel for CBAM goods',
				},
				{
					title: 'Fuel for electricity',
				},
				{
					title: 'Direct fuel for non CBAM goods',
				},
				{
					title: 'Rest',
				},
			]}
			dataSource={[]}
		/>
	)
}
