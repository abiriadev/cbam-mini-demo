import { Sheet } from './Sheet'
import {
	Button,
	Col,
	Flex,
	Row,
	Typography,
	message,
	theme,
} from 'antd'
import { Emissions } from './Emissions'
import { Precursors } from './Precursors'
import { Processes } from './Processes'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'
import { GhgEmissions } from './GhgEmissions'
import { AboutTheInstallation } from './AboutTheInstallation'
import { EmInst } from './EmInst'
import { SummaryProducts } from './SummaryProducts'
import { AGC } from './AGC'
import { ProcessEmissions } from './ProcessEmissions'
import { PrecursorEmissions } from './PrecursorEmissions'
import { SummaryCommunication } from './SummaryCommunication'
import { ReportingPeriod } from './ReportingPeriod'
import { Verifier1 } from './Verifier1'
import { Verifier2 } from './Verifier2'
import { Verifier3 } from './Verifier3'

export const SheetsList = () => {
	const { token } = theme.useToken()

	return (
		<Flex vertical gap="large">
			<Row>
				<Col span={21}>
					<Sheet id="instdata" title="A_InstData">
						<ReportingPeriod id="reporting-period" />
						<AboutTheInstallation id="instdata" />
						<Sheet
							id="verifier-of-the-report"
							title="Verifier of the report"
							sub
						>
							<Verifier1 />
							<Verifier2 />
							<Verifier3 />
						</Sheet>
					</Sheet>
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
					<ProcessEmissions id="process-emissions" />
				</Col>
			</Row>
			<Row>
				<Col span={21}>
					<PrecursorEmissions id="precursor-emissions" />
				</Col>
			</Row>
			<Row>
				<Col span={21}>
					<Emissions />
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
					<SummaryCommunication id="summary-communication" />
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
									color: token.Button
										?.primaryColor,
								}}
							>
								Export as Excel report
							</Typography.Text>
						</Button>
					</Flex>
				</Col>
			</Row>
		</Flex>
	)
}
