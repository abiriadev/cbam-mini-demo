import { Table, Typography } from 'antd'

export const SummaryProducts = ({ id }: { id: string }) => {
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
					Summary products
				</Typography.Title>
			)}
			columns={[
				{
					title: 'Process',
				},
				{
					title: 'AGC',
				},
				{
					title: 'CN Name',
				},
				{
					title: 'Product name',
				},
				{
					title: 'SEE (direct)',
				},
				{
					title: 'SEE (indirect)',
				},
				{
					title: 'SEE (total)',
				},
				{
					title: 'Unit',
				},
				{
					title: 'Share of emissions',
				},
				{
					title: 'Source for electricity EF',
				},
				{
					title: 'Embedded electricity',
				},
			]}
			dataSource={[]}
		/>
	)
}
