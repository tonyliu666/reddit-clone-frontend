import { useEffect, useState } from "react";
import api from "../api/api";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => setPosts(res.data));
  }, []);

  const upvote = (id) => {
    api.post(`/posts/${id}/upvote`).then((res) => {
      setPosts(posts.map(p => (p.id === id ? res.data : p)));
    });
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>👍 {post.upvotes} | 👎 {post.downvotes}</p>
          <button onClick={() => upvote(post.id)}>Upvote</button>
        </div>
      ))}
    </div>
  );
}
