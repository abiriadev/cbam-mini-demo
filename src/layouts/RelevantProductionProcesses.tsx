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
import { TitledTable } from '@/components/TitledTable'

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
				}
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
