import type { Meta, StoryObj } from '@storybook/react'
import { FieldsInput } from './FieldsInput'

const meta = {
	title: 'FieldsInput',
	component: FieldsInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FieldsInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		label: 'Label',
	},
}

export const Required: Story = {
	args: {
		label: 'Label',
		required: true,
	},
}
