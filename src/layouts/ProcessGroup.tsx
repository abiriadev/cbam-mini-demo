import { Fields } from '@/components/Fields'
import { TitledBox } from '@/components/TitledBox'

export const ProcessGroup = ({ id }) => {
	return (
		<TitledBox title="a">
			<div>
				<Fields fields={[{ label: 'cement' }]} />
			</div>

			<div>
				<Fields fields={[{ label: 'cement' }]} />
			</div>
			<Fields
				fields={[
					{
						label: 'direm',
					},
					{
						label: 'amount of net measurable heat',
					},
					{
						label: 'emissions factor',
					},
					{
						label: 'amount of waste gas',
					},
					{
						label: 'emissions factor',
					},
					{
						label: 'indirect emissions from electricity consumption',
					},
					{
						label: 'electricity consumption',
					},
					{
						label: 'emissions factor of the electricity',
					},
					{
						label: 'source of the emission factor',
					},
					{
						label: 'amount exported',
					},
				]}
			/>
		</TitledBox>
	)
}
