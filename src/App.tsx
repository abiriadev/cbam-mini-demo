import {
	Button,
	Col,
	Flex,
	Form,
	Input,
	Layout,
	Row,
	Space,
	Spin,
	Typography,
	theme,
} from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import aipimLogo from './assets/aipim-logo-green.png'
import { SheetsList } from '@layouts/SheetsList'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import {
	CheckOutlined,
	LoadingOutlined,
	VerticalAlignBottomOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { generate, calculate } from './store/cbam'
import { DownloadModal } from './components/DownloadModal'
import { createExcel } from './excel-api'

function App() {
	const { token } = theme.useToken()

	const {
		environment: { isIframe },
		cbam,
	} = useSelector((st: RootState) => st)
	const [excelModalOpen, setExcelModalOpen] =
		useState(false)
	const dispatch = useDispatch()

	const roww = 24

	return (
		<Layout className="min-h-screen">
			<Header
				className={`h-36 ${isIframe && 'hidden'}`}
			>
				<Flex align="center" className="h-full">
					<img src={aipimLogo} height={'80%'} />
					<Flex
						justify="center"
						align="center"
						className="w-full h-full"
					>
						<Typography.Title
							level={1}
							className="text-center"
							style={{
								color: token.colorPrimary,
							}}
						>
							Aipim CBAM reporter v4
						</Typography.Title>
					</Flex>
				</Flex>
			</Header>
			<Layout>
				<Content>
					{state === 'calculating' && (
						<Row className="mb-2 fixed top-0 left-0 w-screen h-screen z-10 backdrop-brightness-90">
							<Col span={roww}>
								<Flex
									justify="center"
									align="center"
									className="h-full"
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
										size="large"
									/>
								</Flex>
							</Col>
						</Row>
					)}
					<Row className="mb-2">
						<Col span={roww}>
							<Flex justify="end">
								<Form size="large">
									<Form.Item
										label={
											<p className="text-xl font-medium">
												PCF id
											</p>
										}
									>
										<Space.Compact>
											<Input
												placeholder=""
												className="w-80"
												style={{
													borderColor:
														token.colorPrimary,
												}}
											/>
											<Button
												type="primary"
												className="font-bold"
												icon={
													<CheckOutlined />
												}
												onClick={() => (
													dispatch(
														calculate(),
													),
													setTimeout(
														() =>
															dispatch(
																generate(),
															),
														1200,
													)
												)}
											>
												Generate
												report
											</Button>
										</Space.Compact>
									</Form.Item>
								</Form>
							</Flex>
						</Col>
					</Row>
					<SheetsList roww={roww} />
					<Row>
						<Col span={roww} className="mt-8">
							<Flex
								justify="end"
								className="h-40"
							>
								<Button
									type="primary"
									size="large"
									icon={
										<VerticalAlignBottomOutlined />
									}
									onClick={() =>
										setExcelModalOpen(
											true,
										)
									}
								>
									<Typography.Text
										strong
										style={{
											color: token
												.Button
												?.primaryColor,
										}}
									>
										Export as Excel
										report
									</Typography.Text>
								</Button>
								<DownloadModal
									excelModalOpen={
										excelModalOpen
									}
									setExcelModalOpen={
										setExcelModalOpen
									}
									title="Export results as CBAM Excel report"
									filename="CBAM_communication_for_installation (generated).xlsx"
									successTitle="Successfully generated Excel report!"
									errorTitle="Failed to generate Excel report"
									fetchHref={() => {
										if (
											cbam.state ===
											'generated'
										) {
											return createExcel(
												cbam.i,
											)
										} else {
											return Promise.reject()
										}
									}}
								/>
							</Flex>
						</Col>
					</Row>
				</Content>
			</Layout>
		</Layout>
	)
}

export default App
