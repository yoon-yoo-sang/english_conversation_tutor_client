import React, { useState } from "react";
import * as S from "./AuthForm.styles";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // New state for the username
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // State to track if user is signing up

  const onSignIn = (credentials: { email: string; password: string }) => {
    console.log("sign in", credentials);
    // Replace with actual sign in logic
    // navigate("/chat");
  };

  const onSignUp = (credentials: {
    email: string;
    password: string;
    username: string;
  }) => {
    console.log("sign up", credentials);
    // Replace with actual sign up logic
    // navigate("/chat");
  };

  const onStartWithoutAuth = () => {
    console.log("not auth start");
    navigate("/chat");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = { email, password };
    if (isSignUp) {
      onSignUp({ ...credentials, username });
    } else {
      onSignIn(credentials);
    }
  };

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Title>AI와 진짜 대화하기</S.Title>
      <S.Input
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        placeholder="이메일"
        required
      />
      <S.Input
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        placeholder="비밀번호"
        required
      />
      {isSignUp && (
        <S.Input
          type="text"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          placeholder="사용자 이름"
          required
        />
      )}
      <S.Button type="submit">{isSignUp ? "회원가입" : "로그인"}</S.Button>
      <S.ToggleSignUpButton type="button" onClick={toggleSignUp}>
        {isSignUp ? "로그인하기" : "회원가입하기"}
      </S.ToggleSignUpButton>
      <S.Button type="button" onClick={onStartWithoutAuth}>
        인증없이 시작하기 (저장 안 됨)
      </S.Button>
    </S.FormContainer>
  );
};

export default AuthForm;
