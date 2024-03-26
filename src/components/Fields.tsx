import { Flex, Form, Input, theme } from 'antd'

export interface FieldsInputProps {
	label: string
	required?: boolean
	name?: string
	value?: string
}

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
					{fields.map(
						({
							label,
							required,
							name,
							value,
						}) => (
							<Form.Item
								label={label}
								name={name ?? label}
								rules={[{ required }]}
								initialValue={value}
							>
								<Input />
							</Form.Item>
						),
					)}
				</Form>
			</Flex>
		</div>
	)
}
