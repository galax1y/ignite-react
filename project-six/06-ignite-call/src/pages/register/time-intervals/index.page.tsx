import { Container, Header } from './../styles'
import { useFieldArray, useForm, Controller } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'phosphor-react'
import { getWeekDays } from '../../../utils/get-week-days'
import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'

const timeIntervalFormSchema = zod.object({
  // startTime: zod.string(),
  // endTime: zod.string(),
})

// type TimeIntervalFormData = zod.infer<typeof timeIntervalFormSchema>

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
    // resolver: zodResolver(timeIntervalFormSchema),
  })

  const intervalsWatcher = watch('intervals')

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  async function handleSetTimeIntervals(data: any) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked) => {
                            field.onChange(checked === true)
                          }}
                          checked={field.value}
                        />
                      )
                    }}
                  />
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput
                    size={'sm'}
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.startTime`)}
                    disabled={intervalsWatcher[index].enabled === false}
                  />
                  <TextInput
                    size={'sm'}
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.endTime`)}
                    disabled={intervalsWatcher[index].enabled === false}
                  />
                </IntervalInputs>
              </IntervalItem>
            )
          })}
        </IntervalsContainer>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight size={16} />
        </Button>
      </IntervalBox>
    </Container>
  )
}
