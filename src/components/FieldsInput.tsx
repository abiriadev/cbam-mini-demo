import { Form, Input } from 'antd'

export interface FieldsInputProps {
	label: string
	required?: boolean
	name?: string
}

export const FieldsInput = ({
	label,
	required,
	name,
}: FieldsInputProps) => (
	<Form.Item
		label={label}
		name={name ?? label}
		rules={[{ required }]}
	>
		<Input />
	</Form.Item>
)
