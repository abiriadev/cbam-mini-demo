import { Anchor, AnchorLinkProps } from 'antd'

type sibal = {
	title: string
	href: string
	children?: Array<sibal>
}

type sibal2 = {
	key: string
	title: string
	href: string
	children: Array<sibal2>
}

const setKey = (a: sibal): sibal2 => ({
	...a,
	key: a.href,
	children: a.children?.map(setKey) ?? [],
})

export const Toc = () => {
	return (
		<Anchor
			items={[
				{
					title: 'A_InstData',
					href: '#instdata',
					children: [
						{
							title: 'Reporting Period',
							href: '#reporting-period',
						},
						{
							title: 'About the installation',
							href: '#about-the-installation',
						},
						{
							title: 'Verifier of the report',
							href: '#verifier-of-the-report',
							children: [
								{
									title: 'Name and address of the verifier of this report',
									href: '#verifier1',
								},
								{
									title: 'Authorised representative of the verifier',
									href: '#verifier2',
								},
								{
									title: "Information about the verifier's accreditation",
									href: '#verifier3',
								},
							],
						},
					],
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
			].map(setKey)}
		/>
	)
}
