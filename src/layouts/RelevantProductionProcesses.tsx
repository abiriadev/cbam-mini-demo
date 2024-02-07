import {
	Button,
	Dropdown,
	Input,
	Popconfirm,
	Typography,
	message,
	theme,
} from 'antd'
import { useSelector } from 'react-redux'
import {
	DeleteOutlined,
	DownOutlined,
} from '@ant-design/icons'
import { selectNemesia } from '@/calc'
import { TitledTable } from '@/components/TitledTable'
import { AgcKindSet } from '@/store/cbam'

export const RelevantProductionProcesses = ({
	id,
}: {
	id?: string
}) => {
	const { token } = theme.useToken()

	const nemesia = useSelector(selectNemesia).a_4_2

	return (
		<div>
			<TitledTable
				id={id}
				titleText="Relevand production processes"
				rowKey={({ id }) => id}
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
								style={{
									color: token.Button
										?.primaryColor,
								}}
							>
								Add new process
							</Typography.Text>
						</Button>
					</Dropdown>
				}
				columns={[
					{
						title: 'Name',
						dataIndex: 'name',
						render: (v, { id }) => (
							<Input value={v} />
						),
					},
					{
						title: 'Production process',
						dataIndex: 'agc',
					},
					...Array(6)
						.fill(null)
						.map((_, i) => ({
							title: `Included goods ${
								i + 1
							}`,
							dataIndex: ['included', i],
							render: (value: any) => (
								<Input value={value} />
							),
						})),
					{
						render: (_, { id }) => (
							<Popconfirm
								title="Delete 1 process"
								description="Are you sure to delete this process?"
								onConfirm={() =>
									message.success(
										'1 process has been deleted',
									)
								}
							>
								<Button
									danger
									icon={
										<DeleteOutlined />
									}
								></Button>
							</Popconfirm>
						),
					},
				]}
				dataSource={nemesia.list}
			/>
		</div>
	)
}
