import type { Preview } from '@storybook/react'
import { ConfigProvider } from 'antd'
import { theme } from '../src/theme'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		S => (
			<ConfigProvider theme={theme}>
				<S />
			</ConfigProvider>
		),
	],
}

export default preview
