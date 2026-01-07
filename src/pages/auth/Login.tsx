import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import { Logo } from "../../components/ui/Logo";
import { TextInput } from "../../components/ui/TextInput";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { usersMock } from "../../mocks";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const foundUser = usersMock.find(
      (u) => u.user === user && u.password === password
    );

    if (!foundUser) {
      setError("Usuário ou senha inválidos");
      return;
    }

    login(foundUser);
    navigate("/today");
  }

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mt-6"
      >
        <Logo />

        <TextInput
          label="Usuário"
          icon="person"
          type="text"
          placeholder="John Alex"
          value={user}
          onChange={(e) => setUser(e.target.value)}
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
          <p className="text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        <PrimaryButton type="submit" disabled={!user.trim() || !password.trim()}>
          Entrar
          <span className="material-symbols-outlined text-xl">
            arrow_forward
          </span>
        </PrimaryButton>
      </form>
    </AuthLayout>
  );
}
