import {
	Button,
	Dropdown,
	Input,
	Popconfirm,
	Typography,
	theme,
} from 'antd'
import { useSelector } from 'react-redux'
import {
	DeleteOutlined,
	DownOutlined,
} from '@ant-design/icons'
import { AgcKindSet } from '@/store/cbam'
import { selectNemesia } from '@/calc'
import { TitledTable } from '@/components/TitledTable'

export const AGC = ({ id }: { id?: string }) => {
	const nemesia = useSelector(selectNemesia).a_4_1

	const { token } = theme.useToken()

	return (
		<TitledTable
			id={id}
			titleText="List of aggregated goods categories"
			button={
				<Dropdown
					trigger={['click']}
					menu={{
						items: AgcKindSet.map(k => ({
							key: k,
							label: k,
						})),
					}}
				>
					<Button
						type="primary"
						icon={<DownOutlined />}
					>
						<Typography.Text
							strong
							className="text-white"
						>
							Add new aggregated goods
							category
						</Typography.Text>
					</Button>
				</Dropdown>
			}
			rowKey={({ id }) => id}
			columns={[
				{
					title: 'Aggregated goods category',
					dataIndex: 'kind',
				},
				...Array(6)
					.fill(null)
					.map((_, i) => ({
						title: `Route ${i + 1}`,
						dataIndex: ['routes', i],
						render: (r: any) => (
							<Input value={r} />
						),
					})),
				{
					render: _ => (
						<Popconfirm
							title="Delete 1 process"
							description="Are you sure to delete this process?"
							onConfirm={() => void 0}
						>
							<Button
								danger
								type="primary"
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
