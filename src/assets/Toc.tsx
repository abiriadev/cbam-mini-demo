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
						{
							title: 'Aggregated goods categories and relevant production processes',
							href: '#aggregated-goods-category',
							children: [
								{
									title: 'List of aggregated goods categories, relevant precursors and corresponding production routes',
									href: '#list-of-aggregated-goods-categories',
								},
								{
									title: 'Relevant production processes',
									href: '#A-4-b',
								},
							],
						},
						{
							title: 'Purchased precursors',
							href: '#A-5',
						},
					],
				},
				{
					title: 'B EmInst',
					href: '#B',
					children: [
						{
							title: 'Source Streams',
							href: '#B-1',
						},
						{
							title: 'PFC Emissions',
							href: '#B-2',
						},
						{
							title: 'Emissions Sources',
							href: '#B-3',
						},
					],
				},
				{
					title: 'C Emissions & Energy',
					href: '#C',
					children: [
						{
							title: 'Fuel Balance',
							href: '#C-1',
						},
						{
							title: 'Greenhouse gas emissions balance & information on data quality',
							href: '#C-2',
						},
					],
				},
				{
					title: 'D Processes',
					href: '#D',
				},
				{
					title: 'E PurchPrec',
					href: '#E',
				},
				{
					title: 'F Tools',
					href: '#F',
					children: [
						{
							title: 'Cogeneration Tool',
							href: '#F-1',
							children: [
								{
									title: 'Total amount of fuel input into CHP units',
									href: '#F-1-a',
								},
							],
						},
						{
							title: 'Tool to calculate the carbon price due',
							href: '#F-2',
						},
					],
				},
				{
					title: 'Summary Processes',
					href: '#S1',
					children: [
						{
							title: 'Summary of the installation, processes and production routes',
							href: '#S1-1',
						},
						{
							title: 'Greenhouse gas emissions balance and specific embedded emissions (SEE)',
							href: '#S2-2',
						},
						{
							title: 'Detailed overview of each production processes',
							href: '#S3-3',
						},
					],
				},
				{
					title: 'Summary Products',
					href: '#S2',
				},
				{
					title: 'Summary Communication',
					href: '#S3',
					children: [
						{
							title: 'Summary of the installation and production processes',
							href: '#S3-1',
						},
						{
							title: 'Summary of products',
							href: '#S3-2',
						},
					],
				},
			].map(setKey)}
		/>
	)
}
