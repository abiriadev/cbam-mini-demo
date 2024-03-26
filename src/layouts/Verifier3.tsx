import { TitledBox } from '@/components/TitledBox'
import { Fields } from '@/components/Fields'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export const Verifier3 = ({ id }: { id?: string }) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

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
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.accreditation_member_state,
					},
					{
						label: 'Name of the national accreditation body',
						name: 'accreditation',
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.name_of_the_national_accreditation_body,
					},
					{
						label: 'Registration number issued by the Accreditation body',
						name: 'reg',
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.registration_number_issued_by_the_accreditation_body,
					},
				]}
			/>
		</TitledBox>
	)
}
