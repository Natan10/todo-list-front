import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';



const FormTask = (props) =>{

  const [name,setName] = useState('');
  const [priority,setPriority] = useState('');
  const [description,setDescription] = useState('');

  const create = () => 
    props.handleCreateTask(
      name,
      priority,
      description
    );
  

  return(
    <Form onSubmit={create}>
      <Form.Group controlId="form__name">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="name" placeholder="tarefa ..." onChange={(e) => setName(e.target.value) } />
      </Form.Group>
      <Form.Group controlId="form__priority">
        <Form.Label>Prioridade</Form.Label>
        <Form.Control as="select" onChange={(e)=> setPriority(e.target.value)}>
          <option value="urgente">urgente</option>
          <option value="moderado">moderado</option>
          <option value="relaxado">relaxado</option>
        </Form.Control>
      </Form.Group>       
      <Form.Group controlId="form__descript">
        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" rows="3" onChange={ (e)=> setDescription(e.target.value) } />
      </Form.Group>
      <Button variant="primary" type="submit">
        Criar
      </Button>
    </Form>
  )
}

export default FormTask;