import createClient from 'openapi-fetch'
import type { paths, components } from './api'

export type CbamInput = components['schemas']['cbam']

const client = createClient<paths>({
	baseUrl:
		import.meta.env.VITE_EXCEL_API_ENDPOINT +
		'/cbam/download',
})

export const createExcel = async (
	input: CbamInput,
): Promise<string> => {
	const { error, data } = await client.POST('/', {
		body: input,
		parseAs: 'blob',
	})

	if (error) throw error

	return URL.createObjectURL(data)
}
