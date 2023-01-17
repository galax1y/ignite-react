import { HomeContainer, Product } from '../styles/pages/home'

import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import Head from 'next/head'

interface HomeProps {
	products: {
		id: string
		name: string
		imageUrl: string
		price: string
	}[]
}

export default function Home({ products }: HomeProps) {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 2,
			spacing: 48,
		},
	})

	return (
		<>
			<Head>
				<title>Ignite Shop | Home</title>
			</Head>
			<HomeContainer ref={sliderRef} className={'keen-slider'}>
				{products.map((product) => {
					return (
						<Link
							key={product.id}
							href={`/product/${product.id}`}
							prefetch={false}
						>
							<Product className="keen-slider__slide">
								<Image src={product.imageUrl} width={520} height={480} alt="" />

								<footer>
									<strong>{product.name}</strong>
									<span>{product.price}</span>
								</footer>
							</Product>
						</Link>
					)
				})}
			</HomeContainer>
		</>
	)
}

// If you export a function called getServerSideProps (Server-Side Rendering) from a page,
// Next.js will pre-render this page on each request using the data returned by getServerSideProps.

// SSR
// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await stripe.products.list({
//     expand: ['data.default_price'],
//   })

//   const products = response.data.map((product) => {
//     const price = product.default_price as Stripe.Price

//     return {
//       id: product.id,
//       name: product.name,
//       imageUrl: product.images[0],
//       price: price.unit_amount / 100,
//     }
//   })

//   return {
//     props: {
//       products,
//     },
//   }
// }

// SSG
export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ['data.default_price'],
	})

	const products = response.data.map((product) => {
		const price = product.default_price as Stripe.Price

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			}).format(price.unit_amount! / 100),
		}
	})

	return {
		props: {
			products,
		},
		revalidate: 60 * 60 * 23, // 23 hours
	}
}
