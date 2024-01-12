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
				},
			].map(setKey)}
		/>
	)
}
