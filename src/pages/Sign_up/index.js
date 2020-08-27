import React, { useState } from 'react';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
import { useHistory,Link} from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

import api from '../../services/api';
import * as storage from '../../services/localStorage';
import verificationPassword from '../../utils/passwordVerification';

import './style.css';
import logo from '../../assets/icons/requirement.svg';
import background_image from '../../assets/fundo.png';


function Signup(){

  const history = useHistory();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [password_confirmation,setPasswordConfirmation] = useState('');
  const [labelPasswordError,setLabelPasswordError] = useState(false);


  async function handleSubmit(e){
    e.preventDefault();
    let aux = verificationPassword(password,password_confirmation);
    
    if(aux === true){
      try{
        const response = await api.post('/auth',{
          "email": email,
          "password": password,
          "password_confirmation":password_confirmation
        });
        storage.setAccessToken(response.headers['access-token']);
        storage.setClient(response.headers.client);
        storage.setUid(response.headers.uid);
        history.push('/');
        toast.success("Conta criada com sucesso!")
      }catch(e){
        toast.error("Erro ao criar conta, tente novamente!")
      }
    }else{
      setLabelPasswordError(true);
    } 
  }


  return(
    <div className="signup_logo-container">
      <img className="signup_background-image" src={background_image} alt="Background"/>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={4} className="coluna-signup">
            <div className="form-signup">
                <div className="signup_header">
                  <img src={logo} alt="logo" className="signup_header-logo"/>
                  <span>
                    Crie sua conta e cadastre suas tarefas
                  </span>
                </div>
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
                <Form.Group>
                  <div className="form-signup_label">
                    <Form.Label>Password Confirmation</Form.Label>
                  {labelPasswordError && <span>Senha incorreta</span>}
                  </div>
                  <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      onChange={(e)=> setPasswordConfirmation(e.target.value) } 
                  />
                </Form.Group>

                <Form.Group className="form-signup_footer">
                  <div className="label">
                    <Link to="/login">
                      <Form.Label>Entrar</Form.Label>
                    </Link>
                  </div>
                  <Button variant="success" type="submit">
                    Criar
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



export default Signup;