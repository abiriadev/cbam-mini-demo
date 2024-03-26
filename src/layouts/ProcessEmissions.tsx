import { useSelector } from 'react-redux'
import { TitledTable } from '@/components/TitledTable'
import { RootState } from '@/store'

export const ProcessEmissions = ({
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
			titleText="Process Emissions"
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
					title: 'EmbEm (direct)',
					dataIndex: ['ee', 'direct'],
				},
				{
					title: 'EmbEm (indirect)',
					dataIndex: ['ee', 'indirect'],
				},
				{
					title: 'EmbEm (total)',
				},
			]}
			dataSource={nemesia.list}
		/>
	)
}
