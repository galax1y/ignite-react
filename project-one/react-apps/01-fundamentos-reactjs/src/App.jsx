import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Lucas Galax1y"
        content="Why should there be content?"
      />
      <Post
        author="Shakespeare"
        content="To be or not to be, or not to be, or not to be, or not to be, or not to be"
      />
    </div>
  );
}
