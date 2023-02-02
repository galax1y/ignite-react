import { TextInput, Button, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const claimUsernameFormSchema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Um username deve conter pelo menos 3 caracteres' })
    .regex(/^([a-z\\-]+)$/, {
      message: 'Somente letras sao permitidas',
    })
    .transform((data) => {
      data.toLowerCase()
    }),
})

type ClaimUsernameFormData = zod.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handlePreRegister(data: ClaimUsernameFormData) {
    console.log(data)
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
