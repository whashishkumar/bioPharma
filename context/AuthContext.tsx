// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";
// import api from "@/lib/axious";
// import Cookies from "js-cookie";

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// type AuthContextType = {
//   user: User | null;
//   loading: boolean;
//   login: (email: string, password: string) => Promise<void>;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = Cookies.get("token");
//     const storedUser = localStorage.getItem("user");

//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email: string, password: string) => {
//     setLoading(true);
//     try {
//       const response = await api.post("/login", { email, password });
//       const { bearer_token, user } = response.data;
//       // Cookies.set("token", bearer_token, {
//       //   expires: 7,
//       //   secure: true,
//       //   sameSite: "Strict",
//       //   path: "/",
//       // });

//       setUser(user);
//     } catch (err: any) {
//       throw new Error(err.response?.data || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const autoLogin = async () => {
//       const email = process.env.NEXT_PUBLIC_USER_AUTH_EMAIL;
//       const password = process.env.NEXT_PUBLIC_USER_AUTH_PASSWORD;
//       if (email && password) {
//         try {
//           await login(email, password);
//         } catch (err) {
//           console.error("Auto login failed:", err);
//         }
//       }
//     };
//     autoLogin();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loading, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }
