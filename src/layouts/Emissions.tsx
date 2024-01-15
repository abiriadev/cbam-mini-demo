import { Table, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import {
	Emission,
	PrecursorUsage,
	totalEmission,
	findPrecursorById,
	precursorMapToUsageArray,
} from '@/store/cbam'
import { fixEmission, nanGuard, sum } from '@/utils'

interface EmissionResult {
	id: string
	name: string
	se: Emission
	see: Emission
	ee: Emission
	children?: Array<EmissionResult>
}

export const Emissions = ({ id }: { id?: string }) => {
	const { processes, precursors: ppa } = useSelector(
		(st: RootState) => st.cbam,
	)

	const em: Array<EmissionResult> = processes.map(
		({
			id,
			name,
			activity_level,
			precursors,
			attr,
		}) => {
			const se: Emission = {
				direct: nanGuard(
					attr.direct,
					activity_level,
				),
				indirect: 0,
			}

			const pps = Object.entries(precursors)
				.map(([k, v]) => [
					findPrecursorById(ppa, k)?.see,
					v,
				])
				.filter(
					([see]) => see !== undefined,
				) as Array<[Emission, PrecursorUsage]>

			const ee: Emission = {
				direct:
					attr.direct +
					sum(
						pps.map(
							([{ direct }, { amount }]) =>
								direct * amount,
						),
					),
				indirect: sum(
					pps.map(
						([{ indirect }, { amount }]) =>
							indirect * amount,
					),
				),
			}

			const see: Emission = {
				direct: nanGuard(ee.direct, activity_level),
				indirect: nanGuard(
					ee.indirect,
					activity_level,
				),
			}

			return {
				id,
				name,
				se: fixEmission(se),
				see: fixEmission(see),
				ee: fixEmission(ee),
				children: precursorMapToUsageArray(
					ppa,
					precursors,
				).map(
					([
						{
							id,
							name,
							see: { direct, indirect },
						},
						{ amount },
					]): EmissionResult => {
						const ee = {
							direct: direct * amount,
							indirect: indirect * amount,
						}

						const se = {
							direct:
								ee.direct / activity_level,
							indirect:
								ee.indirect /
								activity_level,
						}

						return {
							id,
							name,
							se,
							see: se,
							ee,
						}
					},
				),
			}
		},
	)

	return (
		<div id={id}>
			<Table
				title={() => (
					<Typography.Title level={4}>
						Emissions
					</Typography.Title>
				)}
				rowKey={({ id }) => id}
				pagination={false}
				columns={[
					{
						title: 'Name',
						dataIndex: 'name',
					},
					{
						title: 'SE (direct)',
						dataIndex: ['se', 'direct'],
					},
					{
						title: 'SE (indirect)',
						dataIndex: ['se', 'indirect'],
					},
					{
						title: 'SE (total)',
						render: (_, { se }) =>
							totalEmission(se),
					},
					{
						title: 'SEE (direct)',
						dataIndex: ['see', 'direct'],
					},
					{
						title: 'SEE (indirect)',
						dataIndex: ['see', 'indirect'],
					},
					{
						title: 'SEE (total)',
						render: (_, { see }) =>
							totalEmission(see),
					},
					{
						title: 'EmbEm (direct)',
						dataIndex: ['ee', 'direct'],
					},
					{
						title: 'EmbEm (indirect)',
						dataIndex: ['ee', 'indirect'],
					},
					{
						title: 'EmbEm (total)',
						render: (_, { ee }) =>
							totalEmission(ee),
					},
				]}
				dataSource={em}
			/>
		</div>
	)
}
