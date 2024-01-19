import { Flex, Form, Typography, theme } from 'antd'
import { I } from '@/I'

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
				<Typography.Title level={4}>
					Authorised representative of the
					verifier
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form>
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
