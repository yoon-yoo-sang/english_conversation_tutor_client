import React from "react";
import { Message as MessageType } from "../../types"; // Adjust the import path as needed
import * as S from "./Message.styles";

interface MessageProps extends MessageType {}

const Message: React.FC<MessageProps> = ({ id, content, createdAt, role }) => {
  const isUserMessage = role === "user"; // Assuming 'user' role is for the logged-in user

  const messageTimestamp = () => {
    if (isUserMessage) {
      return (
        <S.UserMessageTimeStamp>
          {new Date(createdAt).toLocaleTimeString()}
        </S.UserMessageTimeStamp>
      );
    } else {
      <S.BotMessageTimeStamp>
        {new Date(createdAt).toLocaleTimeString()}
      </S.BotMessageTimeStamp>;
    }
  };

  return (
    <S.MessageContainer isUserMessage={isUserMessage}>
      <S.MessageContent>{content}</S.MessageContent>
      {messageTimestamp()}
    </S.MessageContainer>
  );
};

export default Message;
