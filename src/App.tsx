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
	message,
	theme,
} from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import aipimLogo from './assets/aipim-logo-green.png'
import { SheetsList } from '@layouts/SheetsList'
import { Toc } from './assets/Toc'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import {
	CheckOutlined,
	LoadingOutlined,
	VerticalAlignBottomOutlined,
} from '@ant-design/icons'
import { useState } from 'react'

function App() {
	const { token } = theme.useToken()

	const { isIframe } = useSelector(
		(st: RootState) => st.environment,
	)
	const [excelModalOpen, setExcelModalOpen] =
		useState(false)

	return (
		<Layout className="min-h-screen">
			<Header
				className={`h-36 bg-inherit ${
					isIframe && 'hidden'
				}`}
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
				<Sider className="!bg-inherit">
					<Toc />
				</Sider>
				<Content className="bg-inherit">
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
											/>
											<Button
												type="primary"
												className="font-bold"
												icon={
													<CheckOutlined />
												}
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
								<Modal
									title="Export results as CBAM Excel report"
									open={excelModalOpen}
									onOk={() =>
										setExcelModalOpen(
											false,
										)
									}
									onCancel={() =>
										setExcelModalOpen(
											false,
										)
									}
								></Modal>
							</Flex>
						</Col>
					</Row>
				</Content>
			</Layout>
		</Layout>
	)
}

export default App

const M = () => {
	const [loading, setLoading] = useState(true)

	return loading ? (
		<Spin
			indicator={
				<LoadingOutlined
					style={{
						fontSize: 100,
					}}
					spin
				/>
			}
		/>
	) : (
		<Result
			status="success"
			title="Successfully Purchased Cloud Server ECS!"
			subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
			extra={[
				<Button type="primary" key="console">
					Go Console
				</Button>,
				<Button key="buy">Buy Again</Button>,
			]}
		/>
	)
}
