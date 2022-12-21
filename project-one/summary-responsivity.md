# `Responsividade - React`

A página está criada, agora o objetivo é criar a responsividade.

Em uma aplicação real, tanto os posts quanto os comentários que estão dentro dos posts estão armazenados em bancos de dados.

No `Ignite Lab 04` foi mostrado que uma aplicação deve ter suas funcionalidades desacopladas, então a gente também deve seguir esse padrão e fazer o nosso site funcionar sem a necessidade de configurar um banco de dados. Com os dados armazenados em memória.

E então, no caso da nossa aplicação, queremos mostrar pro usuário todos os posts, e pode ser um ou um milhão, criando a necessidade de `iterar` sobre os posts.

## `Criando a estrutura de dados`

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

E aí entra nas especificades de qual iterador usar, precisamos de um iterador que retorne os componentes.

O iterador `for-each` não tem retorno, então já é descartado.

Uma boa opção é o `array.map()`, que para cada elemento do array, aplica uma função e no final retorna outra array com os resultados.

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
