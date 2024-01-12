import { Table, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'

export const AGC = ({ id }: { id?: string }) => {
	const { agc } = useSelector(
		({ cbam }: RootState) => cbam,
	)
	const dispatch = useDispatch()

	return (
		<Table
			id={id}
			title={() => (
				<Typography.Title
					level={4}
					style={{
						marginTop: 0,
						marginBottom: 0,
					}}
				>
					List of aggregated goods categories
				</Typography.Title>
			)}
			columns={[
				{
					title: 'Aggregated goods category',
					dataIndex: 'kind',
				},
				{
					title: 'Routes',
				},
				{
					title: 'Route 1',
					dataIndex: ['routes', 0],
				},
				{
					title: 'Route 2',
					dataIndex: ['routes', 1],
				},
				{
					title: 'Route 3',
					dataIndex: ['routes', 2],
				},
				{
					title: 'Route 4',
					dataIndex: ['routes', 3],
				},
				{
					title: 'Route 5',
					dataIndex: ['routes', 4],
				},
				{
					title: 'Route 6',
					dataIndex: ['routes', 5],
				},
			]}
			dataSource={agc}
		/>
	)
}
