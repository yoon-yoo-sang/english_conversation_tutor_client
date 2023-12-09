import React, { useState } from "react";
import * as S from "./AuthForm.styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { setToken } from "../../utils/tokenUtils";

const AuthForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for the username
  const [isSignUp, setIsSignUp] = useState(false); // State to track if user is signing up

  const onSignIn = async (credentials: { email: string; password: string }) => {
    console.log("sign in", credentials);
    try {
      const signInResponse = await api.obtainToken(email, password);
      setToken(signInResponse.access);
      console.log("Tokens:", signInResponse);
    } catch (error) {
      console.error("Sing In failed", error);
    }
    navigate("/chat");
  };

  const onSignUp = async () => {
    try {
      const signUpResponse = await api.signUp(email, password, username);
      if (signUpResponse.status === 201) {
        // If sign up successful, obtain token
        const tokenResponse = await api.obtainToken(email, password);
        setToken(tokenResponse.access);
        // Store tokens and handle authenticated state
        console.log("Tokens:", tokenResponse);
        // Navigate to chat or another authenticated page
      } else {
        const errorData = await signUpResponse.json();
        console.error("Sign up error:", errorData);
        // Handle sign-up error (e.g., show error message to user)
      }
    } catch (error) {
      console.error("Sign up failed:", error);
      // Handle network or other unexpected errors
    }
  };

  const onStartWithoutAuth = () => {
    console.log("not auth start");
    navigate("/chat");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = { email, password };
    if (isSignUp) {
      onSignUp();
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
