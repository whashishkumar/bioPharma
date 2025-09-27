"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import api from "@/lib/axious";

import Cookies from "js-cookie";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const storedUser = localStorage.getItem("user");
    const token = Cookies.get("token");
    // if (storedUser && token) {
    //   setUser(JSON.parse(storedUser));
    // }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/login", { email, password });
      const { bearer_token, user } = response.data;

      // Save token in cookie
      Cookies.set("token", bearer_token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
        path: "/",
      });

      // Save user in state + localStorage
      setUser(user);
      // localStorage.setItem("user", JSON.stringify(user));
    } catch (err: any) {
      throw new Error(err.response?.data || "Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
