import { Form, Input } from 'antd'

export const I = ({
	label,
	required,
}: {
	label: string
	required?: boolean
}) => (
	<Form.Item
		label={label}
		name={label}
		rules={[{ required }]}
	>
		<Input />
	</Form.Item>
)
