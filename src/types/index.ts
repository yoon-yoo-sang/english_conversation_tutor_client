export interface BaseModel {
  id: string;
  createdAt: string; // ISO string format date
  updatedAt: string; // ISO string format date
}

export interface User extends BaseModel {
  username: string;
  email: string;
}

export interface Chat extends BaseModel {
  user: User | null; // Nullable to handle chats without authenticated users
  threadId: string;
}

export interface Message extends BaseModel {
  chat: Chat;
  role: string; // Could be 'user' or 'bot', depending on who sent the message
  content: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  access: string; // JWT access token
  refresh: string; // JWT refresh token
}

export interface TokenObtainPair {
  email: string;
  password: string;
}

export interface TokenRefresh {
  refresh: string;
}
