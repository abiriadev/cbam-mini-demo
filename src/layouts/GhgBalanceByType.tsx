import { Table, Typography } from 'antd'

export const GhgBalanceByType = ({
	id,
}: {
	id?: string
}) => {
	return (
		<Table
			id={id}
			pagination={false}
			title={() => (
				<Typography.Title level={4}>
					GHG balance by type of GHG
				</Typography.Title>
			)}
			columns={[
				{
					title: 'Installation level data',
					dataIndex: 'fb',
				},
				{
					title: 'Unit',
					render: () => 'tCO2e',
				},
				{
					title: 'Total CO2 emissions',
					dataIndex: 'tfi',
					render: () => 0,
				},
				{
					title: 'Biomass emissions',
					render: () => 0,
				},
				{
					title: 'Total N2O emissions',
					render: () => 0,
				},
				{
					title: 'Total PFC emissions',
					render: () => 0,
				},
				{
					title: 'Total direct emissions',
					render: () => 0,
				},
				{
					title: 'Total indirect emissions',
					render: () => 0,
				},
				{
					title: 'Total emissions',
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
