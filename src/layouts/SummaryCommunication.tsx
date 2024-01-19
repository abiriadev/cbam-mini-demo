import { selectNemesia } from '@/calc'
import { Table, Typography } from 'antd'
import { useSelector } from 'react-redux'

export const SummaryCommunication = ({
	id,
}: {
	id: string
}) => {
	const nemesia = useSelector(selectNemesia).s2

	return (
		<Table
			id={id}
			title={() => (
				<Typography.Title level={4}>
					Summary communication
				</Typography.Title>
			)}
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
			dataSource={nemesia.list}
		/>
	)
}
