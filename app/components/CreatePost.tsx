import { useState } from "react";
import SpringAPI from "../api/api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const createPost = async () => {
    try {
      const response = await SpringAPI.post("/api/v1/posts", {
        title,
        content,
      });
      setMessage("✅ Post created successfully!");
      console.log(response.data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
      setMessage("❌ Failed to create post");
    }
  };

  return (
    <div style={{ color: "#111", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "12px" }}>Create Post</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          color: "#111",          // dark text
          backgroundColor: "#fff" // white background
        }}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          color: "#111",           // dark text
          backgroundColor: "#fff", // white background
          minHeight: "100px",
          resize: "vertical"
        }}
      />

      <button
        type="button"
        onClick={createPost}
        style={{
          padding: "8px 16px",
          backgroundColor: "#0079d3", // Reddit blue
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1484e3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0079d3")}
      >
        Submit
      </button>

      {message && <p style={{ marginTop: "12px" }}>{message}</p>}
    </div>
  );
}
