import  { useState } from "react";
import CryptoJS from "crypto-js";

type LoginModalProps = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: LoginModalProps) {
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    console.log("Logging in:", account, password);
  };

  const handleSignupClick = () => {
    console.log("Signing up:", account, password);
    // send encrypted account and password to backend for registration

    setIsSignupMode(false); // Switch back to login after signup
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "10px",
          width: "340px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2
          style={{
            margin: 0,
            textAlign: "center",
            color: "#1c1c1c",
            fontWeight: "bold",
          }}
        >
          {isSignupMode ? "Sign Up" : "Log In"}
        </h2>

        {/* Account input */}
        <input
          type="text"
          placeholder="Username or Email"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px",
            fontWeight: "600",
            color: "#004aad",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#0079d3";
            e.currentTarget.style.boxShadow = "0 0 4px rgba(0, 121, 211, 0.3)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#ccc";
            e.currentTarget.style.boxShadow = "none";
          }}
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px",
            fontWeight: "600",
            color: "#004aad",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#0079d3";
            e.currentTarget.style.boxShadow = "0 0 4px rgba(0, 121, 211, 0.3)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#ccc";
            e.currentTarget.style.boxShadow = "none";
          }}
        />

        {/* Additional field only for signup */}
        {isSignupMode && (
          <input
            type="password"
            placeholder="Confirm Password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "15px",
              fontWeight: "600",
              color: "#004aad",
            }}
          />
        )}

        {/* Main button */}
        <button
          onClick={isSignupMode ? handleSignupClick : handleLoginClick}
          style={{
            backgroundColor: "#0079d3",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
            transition: "background-color 0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0065b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#0079d3")
          }
        >
          {isSignupMode ? "Sign Up" : "Log In"}
        </button>

        {/* OR Divider */}
        {!isSignupMode && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#999",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              <hr
                style={{ flex: 1, border: "none", borderTop: "1px solid #ddd" }}
              />
              or
              <hr
                style={{ flex: 1, border: "none", borderTop: "1px solid #ddd" }}
              />
            </div>

            {/* Google login */}
            <button
              onClick={handleGoogleLogin}
              style={{
                backgroundColor: "white",
                color: "#444",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                style={{ width: "20px", height: "20px" }}
              />
              Continue with Google
            </button>
          </>
        )}

        {/* Toggle between login/signup */}
        <button
          onClick={() => setIsSignupMode(!isSignupMode)}
          style={{
            backgroundColor: "transparent",
            color: "#0079d3",
            border: "none",
            padding: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {isSignupMode
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </button>

        {/* Cancel */}
        <button
          onClick={onClose}
          style={{
            backgroundColor: "#ff4d4f",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
