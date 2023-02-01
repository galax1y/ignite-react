/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// pageExtensions é uma configuração não muito utilizada, mas que serve para apontar para o Next
	// algum sufixo que o arquivo tem que conter no nome para que seja considerado uma rota de página.
	pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
	// ex.: 'products.page.tsx', 'googlecalendar.api.ts'
}

module.exports = nextConfig
