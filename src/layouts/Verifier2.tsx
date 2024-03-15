import { Fields } from '@/components/Fields'
import { TitledBox } from '@/components/TitledBox'

export const Verifier2 = ({ id }: { id?: string }) => {
	return (
		<TitledBox
			id={id}
			title="Authorised representative of the verifier"
		>
			<Fields
				fields={[
					{
						label: 'Name',
						name: 'name',
					},
					{
						label: 'Email address',
						name: 'email',
					},
					{
						label: 'Telephone number',
						name: 'telephone',
					},
					{
						label: 'Fax',
						name: 'fax',
					},
				]}
			/>
		</TitledBox>
	)
}
