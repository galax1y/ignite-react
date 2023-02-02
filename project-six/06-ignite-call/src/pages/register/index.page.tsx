import { Container, Form, FormError, Header } from './styles'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'

const registerFormSchema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Um username deve conter pelo menos 3 caracteres' })
    .regex(/^([a-z\\-]+)$/, {
      message: 'Somente letras sao permitidas',
    })
    .transform((data) => data.toLowerCase()),
  name: zod
    .string()
    .min(3, { message: 'Um nome deve conter pelo menos 3 caracteres' }),
})

type RegisterFormData = zod.infer<typeof registerFormSchema>

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      // acessa src/api/users/index.api.ts
      await api.post('/users', {
        username: data.username,
        name: data.name,
      })
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }
      console.error(err)
    }
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size={'sm'}>Nome de usuário</Text>
          <TextInput
            size={'sm'}
            prefix={'ignite.com/'}
            placeholder={'seu-usuario'}
            {...register('username')}
          />
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text size={'sm'}>Nome completo</Text>
          <TextInput
            size={'sm'}
            placeholder={'Seu nome'}
            {...register('name')}
          />
          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight size={16} />
        </Button>
      </Form>
    </Container>
  )
}
