import { Flex, Form, Typography, theme } from 'antd'
import { I } from './I'

export const Verifier2 = ({ id }: { id?: string }) => {
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
				<Typography.Title
					level={4}
					style={{
						marginTop: 0,
						marginBottom: 0,
					}}
				>
					Authorised representative of the
					verifier
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form
					labelCol={{
						span: 10,
					}}
				>
					<I label="Name" />
					<I label="Email address" />
					<I label="Telephone number" />
					<I label="Fax" />
				</Form>
			</Flex>
		</div>
	)
}
