import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const confirmFormSchema = zod.object({
  name: zod
    .string()
    .min(3, { message: 'Nome deve ter no mínimo 3 caracteres.' }),
  email: zod.string().email({ message: 'Digite um e-mail válido.' }),
  observations: zod.string().nullable(),
})

type confirmFormData = zod.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<confirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  function handleConfirmScheduling(data: confirmFormData) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          06 de Fevereiro de 2023
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size={'sm'}>Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        <FormError size={'sm'}>
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </FormError>
      </label>

      <label>
        <Text size={'sm'}>Endereço de e-mail</Text>
        <TextInput
          type="email"
          placeholder="something@mymail.com"
          {...register('email')}
        />
        <FormError size={'sm'}>
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </FormError>
      </label>

      <label>
        <Text size={'sm'}>Observações</Text>
        <TextArea {...register('observations')} />
        {errors.observations && (
          <FormError size={'sm'}>{errors.observations.message}</FormError>
        )}
      </label>

      <FormActions>
        <Button type="button" variant={'tertiary'}>
          Cancelar
        </Button>
        <Button disabled={isSubmitting} type="submit">
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
