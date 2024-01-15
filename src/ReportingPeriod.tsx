import {
	DatePicker,
	Flex,
	Form,
	Typography,
	theme,
} from 'antd'

export const ReportingPeriod = ({
	id,
}: {
	id?: string
}) => {
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
					Reporting Period
				</Typography.Title>
			</Flex>
			<Flex>
				<Form>
					<Form.Item
						label="Reporting period"
						name="period"
						rules={[{ required: true }]}
					>
						<DatePicker.RangePicker />
					</Form.Item>
				</Form>
			</Flex>
		</div>
	)
}
