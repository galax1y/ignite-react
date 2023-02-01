# Projeto Ignite Call

O projeto mais completo até agora, usando `Next.js`, o `Design System` construído no projeto 5, `zod` para validação, `prisma` para ORM, `integrar c/ API` do Google Calendar, e muito mais. O resumo, assim como o do projeto 5, vai ficar bem curto, contendo comandos novos / para relembrar / configurações iniciais que são difíceis de lembrar.

Criar projeto com **`Next.js`**
`npx create-next-app@latest --use-npm`

Instalando fontes no **`Next.js`** e configurando o `Stitches`

Em `src/_document.tsx` adicionar no `Head` os links coletados no Fonts Google

```tsx
// prettier-ignore
<Head>
  {/* Adiciona as fontes */}
	<style
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
	<link	href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

	{/* Faz o Stitches funcionar */}
	<style
		id="stitches"
		dangerouslySetInnerHTML={{ __html: getCssText() }}
	></style>
</Head>
```

Estilizando componentes da biblioteca pronta pelo Stitches

No `src/componenteX/styles.ts`

```ts
import { styled, Heading } from '@ignite-ui/react'

export const Hero = styled('div', {
	maxWidth: 480,
	padding: '0 $10',

	[`${Heading}`]: {
		color: 'red',
	},
})
```
