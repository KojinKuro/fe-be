import { useEffect, useState } from "react";
import "./App.css";
import { getMessages } from "./utils/apiCalls";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((data) => setMessages(data));
  }, []);

  const messageElements = messages.map((message) => {
    return <li key={message.id}>{message.text}</li>;
  });

  return (
    <div>
      <ul>{messageElements}</ul>
    </div>
  );
}
