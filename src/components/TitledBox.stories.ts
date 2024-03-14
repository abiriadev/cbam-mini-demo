import type { Meta, StoryObj } from '@storybook/react'
import { TitledBox } from './TitledBox'

const meta = {
	title: 'TitledBox',
	component: TitledBox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof TitledBox>
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		title: 'Title',
		children: 'Content',
	},
}
