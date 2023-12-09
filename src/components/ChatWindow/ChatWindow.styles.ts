import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10%;
  border: 1px solid #ccc; /* Adjust styling as needed */
  border-radius: 5px;
  height: 500px; /* Adjust height as needed */
  background-color: #f9f9f9; /* Adjust background color as needed */
  width: 800px;
  /* align self to center */
  margin: auto;
`;

export const MessagesList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  /* Additional styles for your message list */
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const SendButton = styled.button`
  width: 30px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff; /* Adjust the color to match your theme */
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
