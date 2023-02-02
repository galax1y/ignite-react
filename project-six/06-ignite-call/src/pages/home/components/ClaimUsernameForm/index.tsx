import { TextInput, Button, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const ClaimUsernameFormSchema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Um username deve conter pelo menos 3 caracteres' })
    .regex(/^([a-z\\-]+)$/, {
      message: 'Somente letras sao permitidas',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = zod.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })

  const router = useRouter()

  async function handlePreRegister(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push({ pathname: '/register', query: { username } })
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handlePreRegister)}>
        <TextInput
          size={'sm'}
          prefix={'ignite.com/'}
          placeholder={'seu-usuario'}
          {...register('username')}
        />
        <Button size={'sm'} type={'submit'}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}
