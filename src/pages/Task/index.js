import React, { useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,ButtonGroup,Button,ButtonToolbar} from 'react-bootstrap';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';


import './style.css'
import CardTask from '../../components/CardTask';

function Task(){
  const [tasks, setTasks] = useState([]);
  const [taskFilter, setFilterTasks] = useState([]);
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
     const response = await api.get('/tasks')
     setTasks(response.data);
     setFilterTasks(response.data); 
    } catch (error) {
      toast.error("Erro ao carregar tasks!")
    }
  },[]);



   const handleUpdate = async (state) => {
     try{ 
      await api.put(`tasks/${state.id}`,state);
      
    //  const updateTasks = tasks.map(item => 
    //    (item.id === state[0] ? { ...item, status: state[1] } : item));
    //  setTasks(updateTasks);
    //  setFilterTasks(updateTasks);

      toast.success("Task atualizada com sucesso!");
     }catch(error){
      toast.error("Erro ao atualizar a task!");
     }
   }  

   const handleDelete = async (id) => {
    try{ 
      await api.delete(`tasks/${id}`);
      const deleteTasks = tasks.filter(item => item.id !== id);
      setTasks(deleteTasks);
      setFilterTasks(deleteTasks);

      toast.success("Task deletada com sucesso!");
    }catch(error){
      toast.error("Erro ao deletar a task!");
    }
  } 

  const filterTask = (filterName) => {
    if(filterName === 'todas'){
      setFilterTasks(tasks);
    }else{
      const taskFilter = tasks.filter(task => task.priority === filterName)
      setFilterTasks(taskFilter);
    }
  }

  return(
    <>
     <Navbar fixed="top" variant="light" bg="light">
        <Navbar.Brand href="#home">Tasks</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
              logado como: <a href="#login">{localStorage.getItem("uid")}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div className="teste">
        <h1>Suas Tarefas</h1>
        <ButtonToolbar className="button_group"  aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button value="todas" onClick={(e)=>filterTask(e.target.value)} >Todas</Button>
            <Button value="relaxado" onClick={(e)=>filterTask(e.target.value)} >Relaxado</Button> 
            <Button value="moderado" onClick={(e)=>filterTask(e.target.value)} >Moderado</Button> 
            <Button value="urgente" onClick={(e)=>filterTask(e.target.value)} >Urgente</Button> 
            <Button>
              <Link to='/newtask'>
                Criar Tarefa 
              </Link>
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
        {
          taskFilter.map(task =>( 
                <CardTask key={task.id}
                          id={task.id} 
                          name={task.name} 
                          description={task.description}
                          state={task.status}
                          priority={task.priority}
                          handleUpdateTask={handleUpdate}
                          handleDeleteTask={handleDelete}
                          />
          ))
        }
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
      </div>
    </>
  );
}

export default Task;