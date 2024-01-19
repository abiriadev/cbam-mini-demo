import {
	Button,
	Col,
	Flex,
	Form,
	Input,
	Layout,
	Row,
	Space,
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
	VerticalAlignBottomOutlined,
} from '@ant-design/icons'

function App() {
	const { token } = theme.useToken()

	const { isIframe } = useSelector(
		(st: RootState) => st.environment,
	)

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
										message.error(
											'Not implemented yet',
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
							</Flex>
						</Col>
					</Row>
				</Content>
			</Layout>
		</Layout>
	)
}

export default App
