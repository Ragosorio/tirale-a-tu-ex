import { useState, useEffect } from "preact/hooks";
import { GameButton } from "@/components/Extras";

export function Inicio() {
  const [showMenu, setShowMenu] = useState(false);
  const [withFriends, setWithFriends] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCheckboxChange = (event: any) => {
    setWithFriends(event.target.checked);
  };

  const PrimaryText = (
    <>
      <h1 class="text-white text-3xl font-semibold">Tirale a tu ex</h1>
      <span class="text-white text-sm font-light">By ragosorio</span>
    </>
  );

  const Menu = (
    <main class="flex flex-col w-8/12">
      <h2 class="text-[#ededed] font-bold text-3xl text-center mb-16 animate-zoom-in">
        Elige un juego
      </h2>
      <GameButton src="/que-siente.webp" nombre="Preguntas" link="/preguntas" withFriends={withFriends}/>
      <GameButton src="/retos.webp" nombre="Ruleta de retos" link="/retos" withFriends={withFriends}/>
      <GameButton src="/ahorcado.webp" nombre="Ahorcado" link="/ahorcado" withFriends={withFriends}/>
      <label class="inline-flex items-center mb-5 cursor-pointer animate-zoom-in">
        <input
          type="checkbox"
          class="sr-only peer"
          checked={withFriends}
          onChange={handleCheckboxChange}
        />
        <div class="relative w-11 h-6 rounded-full bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all border-gray-600 peer-checked:bg-blue-600 peer-disabled:bg-gray-500 peer-disabled:focus:ring-gray-400"></div>
        <span class="ms-3 text-sm font-medium text-gray-300">
          ¿Activar modo amigos?
        </span>
      </label>
    </main>
  );

  return showMenu ? Menu : PrimaryText;
}
