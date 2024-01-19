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
import { TitledTable } from '@/components/TitledTable'

export const AGC = ({ id }: { id?: string }) => {
	const { agc } = useSelector(
		({ cbam }: RootState) => cbam,
	)
	const nemesia = useSelector(selectNemesia).a_4_1

	const { token } = theme.useToken()
	const dispatch = useDispatch()

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
						onClick: ({ key }) =>
							dispatch(
								addNewAgc(key as AgcKind),
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
			}
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
