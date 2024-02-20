import {
	Button,
	Dropdown,
	Flex,
	Input,
	InputNumber,
	Popconfirm,
	Space,
	Table,
	Typography,
	message,
	theme,
} from 'antd'
import { useSelector } from 'react-redux'
import {
	DeleteOutlined,
	DownOutlined,
	PlusOutlined,
} from '@ant-design/icons'
import { selectNemesia } from '@/calc'
import { DeleteButton } from '@/components/DeleteButton'

export const Processes = () => {
	const { token } = theme.useToken()

	const nemesia = useSelector(selectNemesia).d

	return (
		<div>
			<Table
				id="processes"
				pagination={false}
				rowKey={({ id }) => id}
				title={() => (
					<Flex justify="space-between">
						<Typography.Title level={4}>
							Processes
						</Typography.Title>
						<Button
							type="primary"
							icon={<PlusOutlined />}
							// onClick={() =>
							// 	dispatch(addNewProcess())
							// }
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
							<Input value={v} />
						),
					},
					{
						title: 'Direct Emission',
						dataIndex: 'direm',
						render: (v, { id }) => (
							<InputNumber
								value={v}
								controls={false}
								addonAfter="eCO2t"
							/>
						),
					},
					{
						title: 'Activity Level',
						dataIndex: 'activity_level',
						render: (v, { id }) => (
							<InputNumber
								value={v}
								controls={false}
								addonAfter="t"
							/>
						),
					},
					{
						title: 'Measurable heat (imported)',
						// dataIndex: 'activity_level',
						render: (
							_,
							{
								id,
								heat: {
									imported: {
										amount,
										emissionFactor,
									},
								},
							},
						) => (
							<Space>
								<InputNumber
									value={amount}
									controls={false}
									addonAfter="TJ"
								/>
								<InputNumber
									value={emissionFactor}
									controls={false}
									addonAfter="tCO2e/TJ"
								/>
							</Space>
						),
					},
					{
						title: 'Measurable heat (exported)',
						// dataIndex: 'activity_level',
						render: (
							_,
							{
								id,
								heat: {
									exported: {
										amount,
										emissionFactor,
									},
								},
							},
						) => (
							<Space>
								<InputNumber
									value={amount}
									controls={false}
									addonAfter="TJ"
								/>
								<InputNumber
									value={emissionFactor}
									controls={false}
									addonAfter="tCO2e/TJ"
								/>
							</Space>
						),
					},
					{
						title: 'Waste Gas (imported)',
						dataIndex: [
							'wasteGas',
							'imported',
							'amount',
						],
						render: (v, { id }) => (
							<InputNumber
								value={v}
								controls={false}
								addonAfter="TJ"
							/>
						),
					},
					{
						title: 'Waste Gas (exported)',
						dataIndex: [
							'wasteGas',
							'exported',
							'amount',
						],
						render: (v, { id }) => (
							<InputNumber
								value={v}
								controls={false}
								addonAfter="TJ"
							/>
						),
					},
					{
						render: (_, { id }) => (
							<DeleteButton />
						),
					},
				]}
				dataSource={nemesia.list}
				expandable={{
					expandedRowRender: ({ id, name }) => {
						const precursors = []
						return (
							<Table
								rowKey={({ id }) => id}
								locale={{
									emptyText: <></>,
								}}
								title={() => (
									<Flex justify="space-between">
										<Typography.Title
											level={5}
										>
											Consumed
											precursors in "
											{name}"
										</Typography.Title>
										<Dropdown
											trigger={[
												'click',
											]}
											menu={{
												items: [].map(
													({
														name,
														id,
													}) => ({
														key: id,
														label: name,
													}),
												),
											}}
										>
											<Button
												type="primary"
												icon={
													<DownOutlined />
												}
											>
												<Typography.Text
													strong
													style={{
														color: token
															.Button
															?.primaryColor,
													}}
												>
													Add
													consumed
													precursor
												</Typography.Text>
											</Button>
										</Dropdown>
									</Flex>
								)}
								columns={[
									{
										title: 'Name',
										dataIndex: 'name',
									},
									{
										title: 'Amount',
										dataIndex: 'amount',
										render: (
											v,
											{ id: ppid },
										) => (
											<InputNumber
												value={v}
												controls={
													false
												}
												addonAfter="t"
											/>
										),
									},
									{
										render: (
											_,
											{ id: ppid },
										) => (
											<DeleteButton />
										),
									},
								]}
								// dataSource={Object.entries(
								// 	precursors,
								// ).map(([k, v]) => ({
								// 	id: k,
								// 	name: findPrecursorById(
								// 		pps,
								// 		k,
								// 	)?.name,
								// 	amount: v.amount,
								// }))}
								dataSource={[]}
								pagination={false}
							/>
						)
					},
				}}
			/>
		</div>
	)
}
