import { Table, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { selectNemesia } from '@/calc'

export const Emissions = ({ id }: { id?: string }) => {
	const nemesia = useSelector(selectNemesia).s1_2_2_1

	return (
		<div id={id}>
			<Table
				title={() => (
					<Typography.Title level={4}>
						Emissions
					</Typography.Title>
				)}
				rowKey={({ id }) => id}
				pagination={false}
				columns={[
					{
						title: 'Name',
						dataIndex: 'name',
					},
					{
						title: 'SE (direct)',
						dataIndex: ['se', 'direct'],
					},
					{
						title: 'SE (indirect)',
						dataIndex: ['se', 'indirect'],
					},
					{
						title: 'SE (total)',
					},
					{
						title: 'SEE (direct)',
						dataIndex: ['see', 'direct'],
					},
					{
						title: 'SEE (indirect)',
						dataIndex: ['see', 'indirect'],
					},
					{
						title: 'SEE (total)',
					},
					{
						title: 'EmbEm (direct)',
						dataIndex: ['ee', 'direct'],
					},
					{
						title: 'EmbEm (indirect)',
						dataIndex: ['ee', 'indirect'],
					},
					{
						title: 'EmbEm (total)',
					},
				]}
				dataSource={nemesia.list}
			/>
		</div>
	)
}
