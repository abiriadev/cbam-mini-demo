import type { Meta, StoryObj } from '@storybook/react'
import { DropdownButton } from './DropdownButton'

const meta = {
	title: 'DropdownButton',
	component: DropdownButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DropdownButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		text: 'button',
	},
}

export const Items: Story = {
	args: {
		text: 'button',
		items: ['apple', 'banana', 'orange'],
	},
}
