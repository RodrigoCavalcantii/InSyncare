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
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await fetchUserProfile(session.user);
      }
      setLoading(false);
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        await fetchUserProfile(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchUserProfile(supabaseUser: SupabaseUser) {
    const { data, error } = await supabase
      .from("profiles")
      .select("display_name,avatar_url")
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
    
    setLoading(false);
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