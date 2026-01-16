import React, { useState, useEffect } from "react";

const MOCK_RESULTS = [
  { id: 1, name: "Julia Silva", handle: "@julia.s", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD00r-JDVq-poFz0ykc-LmauprGgAviEZAaplV9QL2wsU0iz3oyC7sAl6kAYjknbzUh7B5y1DjhM-zh0iE-1ADo8zagRVa_9baQLS3Q6MhIVwI0dZgpM2g8vI8G_sZBNwYAf6Lao1wGIogX5n2MiZHNlmh8ibfUgPT7OSDmkQiJ272QARkGw-6v2uQSABilIE2IBoGC3sIan6CtwIUw3v4msPdDpGUT2zUbJ3Y7Q8DRVSODMe1I45S9ZlOW1K_FUh-NsbzuWUKsSA", status: "idle" },
  { id: 2, name: "Marcos Oliveira", handle: "@marcos.o", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA46m9KNi6triiSJbe3Nq6CGWiYXkWyWSN2kisVxNoMb0MaJyk6CYsRvpV-tMbewlifjOkHM8A9sQ9-XTWPU4TRJmSCv97-RckXiLXyJ7sr3bn4TLiNg_G_ICJiIIQWig55Z-3yCOOS6ZIKFhcH_5u-DrqZA1VnReW7_46i9GqNvDbvUu-OclR84JgsjEiEcav6FRvd7i9pb2E2MDQqXCARC3ZByNqo0Setu7pUxxDNSPUBeoNywQ3XLepRsd0c1-CXH3GUfb44Aw", status: "loading" }, // Exemplo visual
  { id: 3, name: "Ana Costa", handle: "@ana.c", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDME_Mym1Sq0YaDHHOl8987_AhnJo1OYs1s1knMmoMIDl7tXKmWpSxXj8_D0JlOOYbVxgRwHlaRP-mHBWtJSJM5d--0MTi9PkS6VtEcrfL8Az2Kh6dF9CxEFQLYiWPoYjLHm_MrYZea8T7ifD2EX9FzN-6D7JSeTIl4vEXLP4q52sbXULysNHIepwZHZyIB0GNwsYBwjj14njQmP8TOCmjmofYKKbMuLWCsYY2Gd_zDFK4xOu3qTY7Pinu0YL2M_xzcraailkHoHA", status: "idle" },
];

type ConnectionType = "Amigo" | "Familia" | "Amor" | null;

interface AddConnectionScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddConnectionScreen({ isOpen, onClose }: AddConnectionScreenProps) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedType, setSelectedType] = useState<ConnectionType>("Amigo");
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleAddClick = (user: any) => {
    setSelectedUser(user);
    setShowConfirmModal(true);
  };

  const handleConfirmConnection = () => {
    console.log(`Conectado com ${selectedUser.name} como ${selectedType}`);
    setShowConfirmModal(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <div 
        className={`absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      <div 
        className={`
          relative w-full max-w-md mx-auto h-[85vh] bg-background-light dark:bg-background-dark 
          rounded-t-[32px] shadow-2xl overflow-hidden flex flex-col transition-transform duration-300 ease-out
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div 
            className="w-full flex justify-center pt-4 pb-2 cursor-pointer"
            onClick={onClose}
        >
            <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full opacity-60"></div>
        </div>

        <header className="px-6 pb-4 pt-2 text-center relative">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Adicionar conexão</h1>
        </header>

        <div className="px-6 py-2">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input 
              className="block w-full pl-12 pr-4 py-4 bg-surface-light dark:bg-surface-dark border-none rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-text-secondary focus:ring-2 focus:ring-primary/50 shadow-soft outline-none transition-all" 
              placeholder="Buscar por nome ou usuário" 
              type="text"
            />
          </div>
        </div>

        <div className="px-6 mt-4 mb-4 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Resultados</h3>
          <span className="text-xs font-bold text-primary dark:text-secondary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">
            {MOCK_RESULTS.length} encontrados
          </span>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-4 no-scrollbar">
          {MOCK_RESULTS.map((user) => (
            <div key={user.id} className="flex items-center p-4 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent hover:border-primary/20 transition-all">
              <div className="relative shrink-0">
                <img 
                  alt={user.name} 
                  className="h-14 w-14 rounded-full object-cover border-2 border-white dark:border-background-dark shadow-sm" 
                  src={user.img}
                />
                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-secondary border-2 border-white dark:border-background-dark rounded-full"></div>
              </div>
              
              <div className="ml-4 flex-1 min-w-0">
                <p className="text-base font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
                <p className="text-sm text-text-secondary dark:text-gray-400 truncate">{user.handle}</p>
              </div>

              {user.status === "loading" ? (
                 <button className="shrink-0 ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-surface-light dark:bg-background-dark border border-gray-200 dark:border-gray-700">
                    <span className="material-symbols-outlined text-[20px] text-text-secondary animate-spin">progress_activity</span>
                 </button>
              ) : (
                <button 
                  onClick={() => handleAddClick(user)}
                  className="shrink-0 ml-2 px-5 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white dark:text-secondary dark:hover:text-black font-semibold text-sm rounded-xl transition-colors duration-300"
                >
                  Adicionar
                </button>
              )}
            </div>
          ))}
        </div>

        {showConfirmModal && selectedUser && (
          <div className="absolute inset-0 z-50 flex flex-col justify-end bg-slate-900/20 dark:bg-black/40 backdrop-blur-[2px]">
            <div className="flex-1" onClick={() => setShowConfirmModal(false)}></div>
            
            <div className="w-full bg-surface-light dark:bg-surface-dark rounded-t-[32px] p-8 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] border-t border-white/40 dark:border-white/5 animate-slideUp">
              <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-6 opacity-60"></div>
              
              <div className="text-center mb-8">
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <div className="w-20 h-20 rounded-full p-1 border-2 border-primary overflow-hidden">
                    <img alt={selectedUser.name} className="w-full h-full rounded-full object-cover" src={selectedUser.img} />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-secondary rounded-full p-1 border-2 border-white dark:border-surface-dark">
                    <span className="material-symbols-outlined text-white text-[14px]">add</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-1">Definir tipo de conexão</h3>
                <p className="text-sm text-text-secondary dark:text-gray-400">Qual sua relação com {selectedUser.name.split(' ')[0]}?</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <ConnectionTypeButton 
                  type="Amigo" 
                  icon="sentiment_satisfied" 
                  selected={selectedType === "Amigo"} 
                  onClick={() => setSelectedType("Amigo")} 
                />
                <ConnectionTypeButton 
                  type="Familia" 
                  icon="diversity_1" 
                  selected={selectedType === "Familia"} 
                  onClick={() => setSelectedType("Familia")} 
                />
                <ConnectionTypeButton 
                  type="Amor" 
                  icon="favorite" 
                  selected={selectedType === "Amor"} 
                  onClick={() => setSelectedType("Amor")} 
                />
              </div>

              <button 
                onClick={handleConfirmConnection}
                className="w-full h-14 bg-primary text-white text-base font-bold rounded-2xl hover:bg-[#165860] active:scale-[0.98] transition-all flex items-center justify-center shadow-[0_8px_20px_rgba(31,111,120,0.25)]"
              >
                Confirmar conexão
              </button>
              <div className="h-2"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ConnectionTypeButton({ type, icon, selected, onClick }: { type: ConnectionType, icon: string, selected: boolean, onClick: () => void }) {
  if (selected) {
    return (
      <button onClick={onClick} className="relative flex flex-col items-center justify-center gap-3 p-4 rounded-3xl bg-secondary/15 border-2 border-secondary transition-all group">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white shadow-sm">
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
        <span className="text-sm font-bold text-slate-900 dark:text-white">{type}</span>
        <div className="absolute -top-2 -right-2 bg-secondary text-white rounded-full p-0.5 border-2 border-surface-light dark:border-surface-dark shadow-sm">
          <span className="material-symbols-outlined text-[16px] font-bold">check</span>
        </div>
      </button>
    );
  }

  return (
    <button onClick={onClick} className="flex flex-col items-center justify-center gap-3 p-4 rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-white/5 shadow-sm transition-all">
      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-text-secondary dark:text-gray-400 flex items-center justify-center">
        <span className="material-symbols-outlined text-[24px]">{icon}</span>
      </div>
      <span className="text-sm font-medium text-text-secondary dark:text-gray-400">{type === "Familia" ? "Família" : type}</span>
    </button>
  );
}