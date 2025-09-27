import { useState } from "react";
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import CommunityList from "../components/CommunityList";
import type { Post } from "../types/types";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div
      style={{
        backgroundColor: "#dae0e6", // Reddit light gray
        minHeight: "100vh",         // full screen height
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          maxWidth: "1200px", // center like Reddit
        }}
      >
        {/* Left column for posts */}
        <div style={{ flex: 2 }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              marginBottom: "20px",
            }}
          >
            <CreatePost />
          </div>

          
        </div>

        {/* Optional right column for communities */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            <CommunityList />
          </div>
        </div>
      </div>
    </div>
  );
}
