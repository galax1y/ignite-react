# Next.js

É uma tecnologia usada em conjunto com o **React**

Cria mais uma camada entre o front-end e o backend

Criar o projeto com o **Next** `npx create-next-app@latest`

## File-system routing

Roteamento baseado em arquivos

Arquivos criados dentro da pasta **`pages`** serão rotas

Então `index.tsx` é um arquivo padrão para a rota `'localhost:3000/'`

Para uma página de produto, basta criar um arquivo `product.tsx`

Criar o componente React

```tsx
export default function Product() {
  return <h1>Product</h1>
}
```

A rota será `localhost:3000/product`

---

Para acessar dinamicamente ex.: `localhost:3000/product/:id`

Criar uma pasta com nome `product`

Criar arquivo com **nome parametrizado**: `[id].tsx`

A partir desse momento, qualquer acesso à `localhost:3000/product/<alguma-coisa>` vai ser passado como parâmetro para esse arquivo

E o parâmetro pode ser acessado da seguinte maneira:

```tsx
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  return <h1>{JSON.stringify(query)}</h1>
}
```

![Arquivo parametrizado](../project-four/assets/arquivoparametrizado.png)

O problema é que qualquer coisa pode ser recebida como id

---

## Stitches

Biblioteca para estilização de componentes

`npm i @stitches/react`

`import { createStitches } from '@stitches/react'

Configurando o **`Stitches`** + criando temas globais no arquivo em `src/styles/index.ts`

```tsx
import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      rocketseat: '#8257e6',
    },
  },
})
```

Temas globais != Estilização global

Temas basicamente é a paleta de cores da aplicação.

Estilização global se faz com a propriedade `globalCss` da seguinte maneira:

Em `src/styles/global.ts`, criar a estilização

```tsx
import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
```

Em `src/pages/_app_.tsx`, importar e aplicar o método `globalCss`

```tsx
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global' // isso

globalStyles() // e isso

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

Criando componente com o **`Stitches`**

```tsx
const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '0.75rem 2rem',

  span: {
    color: 'Red',
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'invert(100%)',
  },
})
```

---

## Elementos comuns a várias páginas

Elementos que serão compartilhados por todas as páginas, por exemplo, o cabeçalho, podem ser colocados no arquivo `_app.tsx`.
