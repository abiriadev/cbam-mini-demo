import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { ReactNode } from 'react'

export interface PlusButtonProps {
	children: ReactNode
	onClick?: () => void
}

export const PlusButton = ({
	children,
	onClick,
}: PlusButtonProps) => {
	return (
		<Button
			type="primary"
			icon={<PlusOutlined />}
			onClick={onClick}
		>
			<b>{children}</b>
		</Button>
	)
}
