import type { Meta, StoryObj } from '@storybook/react'
import { DeleteButton } from './DeleteButton'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
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
