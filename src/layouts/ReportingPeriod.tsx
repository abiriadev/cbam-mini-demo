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
import { RootState } from '@/store'

export const ReportingPeriod = ({
	id,
}: {
	id?: string
}) => {
	const { token } = theme.useToken()
	const nemesia = useSelector(selectNemesia).a_1
	const { state } = useSelector(
		({ environment }: RootState) => environment,
	)

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
							{...(state === 'generated'
								? {
										defaultValue: [
											dayjs(
												nemesia.start,
											),
											dayjs(
												nemesia.end,
											),
										],
								  }
								: {})}
						/>
					</Form.Item>
				</Form>
			</Flex>
		</div>
	)
}
