import React from 'react'

const CardProps = (props) => {
  return (
    <>
    <h1>{props.nome}</h1>
    <h3>{props.historia}</h3>
    <img src={props.img} alt="" />
    <h2>testendo</h2>
    </>
  );

}

export default CardProps
