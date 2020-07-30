import React,{useState} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
import { toast } from 'react-toastify';

import api from '../../services/api';

const  TaskModal = (props) => {
  const [name,setName] = useState('');
  const [priority,setPriority] = useState('');
  const [description,setDescription] = useState('');



  const handleCreateTask = async (e) => {
    e.preventDefault();
    
    const data = {
      name,
      priority,
      description,
      status: false
    }

    try {
      await api.post('/tasks',data);
      
      props.setModalShow(false)
      toast.success("Task criada com sucesso!")
    } catch (error) {

      props.setModalShow(false)
      toast.error("Erro ao criar task!")
    }
  }


  return(
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.modalShow || false} 
      onHide={() => props.setModalShow(false)}
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nova Tarefa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <Form.Control as="textarea" rows="3" onChange={ (e)=> setDescription(e.target.value) }  />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <form onSubmit={handleCreateTask} >
          <Button variant="primary" type="submit">
            Criar
          </Button>
        </form>
        <Button onClick={()=>props.setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TaskModal;