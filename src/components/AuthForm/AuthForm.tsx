import React, { useState } from "react";
import { AuthCredentials } from "../../types"; // Adjust the import path as needed
import * as S from "./AuthForm.styles";

interface AuthFormProps {
  onSignIn: (credentials: AuthCredentials) => void;
  onStartWithoutAuth: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSignIn,
  onStartWithoutAuth,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn({ email, password });
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Title>Start Your Conversation!</S.Title>
      <S.Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <S.Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <S.Button type="submit">Start and save your chat!</S.Button>
      <S.Button type="button" onClick={onStartWithoutAuth}>
        Start with no auth (No save)
      </S.Button>
    </S.FormContainer>
  );
};

export default AuthForm;
