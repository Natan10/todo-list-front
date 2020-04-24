import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar , Button} from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';


import './style.css'
import CardTask from '../../components/CardTask';

function Task(){

  const userEmail = localStorage.getItem('X-User-Email');

  return(
    <>
     <Navbar fixed="top" variant="light" bg="light">
        <Navbar.Brand href="#home">Tasks</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            logado como: <a href="#login">{userEmail}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div className="teste">
        <h1>Suas Tarefas</h1>
        <Link className='button' to='/newtask'>
          <FiPlus size={15} /> Criar Tarefa 
        </Link>
        <CardTask/>
        <CardTask/>
        <CardTask/>

      </div>
    </>
  );
}


export default Task;