import axios from 'axios'
import Stripe from 'stripe'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'

import {
	ImageContainer,
	ProductContainer,
	ProductDetails,
} from '../../styles/pages/product'
import { useState } from 'react'
import Head from 'next/head'

interface ProductProps {
	product: {
		id: string
		name: string
		imageUrl: string
		price: string
		description: string
		defaultPriceId: string
	}
}

export default function Product({ product }: ProductProps) {
	// desativar o botão se ele já foi clicado
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
		useState(false)

	async function handleBuyProduct() {
		try {
			setIsCreatingCheckoutSession(true)
			const response = await axios.post('/api/checkout', {
				priceId: product.defaultPriceId,
			})

			const { checkoutUrl } = response.data

			// redirecionar usuário para uma rota externa
			window.location.href = checkoutUrl

			// se fosse para redirecionar para uma rota interna
			// const router = useRouter()
			// router.push('/checkout)
		} catch (err) {
			alert('Falha ao redirecionar ao checkout')
			setIsCreatingCheckoutSession(false)
		}
	}

	return (
		<>
			<Head>
				<title>{product.name} | Produto</title>
			</Head>

			<ProductContainer>
				<ImageContainer>
					<Image src={product.imageUrl} width={520} height={480} alt="" />
				</ImageContainer>

				<ProductDetails>
					<h1>{product.name}</h1>
					<span>{product.price}</span>

					<p>{product.description}</p>

					<button
						onClick={handleBuyProduct}
						disabled={isCreatingCheckoutSession}
					>
						Comprar agora
					</button>
				</ProductDetails>
			</ProductContainer>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: { id: 'prod_NBDR9vzPpX6jso' },
			},
		],
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const productId = String(params!.id)

	const product = await stripe.products.retrieve(productId, {
		expand: ['default_price'],
	})

	const price = product.default_price as Stripe.Price

	return {
		props: {
			product: {
				id: product.id,
				name: product.name,
				imageUrl: product.images[0],
				price: new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}).format(price.unit_amount! / 100),
				description: product.description,
				defaultPriceId: price.id,
			},
		},
		revalidate: 60 * 60 * 1, // 1 hour to render again
	}
}
