import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%; // A circular button for voice input
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;

  &:active {
    background-color: #d8d8d8; // Slightly darker when active/pressed
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const Icon = styled.span`
  /* Use a pseudo-element to create a simple microphone icon */
  &:before {
    content: "\\1F3A4"; // Unicode for the microphone emoji
    font-size: 1.5rem;
  }
`;
