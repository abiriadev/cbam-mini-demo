import {
	Button,
	Dropdown,
	Input,
	Popconfirm,
	Typography,
	message,
	theme,
} from 'antd'
import { useSelector } from 'react-redux'
import {
	DeleteOutlined,
	DownOutlined,
} from '@ant-design/icons'
import { selectNemesia } from '@/calc'
import { TitledTable } from '@/components/TitledTable'
import { AgcKindSet } from '@/store/cbam'
import { DeleteButton } from '@/components/DeleteButton'
import { DropdownButton } from '@/components/DropdownButton'

export const RelevantProductionProcesses = ({
	id,
}: {
	id?: string
}) => {
	const { token } = theme.useToken()

	const nemesia = useSelector(selectNemesia).a_4_2

	return (
		<div>
			<TitledTable
				id={id}
				titleText="Relevand production processes"
				rowKey={({ id }) => id}
				button={
					<DropdownButton
						text="Add new process"
						items={AgcKindSet}
					/>
				}
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
							<DeleteButton />
						),
					},
				]}
				dataSource={nemesia.list}
			/>
		</div>
	)
}
