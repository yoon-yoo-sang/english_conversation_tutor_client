import React, { useState, useEffect } from "react";
import { Message as MessageType } from "../../types"; // Adjust the import path as needed
import * as S from "./ChatWindow.styles";
import Message from "../Message/Message"; // Assume you have a Message component
import SendButton from "../SendButton/SendButton"; // Assume you have a SendButton component
import TextInput from "../TextInput/TextInput";
import VoiceInput from "../VoiceInput/VoiceInput";
import api from "../../services/api";

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    // Placeholder function to simulate fetching messages
    const fetchMessages = async () => {
      try {
        const fetchedMessages: MessageType[] =
          await api.fetchUserChatMessages();
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        // 오류를 적절하게 처리하세요
      }
    };

    fetchMessages();
  }, []);

  return (
    <S.ChatContainer>
      <S.MessagesList>
        {messages
          .map((message) => <Message key={message.id} {...message} />)
          .reverse()}
      </S.MessagesList>
      <S.InputContainer>
        <TextInput
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          placeholder="Type a message..."
          onEnter={() => {
            console.log("enter");
          }}
        />
        {inputValue ? (
          <SendButton
            onSend={() => {
              console.log("send");
            }}
            disabled={false}
          />
        ) : (
          <VoiceInput
            onVoiceRecordStart={() => {
              console.log("start");
            }}
            onVoiceRecordEnd={() => {
              console.log("end");
            }}
          />
        )}
      </S.InputContainer>
    </S.ChatContainer>
  );
};

export default ChatWindow;
