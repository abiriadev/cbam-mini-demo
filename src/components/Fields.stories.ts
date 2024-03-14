import type { Meta, StoryObj } from '@storybook/react'
import { Fields } from './Fields'

const meta = {
	title: 'Fields',
	component: Fields,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Fields>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		fields: [
			{ label: 'Label 1' },
			{ label: 'Label 2' },
			{ label: 'Label 3' },
		],
	},
}
