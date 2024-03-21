import type { Meta, StoryObj } from '@storybook/react'
import { TitledTable } from './TitledTable'
import { PlusButton } from './PlusButton'

const meta = {
	title: 'TitledTable',
	component: TitledTable,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		titleText: 'Table title',
		columns: [
			{
				title: 'Column A',
				dataIndex: 'a',
			},
			{
				title: 'Column B',
				dataIndex: 'b',
			},
			{
				title: 'Column C',
				dataIndex: 'c',
			},
		],
		dataSource: [
			{
				a: 1,
				b: 2,
				c: 3,
			},
			{
				a: 4,
				b: 5,
				c: 6,
			},
		],
	},
} satisfies Meta<typeof TitledTable>
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Button: Story = {
	args: {
		button: <PlusButton>Button</PlusButton>,
	},
}
