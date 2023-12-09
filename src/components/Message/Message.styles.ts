import styled from "styled-components";

interface MessageContainerProps {
  isUserMessage: boolean;
}

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isUserMessage }) =>
    isUserMessage ? "flex-end" : "flex-start"};
  align-self: ${({ isUserMessage }) =>
    isUserMessage ? "flex-end" : "flex-start"};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: ${({ isUserMessage }) =>
    isUserMessage ? "#dcf8c6" : "#fff"}; // Differentiate user message
  border: ${({ isUserMessage }) =>
    isUserMessage ? "1px solid #dcf8c6" : "1px solid #eee"};
  max-width: 60%;
  word-wrap: break-word;
`;

export const MessageContent = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #333; // Adjust color as needed
`;

export const MessageTimestamp = styled.span`
  font-size: 0.75rem;
  color: #666; // Adjust color as needed
  padding: 5px 0;
`;

export const UserMessageTimeStamp = styled(MessageTimestamp)`
  align-self: flex-end;
`;

export const BotMessageTimeStamp = styled(MessageTimestamp)`
  align-self: flex-start;
`;
