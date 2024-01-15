import { Table } from 'antd'

export interface TitledTableProps {
	id: string
}

export const TitledTable = ({ id }: TitledTableProps) => {
	return <Table id={id} />
}
