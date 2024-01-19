import { Flex, Form, Typography, theme } from 'antd'
import { I } from '@/I'
import { useSelector } from 'react-redux'
import { selectNemesia } from '@/calc'

export const Verifier2 = ({ id }: { id?: string }) => {
	const { token } = theme.useToken()
	const nemesia = useSelector(selectNemesia).a_3_2
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
					Authorised representative of the
					verifier
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form form={form}>
					<I label="Name" name="name" />
					<I label="Email address" name="email" />
					<I
						label="Telephone number"
						name="telephone"
					/>
					<I label="Fax" name="fax" />
				</Form>
			</Flex>
		</div>
	)
}
