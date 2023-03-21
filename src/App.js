import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import * as dotenv from "dotenv";
dotenv.config();
const projectID = process.env.projectId;
const userSecret = process.env.userSecret;

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Ronkips"
      userSecret={userSecret}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
