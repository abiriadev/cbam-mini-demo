import { Table, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { fix3, sum } from '@/utils'

interface GhgEmissionResult {
	id: string
	name: string
	unit: string
	direm: number
	heat: number
	wg: number
	totalDirem: number
	indirect: number
}

export const GhgEmissions = ({
	id: elemId,
}: {
	id?: string
}) => {
	const { processes } = useSelector(
		(st: RootState) => st.cbam,
	)

	const em: Array<GhgEmissionResult> = processes.map(
		({
			id,
			name,
			direm,
			attrWg,
			attrHeat,
			attr: { direct, indirect },
		}) => {
			return {
				id,
				name,
				unit: 'tCO2e',
				direm,
				heat: attrHeat,
				wg: attrWg,
				totalDirem: direct,
				indirect,
			}
		},
	)

	return (
		<Table
			id={elemId}
			dataSource={em}
			rowKey={({ id }) => id}
			pagination={false}
			title={() => (
				<Typography.Title level={4}>
					GHG emissions balance
				</Typography.Title>
			)}
			columns={[
				{
					title: 'Production Process',
					dataIndex: 'name',
				},
				{
					title: 'Unit',
					dataIndex: 'unit',
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
					dataIndex: 'totalDirem',
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
