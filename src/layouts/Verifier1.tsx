import { Flex, Form, Typography, theme } from 'antd'
import { I } from '@/I'
import { useSelector } from 'react-redux'
import { selectNemesia } from '@/calc'

export const Verifier1 = ({ id }: { id?: string }) => {
	const { token } = theme.useToken()
	const nemesia = useSelector(selectNemesia).a_3_1

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
					Name and address of the verifier of this
					report
				</Typography.Title>
			</Flex>
			<Flex gap="large">
				<Form>
					<I label="Company Name" name="name" />
					<I
						label="Street, Number"
						name="street"
					/>
					<I label="City" name="city" />
					<I label="Postcode/ZIP" name="zip" />
					<I label="Country" name="country" />
				</Form>
			</Flex>
		</div>
	)
}
