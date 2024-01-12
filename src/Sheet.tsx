import { Flex, Typography, theme } from 'antd'
import { ReactNode } from 'react'

export interface SheetProps {
	id: string
	title: string
	children: ReactNode
}

export const Sheet = ({
	id,
	title,
	children,
}: SheetProps) => {
	const {
		token: { colorPrimary },
	} = theme.useToken()

	return (
		<div id={id}>
			<Typography.Title
				level={3}
				style={{
					paddingBottom: 10,
					color: colorPrimary,
				}}
			>
				{title}
			</Typography.Title>
			<Flex vertical gap="large">
				{children}
			</Flex>
		</div>
	)
}
