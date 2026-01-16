import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden pb-10 bg-background-light dark:bg-background-dark font-display antialiased">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-6 pb-2 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-primary dark:text-accent-green">
            arrow_back_ios_new
          </span>
        </button>
        <h2 className="text-primary dark:text-white text-xl font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Perfil
        </h2>
      </header>

      <div className="flex p-6 mt-2">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="relative">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 ring-4 ring-accent-green/30 shadow-inner flex items-center justify-center bg-gray-200 dark:bg-zinc-800"
              style={{
                backgroundImage: user?.avatar_url
                  ? `url("${user.avatar_url}")`
                  : "none",
              }}
            >
              {!user?.avatar_url && (
                <span className="text-2xl font-bold text-primary/40 uppercase">
                  {user?.name ? getInitials(user.name) : "?"}
                </span>
              )}
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-4 border-background-light dark:border-background-dark cursor-pointer hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[16px]">
                photo_camera
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-primary dark:text-white text-xl font-extrabold leading-tight tracking-tight">
              {user?.name || "Carregando..."}
            </p>
            <p className="text-secondary-grey dark:text-accent-green/70 text-sm font-medium">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3 mt-4">
        <p className="text-primary/60 dark:text-white/40 text-[10px] font-bold uppercase tracking-widest ml-1 mb-1">
          Configurações
        </p>
        <ProfileMenuItem icon="person_edit" label="Editar Perfil" />
        {/* <ProfileMenuItem icon="notifications" label="Notificações" />
          <ProfileMenuItem icon="shield_person" label="Privacidade" /> */}
        <ProfileMenuItem icon="help_center" label="Ajuda e Suporte" />
      </div>

      <div className="px-6 pt-8 pb-10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-accent-coral/10 hover:bg-accent-coral/20 text-accent-coral p-4 rounded-xl transition-colors font-bold text-base border border-accent-coral/20 active:scale-[0.98]"
        >
          <span className="material-symbols-outlined">logout</span>
          Sair
        </button>

        <div className="mt-8 flex flex-col gap-1 opacity-40">
          <p className="text-center text-secondary-grey text-[9px] font-medium tracking-wide uppercase">
            InSyncare v2.4.0 • Built by @rodrigo_cavalcantii
          </p>
          <p className="text-center text-secondary-grey text-[8px] font-medium tracking-wide">
            @rodrigo_cavalcantii
          </p>
        </div>
      </div>

      <div className="h-6 shrink-0"></div>
    </div>
  );
}

function ProfileMenuItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-zinc-900/50 p-4 rounded-xl shadow-sm active:scale-[0.98] transition-all cursor-pointer border border-transparent">
      <div className="text-primary bg-primary/10 dark:bg-primary/20 flex items-center justify-center rounded-lg shrink-0 size-10">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div className="flex flex-1 items-center justify-between overflow-hidden">
        <p className="text-primary dark:text-white text-sm font-semibold truncate">
          {label}
        </p>
        <span className="material-symbols-outlined text-secondary-grey/50 text-[20px]">
          chevron_right
        </span>
      </div>
    </div>
  );
}
