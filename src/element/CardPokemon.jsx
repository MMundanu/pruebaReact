import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Detail } from './Detail';

export const CardPokemon = ({id, name, img, weight, verPokemon}) => {
    return (

      <div className='cardContainer'>
        <Card style={{ width: '100%' }}>
          <Card.Img className='cardImg' variant="top" src={img} />
          <Card.Body className='cardBody'>
            <Card.Title>{name}</Card.Title>
            <Button variant="primary" onClick={verPokemon}>Detalle</Button>
          </Card.Body>
        </Card>
      </div>
        
      );
}
