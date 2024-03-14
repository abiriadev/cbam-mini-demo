import { Flex, Typography, theme } from 'antd'
import { ReactNode } from 'react'

export interface TitledBoxProps {
	id?: string
	title: string
	children: ReactNode
}

export const TitledBox = ({
	id,
	title,
	children,
}: TitledBoxProps) => {
	const { token } = theme.useToken()

	return (
		<div
			id={id}
			style={{
				backgroundColor: token.colorBgContainer,
				borderRadius: token.borderRadius,
				padding: token.padding,
			}}
		>
			<Flex
				justify="space-between"
				style={{
					paddingBottom: token.padding,
				}}
			>
				<Typography.Title level={4}>
					{title}
				</Typography.Title>
			</Flex>
			{children}
		</div>
	)
}
