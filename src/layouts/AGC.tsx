import { Input } from 'antd'
import { useSelector } from 'react-redux'
import { TitledTable } from '@/components/TitledTable'
import { DeleteButton } from '@/components/DeleteButton'
import { DropdownButton } from '@/components/DropdownButton'
import { RootState } from '@/store'

export const AGC = ({ id }: { id?: string }) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

	const data =
		cbam?.i?.a?.aggregated_goods_categories_and_relevant_production_processes?.list_of_aggregated_goods_categories?.map(
			a => {
				return {
					kind: a.agc,
					routes: [
						a.route1,
						a.route2,
						a.route3,
						a.route4,
						a.route5,
						a.route6,
					],
				}
			},
		)

	return (
		<TitledTable
			id={id}
			titleText="List of aggregated goods categories"
			button={
				<DropdownButton text="Add new aggregated goods category" />
			}
			rowKey={({ id }) => id}
			columns={[
				{
					title: 'Aggregated goods category',
					dataIndex: 'kind',
				},
				...Array(6)
					.fill(null)
					.map((_, i) => ({
						title: `Route ${i + 1}`,
						dataIndex: ['routes', i],
						render: (r: any) => (
							<Input value={r} />
						),
					})),
				{
					render: _ => <DeleteButton />,
				},
			]}
			dataSource={data ?? []}
		/>
	)
}
