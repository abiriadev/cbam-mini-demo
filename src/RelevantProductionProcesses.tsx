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
import { RootState } from './store'
import {
	addNewProcess,
	removeProcess,
	updateProcessName,
	addPrecursorToProcess,
	findPrecursorById,
	removePrecursorFromProcess,
	updatePrecursorAmount,
} from './store/cbam'
import {
	DeleteOutlined,
	DownOutlined,
	PlusOutlined,
} from '@ant-design/icons'

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

	return (
		<div>
			<Table
				id={id}
				pagination={false}
				rowKey={({ id }) => id}
				title={() => (
					<Flex justify="space-between">
						<Typography.Title
							level={4}
							style={{
								marginTop: 0,
								marginBottom: 0,
							}}
						>
							Relevand production processes
						</Typography.Title>
						<Button
							type="primary"
							icon={<PlusOutlined />}
							onClick={() =>
								dispatch(addNewProcess())
							}
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
						title: '1',
						render: () => <Input />,
					},
					{
						title: '2',
						render: () => <Input />,
					},
					{
						title: '3',
						render: () => <Input />,
					},
					{
						title: '4',
						render: () => <Input />,
					},
					{
						title: '5',
						render: () => <Input />,
					},
					{
						title: '6',
						render: () => <Input />,
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
				dataSource={processes}
			/>
		</div>
	)
}
