import { ThemeConfig } from 'antd'

// const primary = '#13B48B'
const primary = '#23544D'

export const theme: ThemeConfig = {
	token: {
		colorPrimary: primary,
		colorSuccess: primary,
	},
	components: {
		Button: {
			primaryColor: '#fff',
		},

		Typography: {
			titleMarginBottom: '0',
			// colorTextHeading: primary,
		},
	},
}
