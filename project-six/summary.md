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

Exemplo básico **`react-hook-form + zod + @hookform/resolvers/zod`**

```jsx
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Criando o schema informando os campos que o form deve retornar e validando
const claimUsernameFormSchema = zod.object({
	username: z.string()
	.min(3), // Exemplo de validação. Tem MUITAS.
})

// A partir do schema, é possível criar o tipo do objeto no TypeScript
type ClaimUsernameFormData = zod.infer<typeof claimUsernameFormSchema>

// Se a validação passar, esse código vai ser rodado
async function handleUsernameFormSubmit(data: ClaimUsernameFormData) {
	...
}

// E isso é usado no generic do useForm, assim evita erros futuros no form, já que os campos que existem já estão declarados
// Autocomplete também passa a funcionar quando registra uma informação
export function claimUsernameForm() {
	const { register, handleSubmit } = useForm<ClaimUsernameFormData>(
		// Objeto de configuração do useForm deve apontar o resolver do zod vindo de @hookform/resolvers/zod
		// O schema deve ser fornecido ao resolver!!
		{
    	resolver: zodResolver(claimUsernameFormSchema),
    }
	)

	// Criando um input controlled/uncontrolled com uso do react-hook-form
	<form onSubmit={handleSubmit(handleUsernameFormSubmit)}>
		<TextInput {...register('username')} />
		<button type="submit">
	<form>
}
```

A validação nesse caso já tá funcionando, ele não vai passar o conteúdo à função

![Exemplo zod](./assets/exemplo-uso-zod.png)

Para adicionar campos que o formulário deve coletar é só:

1. Adicionar o campo no Schema, tipar e validar
2. Registrar o elemento (input) que vai coletar esse campo

Mensagens de erro são acessadas usando o useForm:

```jsx
// prettier-ignore
const {
	register,
	handleSubmit,
	formState: { errors }, // Acesso aos erros
} = useForm<ClaimUsernameFormData>(
	{resolver: zodResolver(claimUsernameFormSchema)}
	)

// E assim mostrar a informação em tela
// prettier-ignore
{errors.username?.message}

// Outra maneira seria: verificar se isso é um booleano true, e então renderizar um componente estilizado
{
	!!errors.username?.message && <ErrorMessageComponent />
}
```

Redirecionamento no `Next.js` passando parâmetros na query:

```jsx
async function handlePreRegister(data: ClaimUsernameFormData) {
	const { username } = data

	// redirecionamento
	await router.push({ pathname: '/register', query: { username } })
}
```

No arquivo que recebe o redirecionamento:

```jsx
export default function Register() {
	// recebe os parâmetros
	const router = useRouter()

	// acessa os parâmetros
	console.log(router.query.username)
}
```
