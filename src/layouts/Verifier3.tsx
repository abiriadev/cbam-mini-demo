import { Flex, Form, Typography, theme } from 'antd'
import { I } from '@/I'
import { useSelector } from 'react-redux'
import { selectNemesia } from '@/calc'

export const Verifier3 = ({ id }: { id?: string }) => {
	const { token } = theme.useToken()
	const nemesia = useSelector(selectNemesia).a_3_3
	const [form] = Form.useForm()

	form.setFieldsValue(nemesia)

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
					Information about the verifier's
					accreditation
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form form={form}>
					<I
						label="Accreditation Member State"
						name="state"
					/>
					<I
						label="Name of the national accreditation body"
						name="accreditation"
					/>
					<I
						label="Registration number issued by the Accreditation body"
						name="reg"
					/>
				</Form>
			</Flex>
		</div>
	)
}
