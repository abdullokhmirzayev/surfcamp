import { fetchAPI } from '@/utils/fetch-api'
import { getStrapiUrl } from '@/utils/get-strapi-url'

export async function getHomePage() {
	const path = '/api/home-page'
	const BASE_URl = getStrapiUrl()
	const url = new URL(path, BASE_URl)

	return await fetchAPI(url.href, { method: 'GET' })
}
