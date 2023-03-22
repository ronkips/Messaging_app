import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
const projectID = process.env.REACT_APP_PROJECTID;
const userSecret = process.env.REACT_APP_USERSECRET;

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
