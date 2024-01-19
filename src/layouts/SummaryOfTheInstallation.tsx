import { selectNemesia } from '@/calc'
import { Table, Typography } from 'antd'
import { useSelector } from 'react-redux'

export const SummaryOfTheInstallation = ({
	id,
}: {
	id?: string
}) => {
	const nemesia = useSelector(selectNemesia).a_2

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
				{ dataIndex: 'v' },
			]}
			dataSource={[
				{
					k: 'Name of the installation (English name)',
					v: nemesia.name,
				},
				{
					k: 'Street, Number',
					v: nemesia.name_en,
				},
				{
					k: 'Economic activity',
					v: nemesia.economic,
				},
				{
					k: 'Country',
					v: nemesia.country,
				},
				{
					k: 'UNLOCODE',
					v: nemesia.unlocode,
				},
				{
					k: 'Coordinates of the main emission source (latitude)',
					v: nemesia.latitude,
				},
				{
					k: 'Coordinates of the main emission source (longitude)',
					v: nemesia.longitude,
				},
			]}
		/>
	)
}
