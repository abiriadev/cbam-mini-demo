import { Input, theme } from 'antd'
import { useSelector } from 'react-redux'
import { DeleteButton } from '@/components/DeleteButton'
import { TitledTable } from '@/components/TitledTable'
import { DropdownButton } from '@/components/DropdownButton'
import { RootState } from '@/store'

export const Precursors = ({ id }: { id?: string }) => {
	const { token } = theme.useToken()

	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)

	return (
		<TitledTable
			id={id}
			titleText="Purchased precursors"
			button={
				<DropdownButton text="Precursors"></DropdownButton>
			}
			rowKey={({ id }) => id}
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
				{
					title: 'Country code',
					dataIndex: 'country',
					render: country => (
						<Select
							defaultValue={country}
							style={{ width: 70 }}
							options={cc.map(c => ({
								value: c,
								label: c,
							}))}
						/>
					),
				},
				...Array(5)
					.fill(null)
					.map((_, i) => ({
						title: `Route ${i + 1}`,
						dataIndex: ['routes', i],
						render: (r: any) => (
							<Input value={r} />
						),
					})),
				{
					render: (_, { id }) => <DeleteButton />,
				},
			]}
			dataSource={nemesia.list}
		/>
	)
}

// ;[
// 	{
// 		title: 'Name',
// 		dataIndex: 'name',
// 		render: (v, { id }) => (
// 			<Input
// 				value={v}
// 				onChange={ev =>
// 					dispatch(
// 						updatePrecursorName({
// 							ppid: id,
// 							name: ev.target.value,
// 						}),
// 					)
// 				}
// 			/>
// 		),
// 	},
// 	{
// 		title: 'SEE (direct)',
// 		dataIndex: ['see', 'direct'],
// 		render: (v, { id: ppid }) => (
// 			<InputNumber
// 				value={v}
// 				controls={false}
// 				addonAfter="eCO2t"
// 				onChange={see_d =>
// 					dispatch(
// 						updatePrecursorDirectSee({
// 							ppid,
// 							see_d,
// 						}),
// 					)
// 				}
// 			/>
// 		),
// 	},
// 	{
// 		title: 'Source',
// 		render: () => (
// 			<Select style={{ width: 100 }}>
// 				<Select.Option>Measured</Select.Option>
// 				<Select.Option>Default</Select.Option>
// 			</Select>
// 		),
// 	},
// 	{
// 		title: 'SEE (indirect)',
// 		dataIndex: ['see', 'indirect'],
// 		render: (v, { id: ppid }) => (
// 			<InputNumber
// 				value={v}
// 				controls={false}
// 				addonAfter="eCO2t"
// 				onChange={see_i =>
// 					dispatch(
// 						updatePrecursorIndirectSee({
// 							ppid,
// 							see_i,
// 						}),
// 					)
// 				}
// 			/>
// 		),
// 	},
// 	{
// 		title: 'Source',
// 		render: () => (
// 			<Select style={{ width: 100 }}>
// 				<Select.Option>D.2.1</Select.Option>
// 				<Select.Option>D.2.2</Select.Option>
// 				<Select.Option>D.2.3</Select.Option>
// 				<Select.Option>D.2.4</Select.Option>
// 				<Select.Option>Mix</Select.Option>
// 			</Select>
// 		),
// 	},
// 	{
// 		render: (_, { id }) => (
// 			<Popconfirm
// 				title="Delete 1 precursor"
// 				description="Are you sure to delete this precursor?"
// 				onConfirm={() =>
// 					dispatch(removePrecursor(id)) &&
// 					message.success(
// 						'1 precursor has been deleted',
// 					)
// 				}
// 			>
// 				<Button
// 					danger
// 					icon={<DeleteOutlined />}
// 				></Button>
// 			</Popconfirm>
// 		),
// 	},
// ]
