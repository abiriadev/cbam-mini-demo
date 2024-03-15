import { TitledBox } from '@/components/TitledBox'
import { Fields } from '@/components/Fields'

export const Verifier3 = ({ id }: { id?: string }) => {
	return (
		<TitledBox
			id={id}
			title="Information about the verifier's accreditation"
		>
			<Fields
				fields={[
					{
						label: 'Accreditation Member State',
						name: 'state',
					},
					{
						label: 'Name of the national accreditation body',
						name: 'accreditation',
					},
					{
						label: 'Registration number issued by the Accreditation body',
						name: 'reg',
					},
				]}
			/>
		</TitledBox>
	)
}
