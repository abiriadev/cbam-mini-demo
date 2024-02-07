import { Table } from 'antd'
import { useSelector } from 'react-redux'
import { fix3, sum } from '@/utils'
import { TitledTable } from '@/components/TitledTable'
import { selectNemesia } from '@/calc'

export const GhgEmissions = ({
	id: id,
}: {
	id?: string
}) => {
	const nemesia = useSelector(selectNemesia).s1_2_1

	return (
		<TitledTable
			id={id}
			dataSource={nemesia.list}
			rowKey={({ id }) => id}
			titleText="GHG emissions balance"
			columns={[
				{
					title: 'Production Process',
					dataIndex: 'process',
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
					<Table.Summary.Cell index={1}>
						tCO2e
					</Table.Summary.Cell>
					<Table.Summary.Cell index={2}>
						{fix3(
							sum(
								v.map(({ direm }) => direm),
							),
						)}
					</Table.Summary.Cell>
					<Table.Summary.Cell index={3}>
						{fix3(
							sum(v.map(({ heat }) => heat)),
						)}
					</Table.Summary.Cell>
					<Table.Summary.Cell index={4}>
						{fix3(sum(v.map(({ wg }) => wg)))}
					</Table.Summary.Cell>
					<Table.Summary.Cell index={5}>
						{fix3(
							sum(
								v.map(
									({ totalDirem }) =>
										totalDirem,
								),
							),
						)}
					</Table.Summary.Cell>
					<Table.Summary.Cell index={6}>
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
