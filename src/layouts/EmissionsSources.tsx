import { PlusOutlined } from '@ant-design/icons'
import {
	Button,
	Flex,
	Input,
	InputNumber,
	Select,
	Table,
	Typography,
	theme,
} from 'antd'
import { addNewEmInst } from '@/store/cbam'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { selectNemesia } from '@/calc'

export const EmissionsSources = ({
	id,
}: {
	id: string
}) => {
	const { token } = theme.useToken()
	const { eminst } = useSelector(
		({ cbam }: RootState) => cbam,
	)
	const nemesia = useSelector(selectNemesia).b_1

	const dispatch = useDispatch()

	return (
		<Table
			id={id}
			pagination={false}
			title={() => (
				<Flex justify="space-between">
					<Typography.Title level={4}>
						Emissions Sources
					</Typography.Title>
					<Button
						type="primary"
						icon={<PlusOutlined />}
						onClick={() =>
							dispatch(addNewEmInst())
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
			rowKey={({ id }) => id}
			columns={[
				{
					title: 'Method',
					dataIndex: 'method',
					render: () => (
						<Select
							defaultValue="combustion"
							style={{
								width: 160,
							}}
						>
							<Select.Option value="combustion">
								Combustion
							</Select.Option>
							<Select.Option value="process-emissions">
								Process emissions
							</Select.Option>
							<Select.Option value="mass-balance">
								Mass Balance
							</Select.Option>
						</Select>
					),
				},
				{
					title: 'Name',
					dataIndex: 'name',
					render: (v, { id }) => (
						<Input
							value={v}
							// onChange={ev => dispatch(null)}
						/>
					),
				},
				{
					title: 'Activity data',
					dataIndex: 'ad',
					render: (v, { id }) => (
						<InputNumber
							value={v}
							controls={false}
							addonAfter={
								<Select
									defaultValue="t"
									style={{ width: 80 }}
								>
									<Select.Option value="t">
										t
									</Select.Option>
									<Select.Option value="kNm3">
										kNm3
									</Select.Option>
								</Select>
							}
							// onChange={activity_level =>
							// 	dispatch(null)
							// }
						/>
					),
				},
				{
					title: 'NCV',
					dataIndex: 'ncv',
					render: (v, { id }) => (
						<InputNumber
							value={v}
							controls={false}
							addonAfter={'GJ/t'}
							// onChange={activity_level =>
							// 	dispatch(null)
							// }
						/>
					),
				},
				{
					title: 'CO2e fossil',
					dataIndex: 'fossil',
				},
				{
					title: 'CO2e bio',
					dataIndex: 'bio',
				},
				{
					title: 'Energy content (fossil)',
					dataIndex: 'content_fossil',
				},
				{
					title: 'Energy content (bio)',
					dataIndex: 'content_bio',
				},
			]}
			dataSource={nemesia.list}
		/>
	)
}
