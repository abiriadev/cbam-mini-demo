import { Button, InputNumber, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { DeleteOutlined } from '@ant-design/icons'
import { useImmer } from 'use-immer'

interface ProductionProcess {
	id: string
	name: string
	direm: number
}

const newPP = (): ProductionProcess => ({
	id: crypto.randomUUID(),
	name: 'new process',
	direm: 0,
})

export const EC = () => {
	const [d, setD] = useImmer(initD)

	const columns: ColumnsType<ProductionProcess> = [
		{
			title: 'Process Name',
			dataIndex: 'name',
		},
		{
			title: 'DirEm*',
			dataIndex: 'direm',
			render: (v, { id }) => {
				return (
					<InputNumber
						value={v}
						controls={false}
						onChange={nw => {
							console.log(nw)
							setD(draft => {
								const i = draft.findIndex(
									({ id: pid }) =>
										pid === id,
								)
								if (i !== -1)
									draft[i].direm = nw
							})
						}}
					/>
				)
			},
		},
		{
			title: 'Delete',
			render: (_, { id }) => (
				<Button
					danger
					onClick={() =>
						setD(draft => {
							const i = draft.findIndex(
								({ id: pid }) => pid === id,
							)
							if (i !== -1) draft.splice(i, 1)
						})
					}
				>
					<DeleteOutlined />
				</Button>
			),
		},
	]

	return (
		<div>
			<Button
				type="primary"
				onClick={() =>
					setD(draft => void draft.push(newPP()))
				}
			>
				Add new process
			</Button>
			<Table
				columns={columns}
				dataSource={d}
				size="small"
				rowKey={({ id }) => id}
				pagination={false}
			/>
		</div>
	)
}

const initD: Array<ProductionProcess> = [
	{
		id: crypto.randomUUID(),
		name: 'he',
		direm: 123,
	},
	{
		id: crypto.randomUUID(),
		name: 'eee',
		direm: 12323,
	},
]
