import { Form, Input } from 'antd'

export const I = ({
	label,
	required,
	name,
}: {
	label: string
	required?: boolean
	name?: string
}) => (
	<Form.Item
		label={label}
		name={name ?? label}
		rules={[{ required }]}
	>
		<Input />
	</Form.Item>
)
