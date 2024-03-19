import { Table, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { selectNemesia } from '@/calc'
import { TitledTable } from '@/components/TitledTable'

export const PrecursorEmissions = ({
	id,
}: {
	id: string
}) => {
	const nemesia = useSelector(selectNemesia).s1_2_2_2

	return (
		<TitledTable
			titleText="Precursor Emissions"
			id={id}
			rowKey={({ id }) => id}
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
				},
				{
					title: 'EmbEm (total)',
				},
			]}
			dataSource={nemesia.list}
		/>
	)
}
