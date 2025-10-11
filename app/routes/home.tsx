import { useState } from "react";
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import CreateCommunityModal from "../components/CommunityList";
import Sidebar from "../components/Sidebar";
import type { Post } from "../types/types";
import LoginModal from "../components/LoginModal";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const addPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const handleLogin = (username: string, password: string) => {
    // POST to backend for real authentication

  };
  const handleRegistration = (username: string, password: string) => {
    
  }

  const handleLogout = () => {
    setUser(null);
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
        <div style={{ flex: 2 }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              backgroundColor: "white",
              padding: "10px 16px",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ margin: 0, color: "#1c1c1c" }}>
              Welcome {user ? user : "Guest"} 👋
            </h2>

            {user ? (
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "#ff4d4f", // red
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e04345")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ff4d4f")
                }
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                style={{
                  backgroundColor: "#0079d3", // Reddit blue
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0065b3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0079d3")
                }
              >
                Login
              </button>
            )}
          </div>

          {/* Create Post */}
          {user && (
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
          )}

          {!user && (
            <p style={{ textAlign: "center", color: "#555" }}>
              Please log in to create or view posts.
            </p>
          )}
        </div>
      </div>

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}

