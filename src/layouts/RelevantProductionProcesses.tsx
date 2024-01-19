import {
	Button,
	Dropdown,
	Flex,
	Input,
	InputNumber,
	Popconfirm,
	Table,
	Typography,
	message,
	theme,
} from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import {
	addNewProcess,
	removeProcess,
	updateProcessName,
	AgcKindSet,
	AgcKind,
} from '@/store/cbam'
import {
	DeleteOutlined,
	DownOutlined,
} from '@ant-design/icons'
import { selectNemesia } from '@/calc'

export const RelevantProductionProcesses = ({
	id,
}: {
	id?: string
}) => {
	const { token } = theme.useToken()

	const { processes, precursors: pps } = useSelector(
		(st: RootState) => st.cbam,
	)
	const dispatch = useDispatch()
	const nemesia = useSelector(selectNemesia).a_4_2

	return (
		<div>
			<Table
				id={id}
				pagination={false}
				rowKey={({ id }) => id}
				title={() => (
					<Flex justify="space-between">
						<Typography.Title level={4}>
							Relevand production processes
						</Typography.Title>

						<Dropdown
							trigger={['click']}
							menu={{
								items: AgcKindSet.map(
									k => ({
										key: k,
										label: k,
									}),
								),
								onClick: ({ key }) =>
									dispatch(
										addNewProcess(
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
									Add new process
								</Typography.Text>
							</Button>
						</Dropdown>
					</Flex>
				)}
				columns={[
					{
						title: 'Name',
						dataIndex: 'name',
						render: (v, { id }) => (
							<Input
								value={v}
								onChange={ev =>
									dispatch(
										updateProcessName({
											pid: id,
											name: ev.target
												.value,
										}),
									)
								}
							/>
						),
					},
					{
						title: 'Production process',
						dataIndex: 'agc',
					},
					{
						title: 'Included goods 1',
						dataIndex: ['included', 0],
						render: value => (
							<Input value={value} />
						),
					},
					{
						title: 'Included goods 2',
						dataIndex: ['included', 1],
						render: value => (
							<Input value={value} />
						),
					},
					{
						title: 'Included goods 3',
						dataIndex: ['included', 2],
						render: value => (
							<Input value={value} />
						),
					},
					{
						title: 'Included goods 4',
						dataIndex: ['included', 3],
						render: value => (
							<Input value={value} />
						),
					},
					{
						title: 'Included goods 5',
						dataIndex: ['included', 4],
						render: value => (
							<Input value={value} />
						),
					},
					{
						title: 'Included goods 6',
						dataIndex: ['included', 5],
						render: value => (
							<Input value={value} />
						),
					},
					{
						render: (_, { id }) => (
							<Popconfirm
								title="Delete 1 process"
								description="Are you sure to delete this process?"
								onConfirm={() =>
									dispatch(
										removeProcess(id),
									) &&
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
