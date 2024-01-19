import { Flex, Form, Typography, theme } from 'antd'
import { I } from '@/I'
import { useSelector } from 'react-redux'
import { selectNemesia } from '@/calc'

export const AboutTheInstallation = ({
	id,
}: {
	id?: string
}) => {
	const { token } = theme.useToken()
	const nemesia = useSelector(selectNemesia).a_2

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
					<I
						label="Name of the installation (optional)"
						name="name"
					/>
					<I
						label="Name of the installation (English name)"
						name="name_en"
						required
					/>
					<I
						label="Street, Number"
						name="street"
					/>
					<I
						label="Economic activity"
						name="economic"
					/>
					<I label="Post code" name="zip" />
					<I label="P.O. Box" name="po" />
					<I label="City" name="city" />
					<I
						label="Country"
						name="country"
						required
					/>
					<I
						label="UNLOCODE"
						name="unlocode"
						required
					/>
					<I
						label="Coordinates of the main emission source (latitude)"
						name="latitude"
					/>
					<I
						label="Coordinates of the main emission source (longitude)"
						name="longitude"
					/>
					<I
						label="Name of authorized representative"
						name="representative"
					/>
					<I label="Email" name="email" />
					<I label="Telephone" name="telephone" />
				</Form>
			</Flex>
		</div>
	)
}
