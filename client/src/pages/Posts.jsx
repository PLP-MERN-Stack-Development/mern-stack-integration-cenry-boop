import useApi from "../hooks/useApi";

export default function Posts() {
  const { data: posts, loading, error } = useApi("http://localhost:5000/api/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
