import { Flex, Form, Input, theme } from 'antd'
import { useEffect } from 'react'

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
	const [form] = Form.useForm()

	fields.forEach(({ name, value }) => {
		form.setFieldValue(name, value)
	})

	return (
		<div
			id={id}
			style={{
				backgroundColor: token.colorBgContainer,
				borderRadius: token.borderRadius,
				padding: token.padding,
			}}
			className="border border-solid"
		>
			<Flex gap="large">
				<Form layout="vertical" form={form}>
					{fields.map(
						({ label, required, name }) => (
							<Form.Item
								key={name ?? label}
								label={label}
								name={name ?? label}
								rules={[{ required }]}
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
