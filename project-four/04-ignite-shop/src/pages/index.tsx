import Image from 'next/image'
import { styled } from '../styles'
import { HomeContainer, Product } from '../styles/pages/home'
import shirt from '../assets/shirts/1.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
