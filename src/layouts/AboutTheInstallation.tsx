import { Flex, Form, Typography, theme } from 'antd'
import { I } from '@/I'

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
				<Typography.Title level={4}>
					About the installation
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form>
					<I label="Name of the installation (optional)" />
					<I
						label="Name of the installation (English name)"
						required
					/>
					<I label="Street, Number" />
					<I label="Economic activity" />
					<I label="Post code" />
					<I label="P.O. Box" />
					<I label="City" />
					<I label="Country" required />
					<I label="UNLOCODE" required />
					<I label="Coordinates of the main emission source (latitude)" />
					<I label="Coordinates of the main emission source (longitude)" />
					<I label="Name of authorized representative" />
					<I label="Email" />
					<I label="Telephone" />
				</Form>
			</Flex>
		</div>
	)
}
