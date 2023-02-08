import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'

const confirmFormSchema = zod.object({
  name: zod
    .string()
    .min(3, { message: 'Nome deve ter no mínimo 3 caracteres.' }),
  email: zod.string().email({ message: 'Digite um e-mail válido.' }),
  observations: zod.string().nullable(),
})

type confirmFormData = zod.infer<typeof confirmFormSchema>

interface ConfirmStepProps {
  schedulingDate: Date
  onCancelConfirmation: () => void
}

export function ConfirmStep({
  schedulingDate,
  onCancelConfirmation,
}: ConfirmStepProps) {
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

  const describedDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY')
  const describedTime = dayjs(schedulingDate).format('HH:mm[h]')

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {describedDate}
        </Text>
        <Text>
          <Clock />
          {describedTime}
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
        <Button
          onClick={onCancelConfirmation}
          type="button"
          variant={'tertiary'}
        >
          Cancelar
        </Button>
        <Button disabled={isSubmitting} type="submit">
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
