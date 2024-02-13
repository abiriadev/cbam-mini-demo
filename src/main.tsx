import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { ConfigProvider, ThemeConfig } from 'antd'
import { theme } from './theme'

ReactDOM.createRoot(
	document.getElementById('root')!,
).render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider
				// componentSize="small"
				theme={theme}
			>
				<App />
			</ConfigProvider>
		</Provider>
	</React.StrictMode>,
)
