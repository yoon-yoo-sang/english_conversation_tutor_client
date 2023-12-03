import React, { useState, useEffect } from "react";
import { Message as MessageType } from "../../types"; // Adjust the import path as needed
import * as S from "./ChatWindow.styles";
import Message from "../Message/Message"; // Assume you have a Message component
import SendButton from "../SendButton/SendButton"; // Assume you have a SendButton component
import TextInput from "../TextInput/TextInput";
import VoiceInput from "../VoiceInput/VoiceInput";
import api from "../../services/api";

interface ChatWindowProps {
  chatId: string; // If you need to fetch messages based on a chat ID
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chatId }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    // Placeholder function to simulate fetching messages
    const fetchMessages = async () => {
      const fetchedMessages: MessageType[] = await api.fetchMessages("1");
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, [chatId]);

  return (
    <S.ChatContainer>
      <S.MessagesList>
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </S.MessagesList>
      <TextInput
        value={inputValue}
        onChange={(value) => setInputValue(value)}
        placeholder="Type a message..."
        onEnter={() => {
          console.log("enter");
        }}
      />
      <SendButton
        onSend={() => {
          console.log("send");
        }}
        disabled={false}
      />
      <VoiceInput
        onVoiceRecordStart={() => {
          console.log("start");
        }}
        onVoiceRecordEnd={() => {
          console.log("end");
        }}
      />
    </S.ChatContainer>
  );
};

export default ChatWindow;
