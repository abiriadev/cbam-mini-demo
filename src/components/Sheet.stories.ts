import type { Meta, StoryObj } from '@storybook/react'
import { Sheet } from './Sheet'

const meta = {
	title: 'Sheet',
	component: Sheet,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Sheet>
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		id: 'sheet-id',
		title: 'Sheet title',
		children: 'Sheet content',
	},
}
