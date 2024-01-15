import { PlusOutlined } from '@ant-design/icons'
import {
	Button,
	Flex,
	Table,
	Typography,
	theme,
} from 'antd'

export interface TitledTableProps {
	id: string
}

export const TitledTable = ({ id }: TitledTableProps) => {
	const { token } = theme.useToken()

	return (
		<Table
			id={id}
			pagination={false}
			title={() => (
				<Flex justify="space-between">
					<Typography.Title level={4}>
						Processes
					</Typography.Title>
					<Button
						type="primary"
						icon={<PlusOutlined />}
					>
						<Typography.Text
							strong
							style={{
								color: token.Button
									?.primaryColor,
							}}
						>
							Add new process
						</Typography.Text>
					</Button>
				</Flex>
			)}
		/>
	)
}
