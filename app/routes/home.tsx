import { useState } from "react";
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import CreateCommunityModal from "../components/CommunityList";
import Sidebar from "../components/Sidebar";   
import type { Post } from "../types/types";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div
      style={{
        backgroundColor: "#dae0e6",
        minHeight: "100vh",
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
          maxWidth: "1200px",
        }}
      >
        <Sidebar />

        {/* Middle column for posts */}
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

        {/* Right column for community actions */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              + Create Community
            </button>

            {showModal && (
              <CreateCommunityModal onClose={() => setShowModal(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
