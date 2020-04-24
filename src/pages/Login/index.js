import React, { useState } from 'react';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';
import logo from '../../assets/logo.png';

function Login(){

  const history = useHistory();

  const [email,setEmail] = useState('');
  const [token,setToken] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    const data = {
      email,
      token
    }

    try{
      const response = await api.get('/session',{
        headers: {
          'X-User-Email':data.email,
          'X-User-Token':data.token,
        }
      });
      
      if(response.data.login == 'ok') {
        localStorage.setItem('X-User-Email',data.email);
        localStorage.setItem('X-User-Token',data.token);
        history.push('/task');
      }
    }catch(e){
      alert('Erro ao logar!')
    }
  }


  return(
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={4} className="coluna-login">
          <div className="form-login">
          <img src={logo} alt="logo" />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value) } />
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Token</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=> setToken(e.target.value) } />
              </Form.Group>
              <Button variant="success" size="md" block type="submit">
                Entrar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}



export default Login;