import { Fields } from '@/components/Fields'
import { TitledBox } from '@/components/TitledBox'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export const Verifier2 = ({ id }: { id?: string }) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

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
						value: cbam?.i?.a
							?.verifier_of_the_report?.name,
					},
					{
						label: 'Email address',
						name: 'email',
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.email_address,
					},
					{
						label: 'Telephone number',
						name: 'telephone',
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.telephone_number,
					},
					{
						label: 'Fax',
						name: 'fax',
						value: cbam?.i?.a
							?.verifier_of_the_report?.fax,
					},
				]}
			/>
		</TitledBox>
	)
}
