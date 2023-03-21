import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  //render
  const renderMessage = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessage = index === 0 ? null : keys[index - 1];
      const myMeso = userName === message.sender.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {myMeso ? <MyMessage /> : <TheirMessage />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginLeft: myMeso ? "18px" : "0px",
              marginRight: myMeso ? "0px" : "68px"
            }}
          ></div>
        </div>
      );
    });
  };
  return <div>ChatFeed</div>;
};

export default ChatFeed;
