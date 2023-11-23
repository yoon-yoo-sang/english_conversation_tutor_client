import {
  AuthCredentials,
  AuthResponse,
  TokenRefresh,
  Chat,
  Message,
} from "../types";

const BASE_URL = "http://127.0.0.1:8000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken"); // Or however you manage your tokens
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const api = {
  signIn: async (credentials: AuthCredentials): Promise<AuthResponse> => {
    const response = await fetch(`${BASE_URL}/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error("Failed to sign in");
    }
    return response.json();
  },

  refreshToken: async (refresh: TokenRefresh): Promise<AuthResponse> => {
    const response = await fetch(`${BASE_URL}/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(refresh),
    });
    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }
    return response.json();
  },

  fetchChats: async (): Promise<Chat[]> => {
    const response = await fetch(`${BASE_URL}/chats/`, {
      method: "GET",
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch chats");
    }
    return response.json();
  },

  fetchMessages: async (chatId: string): Promise<Message[]> => {
    const response = await fetch(`${BASE_URL}/chats/${chatId}/messages/`, {
      method: "GET",
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }
    return response.json();
  },

  // Add more API calls as needed
};

export default api;
