import { TitledTable } from '@/components/TitledTable'

export const GhgBalanceByType = ({
	id,
}: {
	id?: string
}) => {
	return (
		<TitledTable
			id={id}
			titleText="GHG balance by type of GHG"
			rowKey={({ id }) => id}
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
				{ id: '1', fb: 'from sheet B_EmInst' },
				{ id: '2', fb: 'manual entries' },
				{ id: '3', fb: 'Results' },
			]}
		/>
	)
}
