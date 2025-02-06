import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import CursosData from '../database/db.json';

export default function CardCursos() {

  const [cursos, setCursos] = useState([]);
 
  useEffect(() => {
    setCursos(CursosData.cursos); 
  }, []);  

  return (
    <div>
      <h1>Cursos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cursos.map((curso, index) => (
          <Card key={index} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{curso.nome}</Card.Title>
              <Card.Text>
                <h5>Cidade: {curso.cidade}</h5>
                <h5>Duração: {curso.duracao} horas</h5>
                <h5>Turno: {curso.turno}</h5>
                <h5>Modalidade: {curso.modalidade}</h5>
                <h5>Data de Início: {curso.data}</h5>
              </Card.Text>
              <Button variant="primary">Ir</Button>
            </Card.Body>
          </Card>
        ))}

        
      </div>
    </div>
  );
}
