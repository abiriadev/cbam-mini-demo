import { Flex, Typography } from 'antd'
import { ReactNode } from 'react'

export interface SheetProps {
	children: ReactNode
}

export const Sheet = ({ children }: SheetProps) => {
	return (
		<div>
			<Typography.Title level={3}>
				Title
			</Typography.Title>
			<Flex>{children}</Flex>
		</div>
	)
}
