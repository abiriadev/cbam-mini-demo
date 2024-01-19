import { TitledTable } from '@/components/TitledTable'

export const SummaryProducts = ({ id }: { id: string }) => {
	return (
		<TitledTable
			id={id}
			titleText="Summary products"
			columns={[
				{
					title: 'Process',
					dataIndex: 'name',
				},
				{
					title: 'AGC',
					dataIndex: 'agc',
				},
				{
					title: 'CN Name',
					dataIndex: 'cn',
				},
				{
					title: 'Product name',
					dataIndex: 'product_name',
				},
				{
					title: 'SEE (direct)',
					dataIndex: 'see_d',
				},
				{
					title: 'SEE (indirect)',
					dataIndex: 'see_i',
				},
				{
					title: 'SEE (total)',
					dataIndex: 'see_t',
				},
				{
					title: 'Unit',
					dataIndex: 'unit',
				},
				{
					title: 'Share of emissions',
					dataIndex: 'share',
				},
				{
					title: 'Source for electricity EF',
					dataIndex: 'source',
				},
				{
					title: 'Embedded electricity',
					dataIndex: 'ee',
				},
			]}
			dataSource={[]}
		/>
	)
}
