import { ThemeConfig } from 'antd'

// const primary = '#13B48B'
const primary = '#185959'

const white = '#ffffff'

export const theme: ThemeConfig = {
	token: {
		colorPrimary: primary,
		colorSuccess: primary,
		// colorBgContainer: '#DCEEE0',
		colorBgLayout: white,
		colorError: '#FF4A43',
	},
	components: {
		Button: {
			primaryColor: white,
			colorBgContainer: white,
		},
		Typography: {
			titleMarginBottom: '0',
			colorTextHeading: primary,
		},
		Layout: {
			headerBg: white,
			siderBg: white,
		},
		Table: {
			headerColor: white,
			headerBg: primary,
			colorBgContainer: white,
			headerBorderRadius: 5,
			// lineWidth: 100,
			// colorBorder: 'black',
			// colorErrorBorderHover
		},
	},
}
