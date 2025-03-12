interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

async function clicado() {
  "use server";
  console.log("clicou");
}

async function forms(formData: FormData) {
  "use server";
  const userId = formData.get("userId");
  console.log(userId);
}

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json();

  return (
    <div>
      <h1>Todos os Posts</h1>
      <form action={forms}>
        <input type="text" name="userId" className="bg-white text-black" />
        <button type="submit">Enviar</button>
      </form>
      <button onClick={clicado}>CLIQUE</button>
      <div>
        {data.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
