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
	errorTitle: string
	fetchHref?: () => Promise<string>
}

export const DownloadModal = ({
	excelModalOpen,
	setExcelModalOpen,
	filename,
	title,
	successTitle,
	errorTitle,
	fetchHref,
}: DownloadModalProps) => {
	const [state, setState] = useState<
		'loading' | 'success' | 'error'
	>()
	const [href, setHref] = useState<string | undefined>(
		undefined,
	)

	useEffect(() => {
		if (!excelModalOpen) return

		setState('loading')
		;(async () => {
			try {
				setHref(await fetchHref?.())

				setState('success')
			} catch (e) {
				console.error(e)

				setState('error')
			}
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
			{state == 'loading' ? (
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
			) : state == 'success' ? (
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
			) : (
				<Result
					status="error"
					title={errorTitle}
					subTitle={`cause: failed to fetch data`}
				/>
			)}
		</Modal>
	)
}
