import { Fields } from '@/components/Fields'
import { TitledBox } from '@/components/TitledBox'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export const AboutTheInstallation = ({
	id,
}: {
	id?: string
}) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

	return (
		<TitledBox id={id} title="About the installation">
			<Fields
				fields={[
					{
						label: 'Name of the installation (optional)',
						name: 'name',
						value: cbam?.i?.a
							?.about_the_installation
							?.name_of_the_installation,
					},
					{
						label: 'Name of the installation (English name)',
						name: 'name_en',
						required: true,
						value: cbam?.i?.a
							?.about_the_installation
							?.name_of_the_installation_english,
					},
					{
						label: 'Street, Number',
						name: 'street',
						value: cbam?.i?.a
							?.about_the_installation
							?.street_number,
					},
					{
						label: 'Economic activity',
						name: 'economic',
						value: cbam?.i?.a
							?.about_the_installation
							?.economic_activity,
					},
					{
						label: 'Post code',
						name: 'zip',
						value: cbam?.i?.a?.about_the_installation?.post_code?.toString(),
					},
					{
						label: 'P.O. Box',
						name: 'po',
						value: cbam?.i?.a
							?.about_the_installation
							?.po_box,
					},
					{
						label: 'City',
						name: 'city',
						value: cbam?.i?.a
							?.about_the_installation?.city,
					},
					{
						label: 'Country',
						name: 'country',
						required: true,
						value: cbam?.i?.a
							?.about_the_installation
							?.country,
					},
					{
						label: 'UNLOCODE',
						name: 'unlocode',
						required: true,
						value: cbam?.i?.a
							?.about_the_installation
							?.unlocode,
					},
					{
						label: 'Coordinates of the main emission source (latitude)',
						name: 'latitude',
						value: cbam?.i?.a?.about_the_installation?.coordinates_latitude?.toString(),
					},
					{
						label: 'Coordinates of the main emission source (longitude)',
						name: 'longitude',
						value: cbam?.i?.a?.about_the_installation?.coordinates_longitude?.toString(),
					},
					{
						label: 'Name of authorized representative',
						name: 'representative',
						value: cbam?.i?.a
							?.about_the_installation
							?.name_of_the_authorized_representative,
					},
					{
						label: 'Email',
						name: 'email',
						value: cbam?.i?.a
							?.about_the_installation?.email,
					},
					{
						label: 'Telephone',
						name: 'telephone',
						value: cbam?.i?.a
							?.about_the_installation
							?.telephone,
					},
				]}
			></Fields>
		</TitledBox>
	)
}
