# Design Systems

Quando uma empresa grande possui vários projetos sendo construídos por vários times, mesmo que se siga um padrão de aparência/layout nos designs de front end, diferenças vão aparecer e o usuário final pode talvez perceber que no mesmo 'ecossistema' de páginas, há uma dissonância e isso pode ser um fator que quebra a identidade visual da empresa.

Design System é uma documentação dos padrões seguidos entre os layouts da organização.

A ideia do Design System é incluir elementos visuais que podem ser reaproveitados em qualquer aplicação da empresa.

Alguns design systems abertos:

[Uber](https://baseweb.design/)

[Microsoft](https://www.microsoft.com/design/fluent/)

Um design system não é necessariamente código, pode ser também, por exemplo, a maneira como o front-end deve se comunicar com o usuário usando voz passiva/ativa

---

## TSUP

Uma ferramenta para converter o código em um pacote que pode ser carregado por outras aplicações.

Também poderia ser feito com `npx tsc` mas geraria um arquivo .js para cada arquivo .ts, enchendo de coisas na pasta.

O TSUP pode converter todos os arquivos para um único dentro da pasta dist, e ainda tem a capacidade de passar pra vários formatos.

Em package.json

`"build": "tsup src/index.ts --format esm,cjs --dts"`

**`npm run build`** para buildar o projeto

---

## Monorepo

É uma escolha de arquitetura no desenvolvimento de software na qual o código de vários projetos é armazenado em um mesmo repositório, e como os projetos podem ter relações entre si, seria mais difícil mantê-los separados, então o **`Monorepo`** administra as dependências compartilhadas dos projetos e os mantém juntos.

Configurações como a do TypeScript e ESLint podem ser compartilhadas entre todos os projetos
