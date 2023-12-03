import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff; // Use your theme's color
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; // Darken the button on hover
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
