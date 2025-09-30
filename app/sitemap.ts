import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = ['', '/education', '/medical-records', '/traditional-medicine', '/telemedicine', '/create']
	const lastModified = new Date()

	return routes.map((path) => ({
		url: `${baseUrl}${path || '/'}`,
		lastModified,
		changeFrequency: 'weekly',
		priority: path === '' ? 1 : 0.7,
	}))
}
