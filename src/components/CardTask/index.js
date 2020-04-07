import React from 'react';
import {Card,Button} from 'react-bootstrap';

import './style.css'

export default function CardTask(props){

  return(
    <Card className="card-task" >
      <Card.Body>
        <Card.Title>Nome</Card.Title>
        <Card.Text>
         Description
         <p>Status</p>
        </Card.Text>
        <Button variant="primary">Concluir</Button>
      </Card.Body>
    </Card>
  );
}