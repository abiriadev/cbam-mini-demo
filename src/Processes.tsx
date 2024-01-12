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
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store'
import {
	addNewProcess,
	removeProcess,
	updateDirem,
	updateActivityLevel,
	updateProcessName,
	addPrecursorToProcess,
	findPrecursorById,
	removePrecursorFromProcess,
	updatePrecursorAmount,
	updateImportedMeasurableHeatAmount,
	updateImportedMeasurableHeatEf,
	updateExportedMeasurableHeatAmount,
	updateExportedMeasurableHeatEf,
	updateImportedWasteGasAmount,
	updateExportedWasteGasAmount,
} from './store/cbam'
import {
	DeleteOutlined,
	DownOutlined,
	PlusOutlined,
} from '@ant-design/icons'

export const Processes = () => {
	const { token } = theme.useToken()

	const { processes, precursors: pps } = useSelector(
		(st: RootState) => st.cbam,
	)
	const dispatch = useDispatch()

	return (
		<div>
			<Table
				id="processes"
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
							Processes
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
						title: 'Direct Emission',
						dataIndex: 'direm',
						render: (v, { id }) => (
							<InputNumber
								value={v}
								controls={false}
								style={
									{
										// width: '9em',
									}
								}
								addonAfter="eCO2t"
								onChange={direm =>
									dispatch(
										updateDirem({
											pid: id,
											direm,
										}),
									)
								}
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
								onChange={activity_level =>
									dispatch(
										updateActivityLevel(
											{
												pid: id,
												activity_level,
											},
										),
									)
								}
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
									onChange={amount =>
										dispatch(
											updateImportedMeasurableHeatAmount(
												{
													pid: id,
													amount: amount!,
												},
											),
										)
									}
								/>
								<InputNumber
									value={emissionFactor}
									controls={false}
									addonAfter="tCO2e/TJ"
									onChange={ef =>
										dispatch(
											updateImportedMeasurableHeatEf(
												{
													pid: id,
													ef: ef!,
												},
											),
										)
									}
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
									style={
										{
											// width: '7em',
										}
									}
									addonAfter="TJ"
									onChange={amount =>
										dispatch(
											updateExportedMeasurableHeatAmount(
												{
													pid: id,
													amount: amount!,
												},
											),
										)
									}
								/>
								<InputNumber
									value={emissionFactor}
									controls={false}
									style={
										{
											// width: '10em',
										}
									}
									addonAfter="tCO2e/TJ"
									onChange={ef =>
										dispatch(
											updateExportedMeasurableHeatEf(
												{
													pid: id,
													ef: ef!,
												},
											),
										)
									}
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
								style={
									{
										// width: '7em',
									}
								}
								addonAfter="TJ"
								onChange={amount =>
									dispatch(
										updateImportedWasteGasAmount(
											{
												pid: id,
												amount,
											},
										),
									)
								}
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
								style={
									{
										// width: '7em',
									}
								}
								addonAfter="TJ"
								onChange={amount =>
									dispatch(
										updateExportedWasteGasAmount(
											{
												pid: id,
												amount,
											},
										),
									)
								}
							/>
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
				dataSource={processes}
				expandable={{
					expandedRowRender: ({
						id,
						name,
						precursors,
					}) => {
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
											style={{
												marginTop: 0,
												marginBottom: 0,
											}}
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
												items: pps.map(
													({
														name,
														id,
													}) => ({
														key: id,
														label: name,
													}),
												),
												onClick: ({
													key,
												}) =>
													dispatch(
														addPrecursorToProcess(
															{
																pid: id,
																ppid: key,
															},
														),
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
												onChange={amount =>
													dispatch(
														updatePrecursorAmount(
															{
																pid: id,
																ppid,
																amount,
															},
														),
													)
												}
											/>
										),
									},
									{
										render: (
											_,
											{ id: ppid },
										) => (
											<Popconfirm
												title="Remove 1 precursor"
												description="Are you sure to remove this precursor from the process?"
												onConfirm={() =>
													dispatch(
														removePrecursorFromProcess(
															{
																pid: id,
																ppid,
															},
														),
													) &&
													message.success(
														'1 precursor has been removed from a process',
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
								dataSource={Object.entries(
									precursors,
								).map(([k, v]) => ({
									id: k,
									name: findPrecursorById(
										pps,
										k,
									)?.name,
									amount: v.amount,
								}))}
								pagination={false}
							/>
						)
					},
				}}
			/>
		</div>
	)
}
