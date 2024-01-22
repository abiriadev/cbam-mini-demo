import {
	Button,
	Col,
	Flex,
	Form,
	Input,
	Layout,
	Modal,
	Result,
	Row,
	Space,
	Spin,
	Typography,
	theme,
} from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import aipimLogo from './assets/aipim-logo-green.png'
import { SheetsList } from '@layouts/SheetsList'
import { Toc } from './assets/Toc'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import {
	CheckOutlined,
	LoadingOutlined,
	VerticalAlignBottomOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { calculate, generate } from './store/environment'

function App() {
	const { token } = theme.useToken()

	const {
		environment: { isIframe, state },
	} = useSelector((st: RootState) => st)
	const [excelModalOpen, setExcelModalOpen] =
		useState(false)
	const dispatch = useDispatch()

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
							Aipim CBAM reporter v2
						</Typography.Title>
					</Flex>
				</Flex>
			</Header>
			<Layout>
				<Sider>
					<Toc />
				</Sider>
				<Content>
					{state === 'calculating' && (
						<Row className="mb-2 fixed top-0 left-0 w-screen h-screen z-10 backdrop-brightness-90">
							<Col span={21}>
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
						<Col span={21}>
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
					<SheetsList />
					<Row>
						<Col span={21} className="mt-8">
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
								<M
									excelModalOpen={
										excelModalOpen
									}
									setExcelModalOpen={
										setExcelModalOpen
									}
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

const M = ({
	excelModalOpen,
	setExcelModalOpen,
}: {
	excelModalOpen: boolean
	setExcelModalOpen: (_: boolean) => void
}) => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!excelModalOpen) return

		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [excelModalOpen])

	return (
		<Modal
			centered
			title="Export results as CBAM Excel report"
			open={excelModalOpen}
			onOk={() => setExcelModalOpen(false)}
			onCancel={() => setExcelModalOpen(false)}
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
					title="Successfully generated Excel report!"
					subTitle="CBAM_communication_for_installation_1705539693.xlsx"
					extra={[
						<Button
							type="primary"
							key="console"
							className="font-bold"
							onClick={() =>
								setExcelModalOpen(false)
							}
						>
							Download file
						</Button>,
					]}
				/>
			)}
		</Modal>
	)
}
