import type { Meta, StoryObj } from '@storybook/react'
import { DownloadModal } from './DownloadModal'

const meta = {
	title: 'DownloadModal',
	component: DownloadModal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DownloadModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		excelModalOpen: true,
		setExcelModalOpen: _ => {},
		title: 'Title',
		successTitle: 'Success title',
	},
}

export const Loading: Story = {
	args: {
		excelModalOpen: true,
		setExcelModalOpen: _ => {},
		title: 'Title',
		successTitle: 'Success title',
		fetchHref: () => new Promise(_ => {}),
	},
}

export const FileName: Story = {
	args: {
		excelModalOpen: true,
		setExcelModalOpen: _ => {},
		title: 'Title',
		successTitle: 'Success title',
		filename: 'example.txt',
	},
}

export const Href: Story = {
	args: {
		excelModalOpen: true,
		setExcelModalOpen: _ => {},
		title: 'Title',
		successTitle: 'Success title',
		filename: 'example.txt',
		fetchHref: async () =>
			URL.createObjectURL(
				new Blob(['lorem ipsum'], {
					type: 'text/plain',
				}),
			),
	},
}
