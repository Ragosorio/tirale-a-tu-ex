import { useState, useEffect } from "preact/hooks";
import {
  preguntasPareja,
  preguntasAmigos,
} from "@/components/preguntas/Preguntas";
import { BackToHomeButton } from "@/components/BackToHomeButton";

interface Settings {
  modo: string;
}

function shuffleArray(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function Juego({ modo }: Settings) {
  const [preguntas, setPreguntas] = useState<string[]>([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    let preguntasList: string[] = [];

    if (modo === "amigos") {
      preguntasList = preguntasAmigos;
    } else if (modo === "pareja") {
      preguntasList = preguntasPareja;
    }

    setPreguntas(shuffleArray(preguntasList));
  }, [modo]);

  const siguientePregunta = () => {
    setIndice((prevIndice) => (prevIndice + 1) % preguntas.length);
  };

  const anteriorPregunta = () => {
    setIndice((prevIndice) => (prevIndice - 1) % preguntas.length);
  };

  const preguntaActual = preguntas[indice] || "";

  return (
    <main class="flex flex-col w-8/12">
      <BackToHomeButton />
      <p class="text-white text-pretty text-center h-20">{preguntaActual}</p>
      <div className="flex flex-row justify-between items-center mt-10">
        <button onClick={anteriorPregunta} class="text-white border border-whiite rounded-md py-3 px-7 text-xs hover:bg-white hover:text-black">
          Anterior
        </button>
        <button onClick={siguientePregunta} class="text-white border border-whiite rounded-md py-3 px-7 text-xs hover:bg-white hover:text-black">
          Siguiente
        </button>
      </div>
    </main>
  );
}
