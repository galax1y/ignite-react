# `Responsividade - React`

A página está criada, agora o objetivo é criar a responsividade.

Em uma aplicação real, tanto os posts quanto os comentários que estão dentro dos posts estão armazenados em bancos de dados.

No `Ignite Lab 04` foi mostrado que uma aplicação deve ter suas funcionalidades desacopladas, então a gente também deve seguir esse padrão e fazer o nosso site funcionar sem a necessidade de configurar um banco de dados. Com os dados armazenados em memória.

E então, no caso da nossa aplicação, queremos mostrar pro usuário todos os posts, e pode ser um ou um milhão, criando a necessidade de `iterar` sobre os posts.

### `Criando a estrutura de dados`

Um post tem as seguintes características:

<!-- prettier-ignore -->
```ts
// post = 
{
    id: 1,
    author: {
        name: string,
        role: string,
        avatarUrl: string,
    },
    content: string[],
    publishedAt: Date,
},
```

O nosso "banco de dados" `posts` vai ser simplesmente um array com vários `post`.

E tendo vários posts instanciados, precisamos `iterar` sobre esse array e criar os componentes com o `React`.

Observando o estado de `App.jsx` vemos que os posts estão hardcoded

<!-- prettier-ignore -->
```jsx
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Galax1y"
            content="Why should there be content?"
          />
          <Post
            author="Shakespeare"
            content="To be or not to be, or not to be, or not to be, or not to be, or not to be"
          />
        </main>
      </div>
    </div>
  );
}
```

Precisamos de algo `nesse estilo`:

<!-- prettier-ignore -->
```jsx
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main> Criar um <Post /> para cada objeto em {posts} passando as infos necessárias </main>
      </div>
    </div>
  );
}
```

---

### `Iteradores`

Aí entramos nas especificades de qual iterador usar, precisamos de `um iterador que retorne os componentes`.

O iterador `for-each` não tem retorno, então já é descartado.

Uma boa opção é o `array.map()`, que para cada elemento do array, aplica uma função e no final retorna outra array com os resultados. E vamos ver que `map` e `filter` vão ser funções do JavaScript que vão ser muito usadas no `React`.

```jsx
<main>
  {posts.map((post) => {
    return (
      <Post
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
      />
    );
  })}
</main>
```

Esse código retorna o(s) Post(s) criado(s) de acordo com as propriedades passadas. Agora é receber essas informações no código do componente e direcionar para os campos certos.

Aqui tem uma maneira de receber, dentro de `props`, note o componente `<Avatar />` também acontecendo a mesma coisa

```jsx
...
export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        ...
```

E outra maneira, `desestruturando o props`, é mais legível.

```jsx
...
export function Post({ author }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
...
```

---

### `Lidando com datas`

E assim podemos receber várias informações, então continuando com a data de publicação do post:

```jsx
...
export function Post({ author, publishedAt }) {
    ...
        <time> {publishedAt.toString()} </time>
    ...
```

extra.: Formatação de datas usando `Intl.DateTimeFormat` - [Documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

```jsx
const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
}).format(publishedAt);

...
<time> {publishedDateFormatted} </time>
...
```

extra.: Formatação de datas usando `date-fns`

```jsx
...
const publishedDateFormatted = format(
  publishedAt,
  "d 'de' LLLL 'às' HH:mm'h'",
  { locale: ptBR }
);
...
```

E por fim, falta o conteúdo do `<Post />`

Lembrando que separamos o conteúdo por tag como um objeto no formato `{type: str, content: str}`

Pra cada `content` de cada post tem uma array de linhas, precisamos retornar cada linha com sua respectiva tag HTML:

```jsx
...
export function Post({ author, publishedAt, content }) {
...
<div className={styles.content}>
  {content.map((element) => {
    if (element.type === "paragraph") return <p>{element.content}</p>;
    else if (element.type === "link") return <a href="#">{element.content}</a>;
  })}
</div>
...
```

---

### `Key para iteráveis`

Quando gerando componentes React dinamicamente através de iteração de uma lista de objetos, por exemplo, o React fica mandando avisos no console que cada elemento da lista precisa ter uma 'chave única' pra identificar os elementos **do componente**, como se fosse uma `Primary Key` em bancos de dados.

A solução é criar esse id ou encontrar uma informação única em cada objeto e passá-la para a propriedade `key` de cada componente no momento da iteração.

O id pode ser o índice da array, mas essa não é uma boa solução. Se ocorrer uma mudança de posição nos elementos da array, muda o conteúdo dentro dela mas não muda o índice, gerando confusão para o React.

Por que essa complicação toda?

#### `Tem 3 momentos em que o componente é renderizado novamente:`

1. Quando o estado é alterado
2. Quando uma propriedade do componente é alterada
3. Quando um componente pai se altera

As keys facilitam o recálculo do que precisa ser renderizado, ao invés de ter que renderizar tudo de novo porque 'o programa não conseguiu encontrar quais elementos foram alterados'.

---

## `Estado - useState`

Um estado é uma variável que o React deve observar.

O estado é uma `scoped variable`, só vai 'estar' no escopo onde foi declarada.

Sintaxe:

```jsx
const [likeCount, setLikeCount] = useState(0);
// const [nome da variável, função que a modifica] = useState(valor inicial)
```

É importante entender o conceito de `Imutabilidade` no estado:

Para a aplicação ser mais performática, o React sugere o uso de `estados imutáveis`, ou seja, não é necessário procurar o valor da variável na memória e mudá-lo.

Então o que é feito na prática é a `criação de outro objeto (variável)` totalmente novo e o React deixa de apontar para o antigo e passa a apontar para o novo, deixando o garbage collector do JavaScript lidar com o que não vai mais ser usado.

---

## `Função como propriedade React`

Podemos enviar funções dentro de propriedades, e assim ter acesso aos estados de outros componentes.

Existem propriedades built-in ex.: onClick, onSubmit, onInvalid e nessas propriedades é válido passar uma função handler para literalmente 'manusear'/'handle' os valores submetidos.

```jsx
<button
  onClick={handleDeleteComment}
  title="Deletar comentário"
>
```

---

## `Importância do TypeScript`

TypeScript vai nos facilitar a evitar erros ao verificar:

1. Que o valor que colocamos nas variáveis são do tipo que especificamos;

2. Que os objetos passados como parâmetro de fato tem os campos que estamos tentando acessar;

3. Que estamos recebendo e retornando corretamente nas funções.

Essas ações parecem pequenas em primeira vista, mas facilitam a manutenção do código, inclusive em ambiente de time, e também evita perda de tempo do desenvolvedor voltando no código escrito dias atrás e tentando analisar onde está o erro minúsculo que quebra tudo.

Também, ao permitir criação de tipos customizados, interfaces e classes/métodos abstratos, habilita o seguinte princípio de design:

**`Program to an interface, not an implementation. Depend on abstractions, not on concrete classes.`**

Esse princípio é extremamente importante para criar código **`desacoplado`** e também **`aberto a modificações (SOLID Open/closed principle)`**.

**`Abstrações`** escondem a implementação, tornando o código mais legível e 'alto nível'.

Por esses e mais motivos, o `TypeScript` é **requerido** no mercado hoje em dia.

---
