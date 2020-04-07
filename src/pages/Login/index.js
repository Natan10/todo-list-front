import React, { useState } from 'react';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';

import './style.css';
import logo from '../../assets/logo.png';

function Login(){

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    alert(`email: ${email} senha:${password}`)
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
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value) } />
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