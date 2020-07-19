import React, { useState } from 'react';
import {Card,Button} from 'react-bootstrap';
import api from '../../services/api';

import './style.css'

export default function CardTask({id,name,description,priority,state,handleUpdateTask,handleDeleteTask}){
 
  const email = localStorage.getItem('X-User-Email');
  const token = localStorage.getItem('X-User-Token');
  
  const [stateCard,setStateCard] = useState(state);
  
//  const handleOk = async () => {
//    try {
//      await api.put(`/tasks/${id}`,{
//        status: !state
//      },{
//        headers:{
//          'X-User-Email':email,
//          'X-User-Token':token
//        }
//      });
//      
//    } catch (error) {
//        alert('Erro ao atualizar Task'); 
//        console.log(error)  
//    }
//  }

  const handleClick = () => {
    setStateCard(!stateCard)
    handleUpdateTask([id,stateCard])
  }

  const handleDelete = () => handleDeleteTask(id);

  return(
    <Card className="card-task" >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>descrição: {description}</p>
          <p>prioridade: {priority}</p>
          <p>status: {state.toString()}</p>
        </Card.Text>
        <Button variant="danger"  onClick={()=> handleDelete() }>Excluir</Button>
        <Button variant="primary" onClick={()=> handleClick() }>Concluir</Button>
      </Card.Body>
    </Card>
  );
}