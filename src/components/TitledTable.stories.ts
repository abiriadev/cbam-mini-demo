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
				d: 4,
				e: 5,
				f: 6,
			},
		],
	},
}

export const Button: Story = {
	args: {
		titleText: 'Table title',
		button: {
			callback() {},
			text: 'Button',
		},
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
				d: 4,
				e: 5,
				f: 6,
			},
		],
	},
}
