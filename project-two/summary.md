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
import "styled-components";
import { defaultTheme } from "../styles/themes/default/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
```

---

### `Estilização global com styled-components`

1. Criar um arquivo `global.ts`

2. Codar o estilo seguindo esse padrão

```ts
import { createGlobalStyle } from "styled-components";

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
`;
```

3. Inserir o arquivo de estilização

```tsx
<ThemeProvider theme={defaultTheme}>
  <Button variant={"primary"} />
  <Button variant={"secondary"} />
  <Button variant={"success"} />
  <Button variant={"danger"} />

  <GlobalStyle />
</ThemeProvider>
```

Pode ser colocar em qualquer lugar
