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
			dataSource={[]}
		/>
	)
}
