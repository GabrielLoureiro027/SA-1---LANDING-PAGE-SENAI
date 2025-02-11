import React, { useState, useEffect } from 'react'
import db from '../database/db.json';

export default function CardCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(db.cursos);
  }, []);

  return (
    <div>
      <h1>teste</h1>
    </div>
  )
}
