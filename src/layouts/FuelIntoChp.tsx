import { TitledTable } from '@/components/TitledTable'

export const FuelIntoChp = ({ id }: { id?: string }) => {
	return (
		<TitledTable
			id={id}
			titleText="Total amount of fuel input into CHP units"
			columns={[
				{
					title: 'Parameter',
					dataIndex: 'a',
				},
				{
					title: 'Fuel input into CHP',
					dataIndex: 'b',
				},
				{
					title: 'Heat output from CHP',
					dataIndex: 'c',
				},
				{
					title: 'Electricity output from CHP',
					dataIndex: 'd',
				},
				{
					title: 'Electricity output from CHP',
					dataIndex: 'e',
				},
			]}
			dataSource={[
				{
					a: 'Unit',
					b: 'TJ',
					c: 'TJ',
					d: 'MWh',
					e: 'TJ',
				},
				{
					a: 0,
					b: 0,
					c: 0,
					d: 0,
					e: 0,
				},
			]}
		/>
	)
}
