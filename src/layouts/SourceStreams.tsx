import { Input, InputNumber, Select } from 'antd'
import { useSelector } from 'react-redux'
import { TitledTable } from '@/components/TitledTable'
import { PlusButton } from '@/components/PlusButton'
import { RootState } from '@/store'
import { zip, zipWith } from 'lodash'

export const SourceStreams = ({ id }: { id?: string }) => {
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

	const data = zipWith(
		cbam?.i?.b?.source_streams,
		cbam?.o?.b?.source_streams,
		(a, b) => ({ ...a, ...b }),
	)

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
					render: (v, { id, ad_unit }) => (
						<InputNumber
							value={v}
							controls={false}
							addonAfter={
								<Select
									defaultValue={ad_unit}
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
						/>
					),
				},
				{
					title: 'Emission factor',
					dataIndex: 'ef',
					render: (v, { id, ef_unit }) => (
						<InputNumber
							value={v}
							controls={false}
							addonAfter={
								<Select
									defaultValue={ef_unit}
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
						/>
					),
				},
				{
					title: 'CO2e fossil',
					dataIndex: 'co2e_fossil',
				},
				{
					title: 'CO2e bio',
					dataIndex: 'co2e_bio',
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
			dataSource={data ?? []}
		/>
	)
}
