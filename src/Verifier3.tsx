import { Flex, Form, Typography, theme } from 'antd'
import { I } from './I'

export const Verifier3 = ({ id }: { id?: string }) => {
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
					Information about the verifier's
					accreditation
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form>
					<I label="Accreditation Member State" />
					<I label="Name of the national accreditation body" />
					<I label="Registration number issued by the Accreditation body" />
				</Form>
			</Flex>
		</div>
	)
}
