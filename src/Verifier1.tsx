import { Flex, Form, Typography, theme } from 'antd'
import { I } from './I'

export const Verifier1 = ({ id }: { id?: string }) => {
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
					Name and address of the verifier of this
					report
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form
					labelCol={{
						span: 10,
					}}
				>
					<I label="Company Name" />
					<I label="Street, Number" />
					<I label="City" />
					<I label="Postcode/ZIP" />
					<I label="Country" />
				</Form>
			</Flex>
		</div>
	)
}
