import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { User as SupabaseUser } from "@supabase/supabase-js";

export type UserProfile = {
  avatar_url: string | undefined;
  id: string;
  email: string;
  name: string;
};

type AuthContextType = {
  user: UserProfile | null;
  loading: boolean;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (session) {
          await fetchUserProfile(session.user);
        } else {
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };
  
    initializeAuth();
  }, []);
  
  async function fetchUserProfile(supabaseUser: any) {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("display_name, avatar_url")
        .eq("id", supabaseUser.id)
        .single();
  
        if (error) {
          console.warn("Perfil não encontrado, usando dados básicos.");
        }
  
      setUser({
        id: supabaseUser.id,
        email: supabaseUser.email || "",
        name: data?.display_name || "Usuário",
        avatar_url: data?.avatar_url || "",
      });
    } catch (err) {
      console.log("LOG 8: Erro no catch do fetchUserProfile:", err);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
export { AuthContext }; 
export default AuthProvider;