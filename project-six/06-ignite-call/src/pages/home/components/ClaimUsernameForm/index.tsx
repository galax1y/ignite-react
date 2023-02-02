import { TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Form } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const claimUsernameFormSchema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Um username deve conter pelo menos 3 caracteres' })
    .max(16, { message: 'Um username deve conter até 16 caracters' }),
})

type ClaimUsernameFormData = zod.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handlePreRegister(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
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
  )
}
