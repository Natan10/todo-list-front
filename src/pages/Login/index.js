import React, { useState } from 'react';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import { useHistory,Link} from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

import api from '../../services/api';
import * as storage from '../../services/localStorage';

import './style.css';
import logo from '../../assets/logo.png';
import background_image from '../../assets/fundo.png';


function Login(){

  const history = useHistory();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const response = await api.post('auth/sign_in',{
        "email": email,
        "password": password,
      });
      storage.setAccessToken(response.headers['access-token']);
      storage.setClient(response.headers.client);
      storage.setUid(response.headers.uid);
      history.push('/task');
      toast.success("Login efetuado com sucesso!")
    }catch(e){
      toast.error("Erro ao logar, tente novamente!")
    }
  }


  return(
    <div className="login_logo-container">
      <img className="login_background-image" src={background_image} alt="Background"/>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={4} className="coluna-login">
            <div className="form-login">
            <img src={logo} alt="logo" />
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value) } />
                </Form.Group>
    
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      onChange={(e)=> setPassword(e.target.value) } 
                  />
                </Form.Group>
                <Form.Group className="form-login_footer">
                  <div className="label">
                    <Link to="/sign_up">
                      <Form.Label>Criar conta</Form.Label>
                    </Link>
                  </div>
                  <Button variant="success" type="submit">
                    Entrar
                  </Button>
                </Form.Group>    
              </Form>
            </div>
          </Col>
        </Row>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
      </Container>
    </div>
    
  );
}



export default Login;