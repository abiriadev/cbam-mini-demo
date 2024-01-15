import { Table, Typography } from 'antd'

export const SummaryOfTheInstallation = ({
	id,
}: {
	id?: string
}) => {
	return (
		<Table
			id={id}
			pagination={false}
			title={() => (
				<Typography.Title level={4}>
					Summary of the installation
				</Typography.Title>
			)}
			columns={[
				{ dataIndex: 'k' },
				{
					render: () => 'value',
				},
			]}
			dataSource={[
				{
					k: 'Name of the installation (English name)',
				},
				{
					k: 'Street, Number',
				},
				{
					k: 'Economic activity',
				},
				{
					k: 'Country',
				},
				{
					k: 'UNLOCODE',
				},
				{
					k: 'Coordinates of the main emission source (latitude)',
				},
				{
					k: 'Coordinates of the main emission source (longitude)',
				},
			]}
		/>
	)
}
