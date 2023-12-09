import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  color: gray;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #007bff; // Darken the button on hover
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
