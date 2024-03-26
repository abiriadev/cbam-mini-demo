import { Fields } from '@/components/Fields'
import { TitledBox } from '@/components/TitledBox'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export const Verifier1 = ({ id }: { id?: string }) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

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
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.company_name,
					},
					{
						label: 'Street, Number',
						name: 'street',
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.street_number,
					},
					{
						label: 'City',
						name: 'city',
						value: cbam?.i?.a
							?.verifier_of_the_report?.city,
					},
					{
						label: 'Postcode/ZIP',
						name: 'zip',
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.postcode,
					},
					{
						label: 'Country',
						name: 'country',
						value: cbam?.i?.a
							?.verifier_of_the_report
							?.country,
					},
				]}
			/>
		</TitledBox>
	)
}
