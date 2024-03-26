import { Flex, Table, Typography, TableProps } from 'antd'
import { ReactElement } from 'react'

export interface TitledTableProps extends TableProps<any> {
	id?: string
	titleText: string
	button?: ReactElement
}

export const TitledTable = (props: TitledTableProps) => {
	const { id, titleText, button, ...rest } = props

	return (
		<div>
			<Flex
				justify="space-between"
				align="center"
				className="p-3"
			>
				<Typography.Title level={4}>
					{titleText}
				</Typography.Title>
				{button}
			</Flex>
			<Table
				{...rest}
				id={id}
				pagination={false}
				className="border-solid border border-neutral-400 rounded"
			/>
		</div>
	)
}
