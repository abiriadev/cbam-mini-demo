import { TitledTable } from '@/components/TitledTable'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export const GhgBalanceByType = ({
	id,
}: {
	id?: string
}) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

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
					co2: cbam?.i?.c
						?.greenhouse_gas_emissions_balance
						?.ghg_balance_by_type_of_ghg
						?.total_co2_emissions,
					biomass:
						cbam?.i?.c
							?.greenhouse_gas_emissions_balance
							?.ghg_balance_by_type_of_ghg
							?.biomass_emissions,
					n2o: cbam?.i?.c
						?.greenhouse_gas_emissions_balance
						?.ghg_balance_by_type_of_ghg
						?.total_n2o_emissions,
					pfc: cbam?.i?.c
						?.greenhouse_gas_emissions_balance
						?.ghg_balance_by_type_of_ghg
						?.total_pfc_emissions,
					direct: 298.2,
					indirect: 0,
					total: 0,
				},
				{
					id: '2',
					fb: 'manual entries',
					co2: 0,
					biomass: 0,
					n2o: 0,
					pfc: 0,
					direct: 0,
				},
				{
					id: '3',
					fb: 'Results',
					co2: cbam?.i?.c
						?.greenhouse_gas_emissions_balance
						?.ghg_balance_by_type_of_ghg
						?.total_co2_emissions,
					biomass:
						cbam?.i?.c
							?.greenhouse_gas_emissions_balance
							?.ghg_balance_by_type_of_ghg
							?.biomass_emissions,
					n2o: cbam?.i?.c
						?.greenhouse_gas_emissions_balance
						?.ghg_balance_by_type_of_ghg
						?.total_n2o_emissions,
					pfc: cbam?.i?.c
						?.greenhouse_gas_emissions_balance
						?.ghg_balance_by_type_of_ghg
						?.total_pfc_emissions,
					direct: 298.2,
					indirect: 0,
					total: 0,
				},
			]}
		/>
	)
}
