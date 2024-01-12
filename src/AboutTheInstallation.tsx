import { Flex, Form, Input, Typography, theme } from 'antd'

export const AboutTheInstallation = ({
	id,
}: {
	id?: string
}) => {
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
					General information
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form
					labelCol={{
						span: 10,
					}}
				>
					<Form.Item
						label="Name of the installation"
						name="name"
						rules={[{ required: true }]}
					>
						<Input placeholder="name" />
					</Form.Item>
					<Form.Item
						label="Country"
						name="country"
						rules={[{ required: true }]}
					>
						<Input placeholder="ex: Korea" />
					</Form.Item>
					<Form.Item
						label="UNLOCODE"
						name="unlocode"
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
					<Form.Item label="Authorized representative">
						<Input />
					</Form.Item>
				</Form>
				<Form
					labelCol={{
						span: 12,
					}}
				>
					<Form.Item label="Company Name">
						<Input placeholder="ex: Aipim" />
					</Form.Item>
					<Form.Item label="Verifier Name">
						<Input />
					</Form.Item>
					<Form.Item label="Verifier email address">
						<Input />
					</Form.Item>
					<Form.Item label="Accreditation member state">
						<Input />
					</Form.Item>
					<Form.Item label="Registration number">
						<Input />
					</Form.Item>
				</Form>
			</Flex>
		</div>
	)
}
