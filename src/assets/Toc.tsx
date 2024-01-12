import { Anchor } from 'antd'

export const Toc = () => {
	return (
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
	)
}
