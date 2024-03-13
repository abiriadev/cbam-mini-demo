import type { Meta, StoryObj } from '@storybook/react'
import { DeleteButton } from './DeleteButton'

const meta = {
	title: 'DeleteButton',
	component: DeleteButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DeleteButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
}

export const CustomTooltip: Story = {
	args: {
		title: 'Tooltip title',
		description: 'Tooltip description',
	},
}
