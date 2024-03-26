import { Input } from 'antd'
import { useSelector } from 'react-redux'
import { TitledTable } from '@/components/TitledTable'
import { DeleteButton } from '@/components/DeleteButton'
import { DropdownButton } from '@/components/DropdownButton'
import { RootState } from '@/store'

export const RelevantProductionProcesses = ({
	id,
}: {
	id?: string
}) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

	const data =
		cbam?.i?.a?.aggregated_goods_categories_and_relevant_production_processes?.relevant_production_processes?.map(
			a => {
				return {
					name: a.name,
					agc: a.production_process,
					included: [
						a.included_goods_categories_1,
						a.included_goods_categories_2,
						a.included_goods_categories_3,
						a.included_goods_categories_4,
						a.included_goods_categories_5,
						a.included_goods_categories_6,
					],
				}
			},
		)

	return (
		<div>
			<TitledTable
				id={id}
				titleText="Relevand production processes"
				rowKey={({ id }) => id}
				button={
					<DropdownButton
						text="Add new process"
						items={[]}
					/>
				}
				columns={[
					{
						title: 'Name',
						dataIndex: 'name',
						render: (v, { id }) => (
							<Input value={v} />
						),
					},
					{
						title: 'Production process',
						dataIndex: 'agc',
					},
					...Array(6)
						.fill(null)
						.map((_, i) => ({
							title: `Included goods ${
								i + 1
							}`,
							dataIndex: ['included', i],
							render: (value: any) => (
								<Input value={value} />
							),
						})),
					{
						render: (_, { id }) => (
							<DeleteButton />
						),
					},
				]}
				dataSource={data ?? []}
			/>
		</div>
	)
}
