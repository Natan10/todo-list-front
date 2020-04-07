import React from 'react';
import {Navbar , Button} from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';


import './style.css'
import CardTask from '../../components/CardTask';

function Task(){
  return(
    <>
     <Navbar variant="light" bg="light">
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div className="teste">
        <h1>Suas Tarefas</h1>
        <Button variant="dark">
        <FiPlus size={15} /> Criar Tarefa 
        </Button>
        <CardTask/>
        <CardTask/>
        <CardTask/>
        <CardTask/>
      </div>
    </>
  );
}


export default Task;