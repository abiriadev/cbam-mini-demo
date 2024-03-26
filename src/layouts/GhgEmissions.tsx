import { Table } from 'antd'
import { useSelector } from 'react-redux'
import { fix3, sum } from '@/utils'
import { TitledTable } from '@/components/TitledTable'
import { RootState } from '@/store'

export const GhgEmissions = ({
	id: id,
}: {
	id?: string
}) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

	const data =
		cbam?.o?.s_processes
			?.greenhouse_gas_emissions_balance_and_specific_embedded_emissions
			?.ghg_emissions_balance_of_the_installation_and_all_production_processes

	return (
		<TitledTable
			id={id}
			dataSource={data ?? []}
			rowKey={({ id }) => id}
			titleText="GHG emissions balance"
			columns={[
				{
					title: 'Production Process',
					dataIndex: 'production_process',
				},
				{
					title: 'AGC',
					dataIndex: 'agc',
				},
				{
					title: 'Unit',
					render: () => 'tCO2e',
				},
				{
					title: 'DirEm*',
					dataIndex: 'direm',
				},
				{
					title: 'Heat emissions',
					dataIndex: 'heat',
				},
				{
					title: 'Waste Gas emissions',
					dataIndex: 'wg',
				},
				{
					title: 'Total direct emissions',
					dataIndex: 'direct',
				},
				{
					title: 'Indirect',
					dataIndex: 'indirect',
				},
			]}
			summary={v => (
				<Table.Summary.Row>
					<Table.Summary.Cell index={0}>
						Total
					</Table.Summary.Cell>
					<Table.Summary.Cell index={2}>
						tCO2e
					</Table.Summary.Cell>
					<Table.Summary.Cell index={3}>
						{fix3(
							sum(
								v.map(({ direm }) => direm),
							),
						)}
					</Table.Summary.Cell>
					<Table.Summary.Cell index={4}>
						{fix3(
							sum(v.map(({ heat }) => heat)),
						)}
					</Table.Summary.Cell>
					<Table.Summary.Cell index={5}>
						{fix3(sum(v.map(({ wg }) => wg)))}
					</Table.Summary.Cell>
					<Table.Summary.Cell index={6}>
						{fix3(
							sum(
								v.map(
									({ direct }) => direct,
								),
							),
						)}
					</Table.Summary.Cell>
					<Table.Summary.Cell index={7}>
						{fix3(
							sum(
								v.map(
									({ indirect }) =>
										indirect,
								),
							),
						)}
					</Table.Summary.Cell>
				</Table.Summary.Row>
			)}
		/>
	)
}
