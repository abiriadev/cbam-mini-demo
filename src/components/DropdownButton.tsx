import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Typography } from 'antd'

export interface DropdownButtonProps {
	items?: Array<string>
	text: string
}

export const DropdownButton = ({
	items,
	text,
}: DropdownButtonProps) => (
	<Dropdown
		trigger={['click']}
		menu={{
			items: (items ?? []).map(k => ({
				key: k,
				label: k,
			})),
		}}
	>
		<Button type="default" icon={<DownOutlined />}>
			<b>{text}</b>
		</Button>
	</Dropdown>
)
