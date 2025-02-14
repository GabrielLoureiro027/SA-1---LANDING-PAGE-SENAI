import CardProps from '../../props/CardProps';
import db from '../database/db.json';
import { useEffect,useState } from 'react';

const CardCursos = () => {

const [cursos, setCursos] = useState([]);
  useEffect(() => {
    setCursos(db.cursos);
  }, []);

  return (
    <>
        {cursos.map((curso,) => (
          <CardProps />
        ))}
      </>
    )
}

export default CardCursos