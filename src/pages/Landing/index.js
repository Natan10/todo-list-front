import React from 'react';
import {Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {GoTasklist} from 'react-icons/go';

import './style.css';
import background_image from '../../assets/fundo.png';

export default function Landing() {
  return (
    <div className="container_landing">
      <img className="landing_background-image" src={background_image} alt="background image"/>
      <Container className="landing_content">
        <div className="landing_body">
          <div className="landing_body-header">
            <span>Task list</span> 
            <GoTasklist size={70}/>     
          </div>
          <h2>Cadastre suas Tarefas e não perca mais tempo!</h2>
          <div className="landing_buttons">
            <Link to="/login">
              <Button variant="success">Entrar</Button>
            </Link>
            <Link to="/sign_up">
              <Button variant="primary">Cadastra-se</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
