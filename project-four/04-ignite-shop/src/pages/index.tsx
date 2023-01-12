import { styled } from '../styles'

// Criando componente com o Stitches
const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '0.75rem 2rem',

  span: {
    color: 'Red',
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'invert(100%)',
  },
})

export default function Home() {
  return (
    <Button>
      <span>Enviar</span>
    </Button>
  )
}
