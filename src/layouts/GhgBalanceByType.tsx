import { selectNemesia } from '@/calc'
import { TitledTable } from '@/components/TitledTable'
import { useSelector } from 'react-redux'

export const GhgBalanceByType = ({
	id,
}: {
	id?: string
}) => {
	const nemesia = useSelector(selectNemesia).c_2_a

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
					dataIndex: 'co2',
				},
				{
					title: 'Biomass emissions',
					dataIndex: 'biomass',
				},
				{
					title: 'Total N2O emissions',
					dataIndex: 'n2o',
				},
				{
					title: 'Total PFC emissions',
					dataIndex: 'pfc',
				},
				{
					title: 'Total direct emissions',
					dataIndex: 'direct',
				},
				{
					title: 'Total indirect emissions',
					dataIndex: 'indirect',
				},
				{
					title: 'Total emissions',
					dataIndex: 'total',
				},
			]}
			dataSource={[
				{
					id: '1',
					fb: 'from sheet B_EmInst',
					co2: nemesia.co2,
					biomass: nemesia.biomass,
					n2o: nemesia.n2o,
					pfc: nemesia.pfc,
					direct: nemesia.direct,
				},
				{ id: '2', fb: 'manual entries' },
				{ id: '3', fb: 'Results' },
			]}
		/>
	)
}
