import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase"; // Importe o cliente

import AuthLayout from "../../components/layout/AuthLayout";
import { Logo } from "../../components/ui/Logo";
import { TextInput } from "../../components/ui/TextInput";
import { PrimaryButton } from "../../components/ui/PrimaryButton";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Mudamos de user para email
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (authError) {
        console.log("Erro completo:", authError);
        throw authError;
      }

      if (data.user) {
        navigate("/today");
      }
    } catch (err: any) {
      setError("E-mail ou senha inválidos");
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
        <Logo />

        <TextInput
          label="E-mail"
          icon="mail"
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Senha"
          icon="lock"
          type="password"
          placeholder="••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-sm text-red-500 text-center bg-red-50 p-2 rounded">
            {error}
          </p>
        )}

        <PrimaryButton 
          type="submit" 
          disabled={!email.trim() || !password.trim() || loading}
        >
          {loading ? "Entrando..." : "Entrar"}
          {!loading && (
            <span className="material-symbols-outlined text-xl">
              arrow_forward
            </span>
          )}
        </PrimaryButton>
      </form>
    </AuthLayout>
  );
}