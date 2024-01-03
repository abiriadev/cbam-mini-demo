import {
	Button,
	Flex,
	Input,
	InputNumber,
	Popconfirm,
	Select,
	Table,
	Typography,
	message,
	theme,
} from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store'
import {
	addNewPrecursor,
	updatePrecursorName,
	removePrecursor,
	updatePrecursorDirectSee,
	updatePrecursorIndirectSee,
} from './store/cbam'
import {
	DeleteOutlined,
	PlusOutlined,
} from '@ant-design/icons'

export const Precursors = () => {
	const { token } = theme.useToken()

	const { precursors } = useSelector(
		(st: RootState) => st.cbam,
	)
	const dispatch = useDispatch()

	return (
		<div id="precursors">
			<Table
				title={() => (
					<Flex justify="space-between">
						<Typography.Title
							level={4}
							style={{
								marginTop: 0,
								marginBottom: 0,
							}}
						>
							Purchased precursors
						</Typography.Title>
						<Button
							type="primary"
							icon={<PlusOutlined />}
							onClick={() =>
								dispatch(addNewPrecursor())
							}
						>
							<Typography.Text
								strong
								style={{
									color: token.Button
										?.primaryColor,
								}}
							>
								Add new precursor
							</Typography.Text>
						</Button>
					</Flex>
				)}
				pagination={false}
				rowKey={({ id }) => id}
				columns={[
					{
						title: 'Name',
						dataIndex: 'name',
						render: (v, { id }) => (
							<Input
								value={v}
								onChange={ev =>
									dispatch(
										updatePrecursorName(
											{
												ppid: id,
												name: ev
													.target
													.value,
											},
										),
									)
								}
							/>
						),
					},
					{
						title: 'SEE (direct)',
						dataIndex: ['see', 'direct'],
						render: (v, { id: ppid }) => (
							<InputNumber
								value={v}
								controls={false}
								addonAfter="eCO2t"
								onChange={see_d =>
									dispatch(
										updatePrecursorDirectSee(
											{
												ppid,
												see_d,
											},
										),
									)
								}
							/>
						),
					},
					{
						title: 'Source',
						render: () => (
							<Select style={{ width: 100 }}>
								<Select.Option>
									Measured
								</Select.Option>
								<Select.Option>
									Default
								</Select.Option>
							</Select>
						),
					},
					{
						title: 'SEE (indirect)',
						dataIndex: ['see', 'indirect'],
						render: (v, { id: ppid }) => (
							<InputNumber
								value={v}
								controls={false}
								addonAfter="eCO2t"
								onChange={see_i =>
									dispatch(
										updatePrecursorIndirectSee(
											{
												ppid,
												see_i,
											},
										),
									)
								}
							/>
						),
					},
					{
						title: 'Source',
						render: () => (
							<Select style={{ width: 100 }}>
								<Select.Option>
									D.2.1
								</Select.Option>
								<Select.Option>
									D.2.2
								</Select.Option>
								<Select.Option>
									D.2.3
								</Select.Option>
								<Select.Option>
									D.2.4
								</Select.Option>
								<Select.Option>
									Mix
								</Select.Option>
							</Select>
						),
					},
					{
						render: (_, { id }) => (
							<Popconfirm
								title="Delete 1 precursor"
								description="Are you sure to delete this precursor?"
								onConfirm={() =>
									dispatch(
										removePrecursor(id),
									) &&
									message.success(
										'1 precursor has been deleted',
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
				dataSource={precursors}
			/>
		</div>
	)
}
