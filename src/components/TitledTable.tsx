import { PlusOutlined } from '@ant-design/icons'
import {
	Button,
	Flex,
	Table,
	Typography,
	theme,
	TableProps,
} from 'antd'
import { ReactElement } from 'react'

export interface TitledTableProps extends TableProps<any> {
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

export const TitledTable = (props: TitledTableProps) => {
	const { id, titleText, button, ...rest } = props
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
			{...rest}
		/>
	)
}
