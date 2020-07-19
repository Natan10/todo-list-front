import React,{useState} from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.css';


export default function NewTask(){

  const history = useHistory();

  const [name,setName] = useState('');
  const [priority,setPriority] = useState('');
  const [description,setDescription] = useState('');

  async function handleCreate(e){
    e.preventDefault();

    const data = {
      name,
      priority,
      description,
      status: false
    }

    try {
      const response = await api.post('/tasks',data,{
        headers:{
          'X-User-Email': localStorage.getItem('X-User-Email'),
          'X-User-Token': localStorage.getItem('X-User-Token'),
        }
      });

      history.push('/task');
    } catch (error) {
      alert('Erro ao criar task.');
    }

  }


  return(
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={4} className="coluna-task">
          <div className="form-task">
            <h1>Nova Tarefa</h1>
            <Form onSubmit={handleCreate}>
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
          </div>
        </Col>
      </Row>
    </Container>
  );

}