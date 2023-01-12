import Image from 'next/image'
import { styled } from '../styles'
import { HomeContainer, Product } from '../styles/pages/home'
import shirt from '../assets/shirts/1.png'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })
  return (
    <HomeContainer ref={sliderRef} className={'keen-slider'}>
      <p>{props.list}</p>
      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    props: {
      list: [1, 2, 3],
    },
  }
}
