import { Container, Header } from './../styles'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'phosphor-react'
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

export default function Register() {
  const { register, handleSubmit } = useForm()

  async function handleNextStep(data: any) {
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

      <IntervalBox as="form" onSubmit={handleSubmit(handleNextStep)}>
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size={'sm'}
                type="time"
                step={60}
                {...register('min')}
              />
              <TextInput
                size={'sm'}
                type="time"
                step={60}
                {...register('max')}
              />
            </IntervalInputs>
          </IntervalItem>

          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                size={'sm'}
                type="time"
                step={60}
                {...register('min')}
              />
              <TextInput
                size={'sm'}
                type="time"
                step={60}
                {...register('max')}
              />
            </IntervalInputs>
          </IntervalItem>

          <IntervalItem>
            <h1>Teste</h1>
          </IntervalItem>
        </IntervalsContainer>

        <Button type="submit">
          Próximo passo
          <ArrowRight size={16} />
        </Button>
      </IntervalBox>
    </Container>
  )
}
