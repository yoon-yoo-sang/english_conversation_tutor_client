import { AuthResponse, TokenRefresh, Chat, Message } from "../types";

const BASE_URL = "http://localhost:8000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken"); // Or however you manage your tokens
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const api = {
  signUp: async (
    email: string,
    password: string,
    username: string
  ): Promise<Response> => {
    const response = await fetch(`${BASE_URL}/users/sign_up/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });
    console.log(response);
    return response;
  },

  obtainToken: async (
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    const response = await fetch(`${BASE_URL}/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Failed to obtain token");
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
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch chats");
    }
    return response.json();
  },

  fetchUserChatMessages: async (): Promise<Message[]> => {
    try {
      const response = await fetch(`${BASE_URL}/messages`, {
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
    } catch (error) {
      console.error("fetch message failed", error);
      throw error;
    }
  },

  fetchChatMessages: async (chatId: string | undefined): Promise<Message[]> => {
    try {
      const response = await fetch(
        `${BASE_URL}/messages?chat=${chatId === undefined ? 0 : chatId}`,
        {
          method: "GET",
          headers: {
            ...getAuthHeaders(),
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      return response.json();
    } catch (error) {
      console.error("fetch message failed", error);
      throw error;
    }
  },

  // Add more API calls as needed
};

export default api;
