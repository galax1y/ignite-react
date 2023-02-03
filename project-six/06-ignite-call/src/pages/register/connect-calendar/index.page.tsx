import { Container, Header } from './../styles'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
// import axios from 'axios'

export default function Register() {
  const session = useSession()
  const router = useRouter()
  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  console.log(session)

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

          {isSignedIn ? (
            <Button size={'sm'} disabled>
              Autenticado
              <Check size={16} />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size={'sm'}
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight size={16} />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AuthError size={'sm'}>
            Falha na conexão ao Google, verifique se as permissões de acesso ao
            Google Calendar estão habilitadas
          </AuthError>
        )}
        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight size={16} />
        </Button>
      </ConnectBox>
    </Container>
  )
}
