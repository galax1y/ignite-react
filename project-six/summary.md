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

Biblioteca pra criação de inputs de usuário controlados ou não-controlados no React. Comum pra validação e performática.
`npm i react-hook-form`

Biblioteca para validação integrada com TypeScript. Pode inferir tipos a partir de variáveis ou objetos.
`npm i zod`

Resolver que faz o **`zod`** e outras bibliotecas externas funcionar com o **`react-hook-form`**.
`npm i @hookform/resolvers`

Instalar tudo junto
`npm i react-hook-form @hookform/resolvers zod`

Exemplo básico no uso do zod

```jsx
// Criando o schema informando os campos que o form deve retornar e validando
const claimUsernameFormSchema = zod.object({
	username: z.string(),
})

// A partir do schema, é possível criar o tipo do objeto no TypeScript
type ClaimUsernameFormData = zod.infer<typeof claimUsernameFormSchema>

// E isso é usado no generic do useForm, assim evita erros futuros no form, já que os campos que existem já estão declarados
// Autocomplete também passa a funcionar quando registra uma informação
export function claimUsernameForm() {
	const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

	<TextInput {...register('username')} />
}
```

![Uso do Zod](./assets/exemplo-uso-zod.png)
