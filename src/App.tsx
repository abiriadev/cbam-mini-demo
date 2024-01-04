import {
	Anchor,
	Button,
	Col,
	Flex,
	Layout,
	Row,
	Typography,
	message,
	theme,
} from 'antd'
import { Emissions } from './Emissions'
import { Precursors } from './Precursors'
import { Processes } from './Processes'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import aipimLogo from './assets/aipim-logo-green.png'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'
import { GhgEmissions } from './GhgEmissions'
import { InstData } from './InstData'
import { EmInst } from './EmInst'
import { SummaryProducts } from './SummaryProducts'
import { AGC } from './AGC'

function App() {
	const {
		token: { colorPrimary },
		token,
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
								title: 'Emissions',
								href: '#emissions',
							},
							{
								title: 'Summary products',
								href: '#summary-products',
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
					<Flex vertical gap="large">
						<Row>
							<Col span={21}>
								<InstData id="instdata" />
							</Col>
						</Row>
						<Row>
							<Col span={21}>
								<AGC id="agc" />
							</Col>
						</Row>
						<Row>
							<Col span={21}>
								<EmInst id="eminst" />
							</Col>
						</Row>
						<Row>
							<Col span={21}>
								<Processes />
							</Col>
						</Row>
						<Row>
							<Col span={21}>
								<Precursors />
							</Col>
						</Row>
						<Row>
							<Col span={21}>
								<GhgEmissions id="ghg" />
							</Col>
						</Row>
						<Row>
							<Col span={21}>
								<Emissions />
							</Col>
						</Row>
						<Row>
							<Col span={21}>
								<SummaryProducts id="summary-products" />
							</Col>
						</Row>
						<Row>
							<Col span={21}>
								<Flex
									justify="end"
									style={{
										// margin
										height: 150,
									}}
								>
									<Button
										type="primary"
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
					</Flex>
				</Content>
			</Layout>
		</Layout>
	)
}

export default App
