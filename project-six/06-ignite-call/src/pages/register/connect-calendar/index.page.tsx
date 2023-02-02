import { Container, Header } from './../styles'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
import { ConnectBox, ConnectItem } from './styles'
import { useSession, signIn } from 'next-auth/react'
// import axios from 'axios'

export default function Register() {
  const { data: session } = useSession()
  const isSessionEnabled = !!session

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size={'sm'}
            onClick={() => signIn('google')}
            disabled={isSessionEnabled}
          >
            {isSessionEnabled ? 'Autenticado' : 'Conectar'}
            {isSessionEnabled ? <Check size={20} /> : <ArrowRight size={20} />}
          </Button>
        </ConnectItem>
        <Button type="submit" disabled={!isSessionEnabled}>
          Próximo passo
          <ArrowRight size={16} />
        </Button>
      </ConnectBox>
    </Container>
  )
}
