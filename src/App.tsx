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
		<Layout
			style={{
				minHeight: '100vh',
				display: isIframe ? 'none' : 'unset',
			}}
		>
			<Header
				style={{
					backgroundColor: 'inherit',
					height: '10em',
				}}
			>
				<Flex
					align="center"
					style={{
						height: '100%',
					}}
				>
					<img src={aipimLogo} height={'80%'} />
					<Flex
						justify="center"
						align="center"
						style={{
							width: '100%',
							height: '100%',
						}}
					>
						<Typography.Title
							level={1}
							style={{
								color: colorPrimary,
								textAlign: 'center',
							}}
						>
							Aipim CBAM reporter v2
						</Typography.Title>
					</Flex>
				</Flex>
			</Header>
			<Layout>
				<Sider
					style={{
						backgroundColor: 'inherit',
					}}
				>
					<Toc />
				</Sider>
				<Content
					style={{
						backgroundColor: 'inherit',
					}}
				>
					<SheetsList />
				</Content>
			</Layout>
		</Layout>
	)
}

export default App
