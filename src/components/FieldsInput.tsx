import { Form, Input } from 'antd'

export interface FieldsInputProps {
	label: string
	required?: boolean
	name?: string
	value?: string
}

export const FieldsInput = ({
	label,
	required,
	name,
	value,
}: FieldsInputProps) => (
	<Form.Item
		label={label}
		name={name ?? label}
		rules={[{ required }]}
	>
		<Input value={value} />
	</Form.Item>
)
