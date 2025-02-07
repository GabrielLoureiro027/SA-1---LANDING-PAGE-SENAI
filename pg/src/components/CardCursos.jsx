import React, { useState, useEffect } from 'react';
import db from '../db.json';

export default function CardCursos() {
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState(null);

  useEffect(() => {
    setCursos(db.cursos);
  }, []);

  const handleShowDetails = (curso) => {
    setSelectedCurso(curso);
  };

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            {curso.nome}
            <button onClick={() => handleShowDetails(curso)}>Mostrar Detalhes</button>
          </li>
        ))}
      </ul>
      {selectedCurso && (
        <div>
          <h2>Detalhes do Curso</h2>
          <p>Nome: {selectedCurso.nome}</p>
          <p>Descrição: {selectedCurso.descricao}</p>
          <p>Duração: {selectedCurso.duracao}</p>
        </div>
      )}
    </div>
  );
}


