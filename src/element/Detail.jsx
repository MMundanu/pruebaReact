import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export const Detail = ({mostrar, pokemon, cerrar}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
  
        <Modal
          show={mostrar}
          onHide={cerrar}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header  closeButton>
            <Modal.Title>{pokemon.name}</Modal.Title>
          </Modal.Header>
          <div className='modalContainerImg'>
            <img src={pokemon.img} alt="" />
          </div>
          <Modal.Body className='modalBody'>
            
              <span>Habilidades: </span> 
              <ul> {pokemon.abilities?.map(habilidad => <li>{habilidad}</li>)}
              </ul>
              <span>Peso: {pokemon.weight}</span>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrar}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

