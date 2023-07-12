# Redux

É uma ferramenta de gerenciamento de estado.

Estado é um dado armazenado com o propósito de exibir ou manipular informações, e dependendo, mostrar algo em tela.

O Redux é uma ferramenta que propõe um **estado global** para a aplicação React.

Assim, todos os componentes podem acessar os estados compartilhados a partir dessa centralização.

A diferença entre a **Context API** e o **Redux** é:

- Context API é puramente uma forma de compartilhar informações entre componentes.
- Redux é uma ferramenta de gerenciamento de estado que possui uma _arquitetura_ definida.

### Conceitos

Em uma aplicação front-end existem 3 tipos de estado:

- **Local State** uma variável salva dentro de um componente específico
- **Global State** um estado compartilhado por toda/maior parte da aplicação
- **Server State** estado provindo das requisições feitas ao backend

### Alternativas

- **Zustand** uma ferramenta muito parecida com o Redux com a proposta de simplificar mais ainda o gerenciamento de estados
- **Jotai** uma ferramenta com o objetivo de substituir a Context API

## Arquitetura Flux

![Arquitetura Flux](https://www.alura.com.br/artigos/assets/redux-desvendando-arquitetura-flux/imagem2.png)

Componentes geram ações
O estado ouve o disparo dessas ações
Realiza as alterações necessárias e as armazena
Retornam para a interface