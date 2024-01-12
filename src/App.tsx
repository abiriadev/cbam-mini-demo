import {
	Anchor,
	Flex,
	Layout,
	Typography,
	theme,
} from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import aipimLogo from './assets/aipim-logo-green.png'
import { SheetsList } from './SheetsList'

function App() {
	const {
		token: { colorPrimary },
	} = theme.useToken()

	return (
		<Layout
			style={{
				minHeight: '100vh',
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
					<Anchor
						items={[
							{
								title: 'General information',
								href: '#instdata',
							},
							{
								title: 'Aggregated goods categories',
								href: '#agc',
							},
							{
								title: 'Installation emission',
								href: '#eminst',
							},
							{
								title: 'Processes',
								href: '#processes',
							},
							{
								title: 'Precursors',
								href: '#precursors',
							},
							{
								title: 'GHG emissions balance',
								href: '#ghg',
							},
							{
								title: 'Process emissions',
								href: '#process-emissions',
							},
							{
								title: 'Precursor emissions',
								href: '#precursor-emissions',
							},
							{
								title: 'Emissions',
								href: '#emissions',
							},
							{
								title: 'Summary products',
								href: '#summary-products',
							},
							{
								title: 'Summary communication',
								href: '#summary-communication',
							},
						].map((v, k) => ({
							...v,
							key: `${k}`,
						}))}
					/>
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
