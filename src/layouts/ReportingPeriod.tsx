import {
	DatePicker,
	Flex,
	Form,
	Typography,
	theme,
} from 'antd'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { RootState } from '@/store'
import { useEffect } from 'react'

export const ReportingPeriod = ({
	id,
}: {
	id?: string
}) => {
	const { token } = theme.useToken()
	const cbam = useSelector(
		(state: RootState) => state.cbam,
	)
	const { state } = useSelector(
		({ environment }: RootState) => environment,
	)
	const [form] = Form.useForm()

	useEffect(() => {
		if (state === 'generated') {
			form.setFieldValue('period', [
				dayjs(nemesia.start),
				dayjs(nemesia.end),
			])
		}
	}, [state])

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
				<Form form={form}>
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
