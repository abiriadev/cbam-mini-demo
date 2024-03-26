import { useSelector } from 'react-redux'
import { TitledTable } from '@/components/TitledTable'
import { RootState } from '@/store'

export const PrecursorEmissions = ({
	id,
}: {
	id?: string
}) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

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
