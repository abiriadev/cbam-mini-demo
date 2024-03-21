import {
	Flex,
	Table,
	Typography,
	theme,
	TableProps,
} from 'antd'
import { ReactElement } from 'react'
import { PlusButton } from './PlusButton'

export interface TitledTableProps extends TableProps<any> {
	id?: string
	titleText: string
	button?:
		| ReactElement
		| {
				callback?: () => void
				text: string
				icon?: ReactElement
		  }
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
				{button &&
					('text' in button ? (
						<PlusButton
							onClick={button.callback}
						>
							{button.text}
						</PlusButton>
					) : (
						button
					))}
			</Flex>
			<Table {...rest} id={id} pagination={false} />
		</div>
	)
}
