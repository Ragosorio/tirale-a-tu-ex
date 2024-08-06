import { useState, useEffect } from "preact/hooks";

interface GameButtonProps {
    src: string;
    nombre: string;
    link: string;
    withFriends: Boolean;
  }

export function GameButton({src, nombre, link, withFriends}:GameButtonProps) {
  const [quitAnimation, setQuitAnimation] = useState(false);
  let param = "pareja"

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuitAnimation(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if(withFriends){
    param = "amigos"
  }

  return (
    <a
    href={`${link}/${param}`}
      class={`bg-[#0a0a0a] w-full h-24 md:h-60 rounded-md border border-[#242424] mb-7 ${
        quitAnimation ? "" : "animate-slide-up-fade"
      } transition ease-in-out delay-150 hover:scale-110 hover:border-[#2d2d2d] flex justify-center items-center`}
    >
      <img src={src} alt={nombre} class="w-1/3 p-1 max-h-full" />
      <p class="px-4 text-left text-pretty text-white text-sm w-2/3">
        {nombre}
      </p>
    </a>
  );
}
