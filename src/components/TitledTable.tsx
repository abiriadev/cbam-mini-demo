import { PlusOutlined } from '@ant-design/icons'
import {
	Button,
	Flex,
	Table,
	Typography,
	theme,
} from 'antd'
import { ReactElement } from 'react'

export interface TitledTableProps {
	id?: string
	titleText: string
	button?:
		| ReactElement
		| {
				callback: () => void
				text: string
				icon?: ReactElement
		  }
}

export const TitledTable = ({
	id,
	titleText,
	button,
}: TitledTableProps) => {
	const { token } = theme.useToken()

	return (
		<Table
			id={id}
			pagination={false}
			title={() => (
				<Flex justify="space-between">
					<Typography.Title level={4}>
						{titleText}
					</Typography.Title>
					{button &&
						('callback' in button &&
						'text' in button ? (
							<Button
								type="primary"
								icon={
									button.icon ?? (
										<PlusOutlined />
									)
								}
								onClick={button.callback}
							>
								<Typography.Text
									strong
									style={{
										color: token.Button
											?.primaryColor,
									}}
								>
									{button.text}
								</Typography.Text>
							</Button>
						) : (
							button
						))}
				</Flex>
			)}
		/>
	)
}
