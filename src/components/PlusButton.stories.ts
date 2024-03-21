import type { Meta, StoryObj } from '@storybook/react'
import { PlusButton } from './PlusButton'

const meta = {
	title: 'PlusButton',
	component: PlusButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PlusButton>
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Button',
	},
}
