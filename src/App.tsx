import { Flex, Layout, Typography, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import aipimLogo from './assets/aipim-logo-green.png'
import { SheetsList } from './SheetsList'
import { Toc } from './assets/Toc'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {
	const {
		token: { colorPrimary },
	} = theme.useToken()
	useSelector

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
								color: colorPrimary,
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
					<SheetsList />
				</Content>
			</Layout>
		</Layout>
	)
}

export default App
