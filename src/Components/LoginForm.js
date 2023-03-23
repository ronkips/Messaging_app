import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const [error, setError] = useState("");

  const projectID = process.env.REACT_APP_PROJECTID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password
    };

    try {
      // username // passw> chatengine => give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject
      });
      // works out, logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (error) {
      // error => try with new username
      setError("Oops, Incorrrect credentials");
    }
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
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
