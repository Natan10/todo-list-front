import React, { useState } from 'react';
import {Card,Button} from 'react-bootstrap';

import './style.css'

export default function CardTask({id,name,description,priority,state,handleUpdateTask,handleDeleteTask}){
 
  const [stateCard,setStateCard] = useState(!state);

  
  const handleClick = () => {
    
    setStateCard(!stateCard)
    handleUpdateTask({
      id,
      name,
      description,
      status:stateCard,
      priority
    })
  }

  const handleDelete = () => handleDeleteTask(id);

  return(
    <Card className="card-task" >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>descrição: {description}</p>
          <p>prioridade: {priority}</p>
          <p>status: {(!stateCard).toString()}</p>
        </Card.Text>
        <Button variant="danger"  onClick={()=> handleDelete() }>Excluir</Button>
        <Button variant="success" onClick={()=> handleClick() }>Concluir</Button>
      </Card.Body>
    </Card>
  );
}