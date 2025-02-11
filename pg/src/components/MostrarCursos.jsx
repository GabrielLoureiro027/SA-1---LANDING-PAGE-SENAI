import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import db from '../database/db.json';
import { Link } from 'react-router-dom';



export default function MostrarCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(db.cursos);
  }, []);

  return (
    <div style={{display:'flex', justifyContent: 'center',}}>
      {cursos.map((curso, index) => (  
        <Card id='cartao' key={index} style={{ width: "18rem", marginBottom: "20px", backgroundColor: "", padding:"0px 20px"}}>
          <Card.Img 
            variant="top" 
            src={curso.foto}
            style={{ width: '100%', height: 'auto' }} 
          />
          <Card.Body>
            <Card.Title>{curso.nome}</Card.Title>  
            <Card.Text>
              {curso.historia}
            </Card.Text>
            <Link to={`/curso/${curso.nome}/${curso.id}`}>
            <Button variant="primary" to={`/curso/${curso.nome}/${curso.id}`}
            style={{padding: "8px 60px" }}>Ir</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
