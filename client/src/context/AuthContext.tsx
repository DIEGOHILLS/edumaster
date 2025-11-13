import { createContext, useState, useEffect } from "react";
import axios from "axios";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  // Load user from localStorage but don't auto-redirect
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await axios.post(
      "https://edumaster-3sjq.onrender.com/api/auth/login",
      { email, password }
    );
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);
  };

  const register = async (name: string, email: string, password: string) => {
    if (!name || !email || !password) throw new Error("All fields are required");

    try {
      await axios.post(
        "https://edumaster-3sjq.onrender.com/api/auth/register",
        { name, email, password }
      );
      // Auto-login after signup
      await login(email, password);
    } catch (err: any) {
      if (err.response?.data?.message === "Email already exists") {
        throw new Error("This email is already registered. Try logging in.");
      } else {
        throw new Error(err.response?.data?.message || "Signup failed");
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
