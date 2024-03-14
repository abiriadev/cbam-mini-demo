import { Flex, Form, theme } from 'antd'
import {
	FieldsInput,
	FieldsInputProps,
} from './FieldsInput'

export interface FieldsProps {
	id?: string
	fields: Array<FieldsInputProps>
}

export const Fields = ({ id, fields }: FieldsProps) => {
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
			<Flex gap="large">
				<Form layout="vertical">
					{fields.map(p => (
						<FieldsInput {...p} />
					))}
				</Form>
			</Flex>
		</div>
	)
}
