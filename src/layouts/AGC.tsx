import {
	Button,
	Dropdown,
	Flex,
	Input,
	Popconfirm,
	Table,
	Typography,
	theme,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import {
	DeleteOutlined,
	DownOutlined,
} from '@ant-design/icons'
import {
	AgcKind,
	AgcKindSet,
	addNewAgc,
} from '@/store/cbam'
import { selectNemesia } from '@/calc'

export const AGC = ({ id }: { id?: string }) => {
	const { agc } = useSelector(
		({ cbam }: RootState) => cbam,
	)
	const nemesia = useSelector(selectNemesia).a_4_1

	const { token } = theme.useToken()
	const dispatch = useDispatch()

	return (
		<Table
			id={id}
			pagination={false}
			title={() => (
				<Flex justify="space-between">
					<Typography.Title level={4}>
						List of aggregated goods categories
					</Typography.Title>
					<Dropdown
						trigger={['click']}
						menu={{
							items: AgcKindSet.map(k => ({
								key: k,
								label: k,
							})),
							onClick: ({ key }) =>
								dispatch(
									addNewAgc(
										key as AgcKind,
									),
								),
						}}
					>
						<Button
							type="primary"
							icon={<DownOutlined />}
						>
							<Typography.Text
								strong
								style={{
									color: token.Button
										?.primaryColor,
								}}
							>
								Add new aggregated goods
								category
							</Typography.Text>
						</Button>
					</Dropdown>
				</Flex>
			)}
			columns={[
				{
					title: 'Aggregated goods category',
					dataIndex: 'kind',
				},
				{
					title: 'Route 1',
					dataIndex: ['routes', 0],
					render: r => <Input value={r} />,
				},
				{
					title: 'Route 2',
					dataIndex: ['routes', 1],
					render: r => <Input value={r} />,
				},
				{
					title: 'Route 3',
					dataIndex: ['routes', 2],
					render: r => <Input value={r} />,
				},
				{
					title: 'Route 4',
					dataIndex: ['routes', 3],
					render: r => <Input value={r} />,
				},
				{
					title: 'Route 5',
					dataIndex: ['routes', 4],
					render: r => <Input value={r} />,
				},
				{
					title: 'Route 6',
					dataIndex: ['routes', 5],
					render: r => <Input value={r} />,
				},
				{
					render: (_, { id }) => (
						<Popconfirm
							title="Delete 1 process"
							description="Are you sure to delete this process?"
							onConfirm={() => void 0}
						>
							<Button
								danger
								icon={<DeleteOutlined />}
							></Button>
						</Popconfirm>
					),
				},
			]}
			dataSource={nemesia.list}
		/>
	)
}
