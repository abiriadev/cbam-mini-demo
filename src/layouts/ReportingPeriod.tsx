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
	const [form] = Form.useForm()

	useEffect(() => {
		if (cbam.state !== 'generated') return

		form.setFieldValue('period', [
			// @ts-ignore
			dayjs(cbam.i.a.reporting_period.start),
			// @ts-ignore
			dayjs(cbam.i.a.reporting_period.end),
		])
	}, [cbam.state])

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
			<Flex className="border border-solid border-neutral-400 rounded p-4">
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
