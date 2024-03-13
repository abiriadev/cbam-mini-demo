import type { Meta, StoryObj } from '@storybook/react'
import { TitledTable } from './TitledTable'

const meta = {
	title: 'TitledTable',
	component: TitledTable,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof TitledTable>
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
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
		],
		dataSource: [
			{
				a: 1,
				b: 2,
			},
			{
				a: 3,
				b: 4,
			},
		],
	},
}
