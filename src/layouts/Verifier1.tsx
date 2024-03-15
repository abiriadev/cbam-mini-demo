import { Fields } from '@/components/Fields'
import { TitledBox } from '@/components/TitledBox'

export const Verifier1 = ({ id }: { id?: string }) => {
	return (
		<TitledBox
			id={id}
			title="Name and address of the verifier of this report"
		>
			<Fields
				fields={[
					{
						label: 'Company Name',
						name: 'name',
					},
					{
						label: 'Street, Number',
						name: 'street',
					},
					{
						label: 'City',
						name: 'city',
					},
					{
						label: 'Postcode/ZIP',
						name: 'zip',
					},
					{
						label: 'Country',
						name: 'country',
					},
				]}
			/>
		</TitledBox>
	)
}
