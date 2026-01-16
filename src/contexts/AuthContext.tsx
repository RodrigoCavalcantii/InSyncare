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

  async function fetchUserProfile(supabaseUser: SupabaseUser) {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("display_name, avatar_url")
        .eq("id", supabaseUser.id)
        .single();

      const profile = {
        id: supabaseUser.id,
        email: supabaseUser.email || "",
        name: data?.display_name || "Usuário",
        avatar_url: data?.avatar_url || "",
      };

      setUser(profile);
      return profile;
    } catch (err) {
      console.error("Erro ao buscar perfil:", err);
      return null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const initialize = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await fetchUserProfile(session.user);
      } else {
        setLoading(false);
      }
    };
    initialize();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Evento de Auth: ${event}`);

      if (event === "SIGNED_IN" && session) {
        await fetchUserProfile(session.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

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
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext };
export default AuthProvider;