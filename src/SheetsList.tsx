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
import { Emissions } from '@layouts/Emissions'
import { Precursors } from '@layouts/Precursors'
import { Processes } from './Processes'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'
import { GhgEmissions } from '@layouts/GhgEmissions'
import { AboutTheInstallation } from '@layouts/AboutTheInstallation'
import { SummaryProducts } from '@layouts/SummaryProducts'
import { AGC } from '@layouts/AGC'
import { ProcessEmissions } from '@layouts/ProcessEmissions'
import { PrecursorEmissions } from '@layouts/PrecursorEmissions'
import { SummaryCommunication } from '@layouts/SummaryCommunication'
import { ReportingPeriod } from '@layouts/ReportingPeriod'
import { Verifier1 } from '@layouts/Verifier1'
import { Verifier2 } from '@layouts/Verifier2'
import { Verifier3 } from '@layouts/Verifier3'
import { RelevantProductionProcesses } from '@layouts/RelevantProductionProcesses'
import { SourceStreams } from '@layouts/SourceStreams'
import { PFC } from '@layouts/PFC'
import { EmissionsSources } from '@layouts/EmissionsSources'
import { FuelBalance } from '@layouts/FuelBalance'
import { GhgBalanceByType } from '@layouts/GhgBalanceByType'
import { FuelIntoChp } from '@layouts/FuelIntoChp'
import { SummaryOfTheInstallation } from '@layouts/SummaryOfTheInstallation'

export const SheetsList = () => {
	const { token } = theme.useToken()

	return (
		<Row>
			<Col span={21}>
				<Flex vertical gap="large">
					<Sheet id="instdata" title="A InstData">
						<ReportingPeriod id="reporting-period" />
						<AboutTheInstallation id="about-the-installation" />
						<Sheet
							id="verifier-of-the-report"
							title="Verifier of the report"
							sub
						>
							<Verifier1 id="verifier1" />
							<Verifier2 id="verifier2" />
							<Verifier3 id="verifier3" />
						</Sheet>
						<Sheet
							id="aggregated-goods-category"
							title="Aggregated goods categories and relevant production processes"
							sub
						>
							<AGC id="list-of-aggregated-goods-categories" />
							<RelevantProductionProcesses id="A-4-b" />
						</Sheet>
						<Precursors id="A-5" />
					</Sheet>
					<Sheet id="B" title="B EmInst">
						<SourceStreams id="B-1" />
						<PFC id="B-2" />
						<EmissionsSources id="B-3" />
					</Sheet>
					<Sheet
						id="C"
						title="C Emissions & Energy"
					>
						<FuelBalance id="C-1" />
						<GhgBalanceByType id="C-2" />
					</Sheet>
					<Sheet id="D" title="Processes">
						<Processes />
					</Sheet>
					<Sheet id="E" title="PurchPrec">
						<Precursors id="A-5" />
					</Sheet>
					<Sheet id="F" title="Tools">
						<FuelIntoChp id="F-1-a" />
					</Sheet>
					<Sheet
						id="S1"
						title="Summary Processes"
					>
						<Sheet
							id="S1-1"
							title="Summary of the installation, processes and production routes"
							sub
						>
							<SummaryOfTheInstallation id="S1-1-1" />
						</Sheet>
						<Sheet
							id="S1-2"
							title="Greenhouse gas emissions balance and specific embedded emissions (SEE)"
							sub
						>
							<GhgEmissions id="S1-2-1-a" />
							<ProcessEmissions id="S1-2-2-a" />
							<PrecursorEmissions id="S1-2-2-b" />
						</Sheet>
						<Emissions id="S1-3" />
					</Sheet>
					<Sheet id="S2" title="Summary Products">
						<SummaryProducts id="summary-products" />
					</Sheet>
					<Sheet
						id="S3"
						title="Summary Communication"
					>
						<SummaryCommunication id="summary-communication" />
					</Sheet>
					<Flex justify="end" className="h-40">
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
				</Flex>
			</Col>
		</Row>
	)
}
