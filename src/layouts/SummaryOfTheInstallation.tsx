import { TitledTable } from '@/components/TitledTable'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export const SummaryOfTheInstallation = ({
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
			titleText="Summary of the installation"
			columns={[
				{ dataIndex: 'k' },
				{ dataIndex: 'v' },
			]}
			dataSource={[
				{
					k: 'Name of the installation (English name)',
					v: cbam?.i?.a?.about_the_installation
						?.name_of_the_installation_english,
				},
				{
					k: 'Street, Number',
					v: cbam?.i?.a?.about_the_installation
						?.street_number,
				},
				{
					k: 'Economic activity',
					v: cbam?.i?.a?.about_the_installation
						?.economic_activity,
				},
				{
					k: 'Country',
					v: cbam?.i?.a?.about_the_installation
						?.country,
				},
				{
					k: 'UNLOCODE',
					v: cbam?.i?.a?.about_the_installation
						?.unlocode,
				},
				{
					k: 'Coordinates of the main emission source (latitude)',
					v: cbam?.i?.a?.about_the_installation
						?.coordinates_latitude,
				},
				{
					k: 'Coordinates of the main emission source (longitude)',
					v: cbam?.i?.a?.about_the_installation
						?.coordinates_longitude,
				},
			]}
		/>
	)
}
