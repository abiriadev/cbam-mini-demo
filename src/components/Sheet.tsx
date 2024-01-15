import { Flex, Typography, theme } from 'antd'
import { ReactNode } from 'react'

export interface SheetProps {
	id: string
	title: string
	children: ReactNode
	sub?: boolean
}

export const Sheet = ({
	id,
	title,
	children,
	sub,
}: SheetProps) => {
	const {
		token: { colorPrimary },
	} = theme.useToken()

	return (
		<div id={id}>
			<Typography.Title
				level={sub ? 5 : 3}
				style={{
					paddingBottom: 10,
					color: sub ? 'black' : colorPrimary,
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
