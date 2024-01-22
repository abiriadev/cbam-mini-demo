import { ThemeConfig } from 'antd'

// const primary = '#13B48B'
const primary = '#23544D'

const white = '#ffffff'

export const theme: ThemeConfig = {
	token: {
		colorPrimary: primary,
		colorSuccess: primary,
		colorBgContainer: '#DCEEE0',
		colorBgLayout: white,
	},
	components: {
		Button: {
			primaryColor: white,
		},
		Typography: {
			titleMarginBottom: '0',
			// colorTextHeading: primary,
		},
		Layout: {
			headerBg: white,
			siderBg: white,
		},
		Input: {
			colorBgContainer: white,
		},
		DatePicker: {
			colorBgContainer: white,
		},
	},
}
