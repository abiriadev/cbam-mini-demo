import { TitledTable } from '@/components/TitledTable'

export const FuelBalance = ({ id }: { id?: string }) => {
	return (
		<TitledTable
			id={id}
			titleText="Fuel balance"
			rowKey={({ id }) => id}
			columns={[
				{
					title: 'Fuel Balance',
					dataIndex: 'fb',
				},
				{
					title: 'Unit',
					render: () => 'TJ',
				},
				{
					title: 'Total fuel input',
					dataIndex: 'tfi',
					render: () => 0,
				},
				{
					title: 'Direct fuel for CBAM goods',
					render: () => 0,
				},
				{
					title: 'Fuel for electricity',
					render: () => 0,
				},
				{
					title: 'Direct fuel for non CBAM goods',
					render: () => 0,
				},
				{
					title: 'Rest',
					dataIndex: 'rest',
					render: () => 0,
				},
			]}
			dataSource={[
				{ id: '1', fb: 'from sheet B_EmInst' },
				{ id: '2', fb: 'manual entries' },
				{ id: '3', fb: 'Results' },
			]}
		/>
	)
}
