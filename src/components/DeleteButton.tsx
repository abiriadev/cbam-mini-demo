import { DeleteOutlined } from '@ant-design/icons'
import { Button, Popconfirm } from 'antd'

export interface DeleteButtonProps {
	title?: string
	description?: string
	onConfirm?: () => void
}

export const DeleteButton = ({
	title,
	description,
	onConfirm,
}: DeleteButtonProps) => (
	<Popconfirm
		title={title ?? 'Delete 1 item'}
		description={
			description ??
			'Are you sure to delete this item?'
		}
		onConfirm={onConfirm ?? (() => void 0)}
	>
		<Button
			danger
			type="primary"
			icon={<DeleteOutlined />}
		></Button>
	</Popconfirm>
)
