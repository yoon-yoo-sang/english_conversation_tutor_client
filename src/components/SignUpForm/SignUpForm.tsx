import React, { useState } from "react";
import * as S from "./SignUpForm.styles";

interface SignUpFormProps {
  onSignUp: (email: string, password: string, username: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSignUp(email, password, username);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Title>Sign Up</S.Title>
      <S.Input
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        placeholder="Email"
        required
      />
      <S.Input
        type="text"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        placeholder="Username"
        required
      />
      <S.Input
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        placeholder="Password"
        required
      />
      <S.Button type="submit">Create Account</S.Button>
    </S.FormContainer>
  );
};

export default SignUpForm;
