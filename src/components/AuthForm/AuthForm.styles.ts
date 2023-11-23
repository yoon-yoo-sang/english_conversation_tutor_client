import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: auto;
  max-width: 300px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #333; /* Adjust styling as needed */
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc; /* Adjust styling as needed */
  border-radius: 5px;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff; /* Adjust styling as needed */
  color: white;
  cursor: pointer;
  width: 80%;

  &:hover {
    background-color: #0056b3; /* Adjust styling as needed */
  }
`;
