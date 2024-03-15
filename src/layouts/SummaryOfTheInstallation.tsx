import { selectNemesia } from '@/calc'
import { TitledTable } from '@/components/TitledTable'
import { useSelector } from 'react-redux'

export const SummaryOfTheInstallation = ({
	id,
}: {
	id?: string
}) => {
	const nemesia = useSelector(selectNemesia).a_2

	return (
		<TitledTable
			id={id}
			titleText="Summary of the installation"
			columns={[
				{ dataIndex: 'k' },
				{ dataIndex: 'v' },
			]}
			dataSource={[
				{
					k: 'Name of the installation (English name)',
					v: nemesia.name,
				},
				{
					k: 'Street, Number',
					v: nemesia.name_en,
				},
				{
					k: 'Economic activity',
					v: nemesia.economic,
				},
				{
					k: 'Country',
					v: nemesia.country,
				},
				{
					k: 'UNLOCODE',
					v: nemesia.unlocode,
				},
				{
					k: 'Coordinates of the main emission source (latitude)',
					v: nemesia.latitude,
				},
				{
					k: 'Coordinates of the main emission source (longitude)',
					v: nemesia.longitude,
				},
			]}
		/>
	)
}
