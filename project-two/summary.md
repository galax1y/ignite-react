# [Novo Projeto - Ignite Timer](<https://www.figma.com/file/LIa2RcZutdBPDBMn6atloj/Ignite-Timer-(Community)?node-id=0%3A1&t=P0PdJCHv7185TnNA-0>)

Novo projeto, novas tecnologias e indo mais fundo no React.

---

### `Styled Components`

É uma maneira de estilizar os components utilizando `CSS in JS`, escrevendo o CSS da aplicação na sintaxe do JavaScript (TypeScript, no caso).

Útil para componentes que vão ser usados várias vezes e com muitas variantes de estilização, então server como um 'gestor de temas'.

Exemplo na pasta `ignite-react/project-two/exemplo-styled-components/`

`npm i styled-components` instalação && `npm i @types/styled-components -D` para uso com TypeScript

---

### `Arquivo de definição de tipos`

**`<nome-arquivo>.d.ts`**

`Arquivo de definição de tipos` ou `arquivos de declaração`, são arquivos somente com definição de tipos no seu conteúdo

No caso do `styled-components`, vamos sobrescrever o tipo de `ThemeType`. Isso se faz uma vez por projeto, então não precisa decorar, só consultar um projeto.

```ts
import 'styled-components'
import { defaultTheme } from '../styles/themes/default/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
```

---

### `Estilização global com styled-components`

1. Criar um arquivo `global.ts`

2. Codar o estilo seguindo esse padrão

```ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #333;
    color: #fff;
}
`
```

3. Inserir o arquivo de estilização

```tsx
<ThemeProvider theme={defaultTheme}>
  <Button variant={'primary'} />
  <Button variant={'secondary'} />
  <Button variant={'success'} />
  <Button variant={'danger'} />

  <GlobalStyle />
</ThemeProvider>
```

Pode ser colocar em qualquer lugar

---

### `Formulários no React`

Controlled -> toda vez que o usuário atualizar o input, o estado é atualizado em tempo real.
Um downside a se levar em consideração é que atualizações de estado causam que o React renderize novamente componentes, podendo causar perda de performance.

Uncontrolled -> busca a informação do valor do input somente quando ela for necessária.
Esse approach pode fazer perder um pouco a fluidez de interação com o usuário, já que no meio da digitação, por exemplo, não poderemos ligar/desligar algum efeito visual.

#### Biblioteca de formulários `React Hook Form`

```
const { register, handleSubmit, watch, reset } = useForm({})
```

`{...register('task')}`

---

### Hook `useEffect`

Hooks são funções que começam com o prefixo `use`, tem como intenção acoplar funcionamento a algum componente da nossa aplicação.

`useState` é um hook que armazena variáveis que quando são alteradas provocam uma nova renderização dos componentes.

`useEffect` é um hook que aplica um 'efeito' (função) caso a variável assistida mude (quando).

`useEffect( function , [variables-to-monitor] )`

Executa também, por padrão, quando um componente é exibido em tela pela primeira vez.

Quando queremos executar só essa primeira vez, fazemos:

```jsx
useEffect(() => {
  doSomething()
}, [])
```

Pode ser útil para fazer chamadas para uma API.

Cuidado ao usar `useState` para mudar valor de estados, existe risco de renderizar novamente sem necessidade.

---

## `Componentização`

Existem dois motivos principais pra fazer componentização:

1. Percebemos que algo é um componente, se repete, logo, separamos.

2. Um componente está muito grande e difícil de entender, então separamos em componentes menores que consideramos independentes.

Um problema surge na segunda ocasião: os useEffect, useState, funções, interfaces, etc. criados no 'componente pai' não estão mais disponíveis nos componentes separados, e na verdade, **precisam ficar** no componente de origem, pois mais de um dos 'componentes-filhos' precisam usá-lo.

Com o que sabemos até agora, o recurso que temos pra resolver isso são as `Propriedades React`.

Funcionar funciona, mas o que resulta em um projeto grande é uma lista GIGANTE de propriedades contendo estados/funções/effects/variáveis que estão sendo passadas em cada um dos componentes, e isso não simplifica o código como é a intenção da componentização. Pior ainda se o componente-destino estiver aninhado mais de um nível, gerando uma cadeia imensa de passagem de propriedades, é um caos.

#### Isso se chama **`Prop Drilling`**.

### Context API

A `Context API` permite compartilharmos informação entre vários componentes ao mesmo tempo (como se fossem variáveis globais).

Como usar?

1. Criar o contexto

```tsx
import { createContext } from 'react'

export const MyContext = createContext({
  // elementos a serem compartilhados
})
```

2. Inserir o `Context Provider` no componente pai com os elementos a serem compartilhados

```tsx
export function Home() {
  const [element, setElement] = useState(0)

  return (
    <MyContext.Provider value={{ element, setElement }}>
      <ChildComponent />
      <AnotherChildComponent />
    </MyContext.Provider>
  )
}
```

3. Receber o contexto no componente e usá-lo

```tsx
function export ChildComponent() {
  const {
    // elementos do contexto que o componente precisa
  } = useContext(MyContext)
}
```

---

## `Reducers`

Componentes com muitos estados também contém muitas funções que atualizam esses estados e isso faz um código ser difícil de ler.

Um `reducer` é uma opção para centralizar todos os estados de um contexto e sua lógica (funções) em um único local.

```jsx

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}
//     objeto com os estados     função      useReducer   //estado anterior   // parametros dispatch       -   init estados
const [cyclesState: CyclesState, dispatch] = useReducer( (state: CyclesState, action) => {/* implementação*/}, {cycles: [], activeCycleId: null} )
```

Substitui-se a lógica de mudança de estados em cada função por um `dispatch` que se encarrega de tratar dessas mudanças.

```jsx
dispatch({
  type: 'INTERRUPT_CURRENT_CYCLE',
  payload: {
    activeCycleId,
  },
})
```

Basicamente todos os locais onde o estado está sendo modificado são passados pra dentro do reducer e tratados lá.

```jsx
switch (action.type) {
  case 'ADD_NEW_CYCLE':
    return {
      ...state,
      cycles: [...state.cycles, action.payload.newCycle],
      activeCycleId: action.payload.newCycle.id,
    }
    case 'INTERRUPT_CURRENT_CYCLE':
      ...
}
```

Creio que o `reducer` deve ser enxergado como um design pattern.
