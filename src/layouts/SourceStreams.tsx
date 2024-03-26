import { Input, InputNumber, Select } from 'antd'
import { useSelector } from 'react-redux'
import { TitledTable } from '@/components/TitledTable'
import { selectNemesia } from '@/calc'
import { PlusButton } from '@/components/PlusButton'

export const SourceStreams = ({ id }: { id?: string }) => {
	const nemesia = useSelector(selectNemesia).b_1

	return (
		<TitledTable
			id={id}
			titleText="Source Streams"
			button={
				<PlusButton>Add new process</PlusButton>
			}
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
