import { LoadingOutlined } from '@ant-design/icons'
import { Button, Flex, Modal, Result, Spin } from 'antd'
import { useEffect, useState } from 'react'

// 'CBAM_communication_for_installation (generated).xlsx'
//"Export results as CBAM Excel report"
//"Successfully generated Excel report!"
export interface DownloadModalProps {
	excelModalOpen: boolean
	setExcelModalOpen: (_: boolean) => void
	filename?: string
	title: string
	successTitle: string
	fetchHref?: () => Promise<string>
}

export const DownloadModal = ({
	excelModalOpen,
	setExcelModalOpen,
	filename,
	title,
	successTitle,
	fetchHref,
}: DownloadModalProps) => {
	const [loading, setLoading] = useState(true)
	const [href, setHref] = useState<string | undefined>(
		undefined,
	)

	useEffect(() => {
		if (!excelModalOpen) return

		setLoading(true)
		;(async () => {
			setHref(await fetchHref?.())

			setLoading(false)
		})()
	}, [excelModalOpen])

	const close = () => setExcelModalOpen(false)

	return (
		<Modal
			centered
			title={title}
			open={excelModalOpen}
			onOk={close}
			onCancel={close}
			footer={() => <></>}
		>
			{loading ? (
				<Flex
					justify="center"
					align="center"
					className="p-28"
				>
					<Spin
						indicator={
							<LoadingOutlined
								style={{
									fontSize: 72,
								}}
								spin
							/>
						}
					/>
				</Flex>
			) : (
				<Result
					status="success"
					title={successTitle}
					subTitle={filename ?? 'filename'}
					extra={[
						<Button
							type="primary"
							key="console"
							className="font-bold"
							onClick={close}
						>
							<a
								href={href}
								download={filename}
							>
								Download file
							</a>
						</Button>,
					]}
				/>
			)}
		</Modal>
	)
}
