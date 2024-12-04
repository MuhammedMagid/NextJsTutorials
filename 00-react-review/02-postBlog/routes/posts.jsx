import PostList from "../components/postList";

function Posts() {

  return(
    <>
      <main>
        <PostList />
      </main>
    </>
  )
}

export default Posts;

export async function loader() {
  const response =await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data  
}