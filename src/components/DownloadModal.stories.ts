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

// 'CBAM_communication_for_installation (generated).xlsx'
//"Export results as CBAM Excel report"
//"Successfully generated Excel report!"
// export interface DownloadModalProps {
// 	excelModalOpen: boolean
// 	setExcelModalOpen: (_: boolean) => void
// 	filename?: string
// 	title: string
// 	href?: string
// 	successTitle: string
// }

export const Primary: Story = {
	args: {
		excelModalOpen: true,
		setExcelModalOpen: _ => {},
		title: 'Title',
		successTitle: 'Success title',
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
		href: URL.createObjectURL(
			new Blob(['lorem ipsum'], {
				type: 'text/plain',
			}),
		),
	},
}
