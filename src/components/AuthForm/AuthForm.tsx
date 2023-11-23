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
      <S.Title>AI와 진짜 대화하기</S.Title>
      <S.Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        required
      />
      <S.Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        required
      />
      <S.Button type="submit">회원가입 / 로그인</S.Button>
      <S.Button type="button" onClick={onStartWithoutAuth}>
        인증없이 시작하기 (저장 안 됨)
      </S.Button>
    </S.FormContainer>
  );
};

export default AuthForm;
