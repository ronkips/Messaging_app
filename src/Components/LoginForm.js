import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const authObject = {}
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPasssword(e.target.value)}
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
