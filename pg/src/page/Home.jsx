import React from "react";
import MostrarCursos from "../components/MostrarCursos";



export default function Home() {
  return (
    <div>
        <div>
            <h1>Cursos</h1>
            <h1 id="AreaCursos"></h1>
            <MostrarCursos />
        </div>
    </div>
  );
}
