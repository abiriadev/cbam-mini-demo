import { Button, Dropdown, Input, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { AgcKindSet } from '@/store/cbam'
import { selectNemesia } from '@/calc'
import { TitledTable } from '@/components/TitledTable'
import { DeleteButton } from '@/components/DeleteButton'
import { DropdownButton } from '@/components/DropdownButton'

export const AGC = ({ id }: { id?: string }) => {
	const nemesia = useSelector(selectNemesia).a_4_1

	return (
		<TitledTable
			id={id}
			titleText="List of aggregated goods categories"
			button={
				<DropdownButton
					text="Add new aggregated goods category"
					items={AgcKindSet}
				/>
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
			dataSource={nemesia.list}
		/>
	)
}
