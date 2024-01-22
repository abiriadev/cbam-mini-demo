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
					render: () => 12.4,
				},
				{
					title: 'Biomass emissions',
					render: () => 64.43,
				},
				{
					title: 'Total N2O emissions',
					render: () => 53.4,
				},
				{
					title: 'Total PFC emissions',
					render: () => 35.3,
				},
				{
					title: 'Total direct emissions',
					render: () => 3.5,
				},
				{
					title: 'Total indirect emissions',
					render: () => 35.3,
				},
				{
					title: 'Total emissions',
					render: () => 34.3344,
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
