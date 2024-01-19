import { selectNemesia } from '@/calc'
import {
	DatePicker,
	Flex,
	Form,
	Typography,
	theme,
} from 'antd'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

export const ReportingPeriod = ({
	id,
}: {
	id?: string
}) => {
	const { token } = theme.useToken()
	const nemesia = useSelector(selectNemesia).a_1

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
						<DatePicker.RangePicker
							defaultValue={[
								dayjs(nemesia.start),
								dayjs(nemesia.end),
							]}
						/>
					</Form.Item>
				</Form>
			</Flex>
		</div>
	)
}
