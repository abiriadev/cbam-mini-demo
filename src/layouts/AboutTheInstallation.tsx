import { Fields } from '@/components/Fields'
import { TitledBox } from '@/components/TitledBox'

export const AboutTheInstallation = ({
	id,
}: {
	id?: string
}) => {
	return (
		<TitledBox id={id} title="About the installation">
			<Fields
				fields={[
					{
						label: 'Name of the installation (optional)',
						name: 'name',
					},
					{
						label: 'Name of the installation (English name)',
						name: 'name_en',
						required: true,
					},
					{
						label: 'Street, Number',
						name: 'street',
					},
					{
						label: 'Economic activity',
						name: 'economic',
					},
					{ label: 'Post code', name: 'zip' },
					{ label: 'P.O. Box', name: 'po' },
					{ label: 'City', name: 'city' },
					{
						label: 'Country',
						name: 'country',
						required: true,
					},
					{
						label: 'UNLOCODE',
						name: 'unlocode',
						required: true,
					},
					{
						label: 'Coordinates of the main emission source (latitude)',
						name: 'latitude',
					},
					{
						label: 'Coordinates of the main emission source (longitude)',
						name: 'longitude',
					},
					{
						label: 'Name of authorized representative',
						name: 'representative',
					},
					{ label: 'Email', name: 'email' },
					{
						label: 'Telephone',
						name: 'telephone',
					},
				]}
			></Fields>
		</TitledBox>
	)
}
