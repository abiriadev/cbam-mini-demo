import { Sheet } from '@components/Sheet'
import { Col, Flex, Row, theme } from 'antd'
import { Emissions } from '@layouts/Emissions'
import { Precursors } from '@layouts/Precursors'
import { Processes } from '@layouts/Processes'
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
import { ProcessGroup } from './ProcessGroup'

export const SheetsList = ({ roww }: { roww: number }) => {
	return (
		<Row>
			<Col span={roww}>
				<Flex vertical gap="large">
					<Sheet title="A InstData">
						<ReportingPeriod />
						<AboutTheInstallation />
						<Sheet
							title="Verifier of the report"
							sub
						>
							<Verifier1 />
							<Verifier2 />
							<Verifier3 />
						</Sheet>
						<Sheet
							title="Aggregated goods categories and relevant production processes"
							sub
						>
							<AGC />
							<RelevantProductionProcesses />
						</Sheet>
						{/* <Precursors /> */}
					</Sheet>
					{/* <Sheet title="B EmInst"> */}
					{/* 	<SourceStreams /> */}
					{/* 	<PFC /> */}
					{/* 	<EmissionsSources /> */}
					{/* </Sheet> */}
					{/* <Sheet title="C Emissions & Energy"> */}
					{/* 	<FuelBalance /> */}
					{/* 	<GhgBalanceByType /> */}
					{/* </Sheet> */}
					{/* <Sheet title="Processes"> */}
					{/* 	<Processes /> */}
					{/* </Sheet> */}
					{/* <Sheet title="PurchPrec"> */}
					{/* 	<Precursors /> */}
					{/* </Sheet> */}
					{/* <Sheet title="Tools"> */}
					{/* 	<FuelIntoChp /> */}
					{/* </Sheet> */}
					{/* <Sheet title="Summary Processes"> */}
					{/* 	<Sheet */}
					{/* 		title="Summary of the installation, processes and production routes" */}
					{/* 		sub */}
					{/* 	> */}
					{/* 		<SummaryOfTheInstallation /> */}
					{/* 	</Sheet> */}
					{/* 	<Sheet */}
					{/* 		title="Greenhouse gas emissions balance and specific embedded emissions (SEE)" */}
					{/* 		sub */}
					{/* 	> */}
					{/* 		<GhgEmissions /> */}
					{/* 		<ProcessEmissions /> */}
					{/* 		<PrecursorEmissions /> */}
					{/* 	</Sheet> */}
					{/* 	<Emissions /> */}
					{/* </Sheet> */}
					{/* <Sheet title="Summary Products"> */}
					{/* 	<SummaryProducts /> */}
					{/* </Sheet> */}
					{/* <Sheet title="Summary Communication"> */}
					{/* 	<SummaryCommunication /> */}
					{/* </Sheet> */}
					{/* <Sheet title="a"> */}
					{/* 	<ProcessGroup /> */}
					{/* </Sheet> */}
				</Flex>
			</Col>
		</Row>
	)
}
