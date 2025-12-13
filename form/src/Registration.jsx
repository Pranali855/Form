import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2 className="title">✨ Registration Form ✨</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>

        <div className="preview">
          <h3>Live Preview</h3>
          <p>
            <strong>Name:</strong> {name || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {email || "N/A"}
          </p>
          <p>
            <strong>Password:</strong> {password ? "●".repeat(password.length) : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
