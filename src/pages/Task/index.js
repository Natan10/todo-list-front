import React, { useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ButtonGroup,Button,ButtonToolbar,Modal,Form} from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import api from '../../services/api';

import NavbarTop from '../../components/Navbar';
import CardTask from '../../components/CardTask';
import TaskModal from '../../components/TaskModal';




function Task(){
  const [tasks, setTasks] = useState([]);
  const [taskFilter, setFilterTasks] = useState([]);
  const [modalShow,setModalShow] = useState(false);
  
  
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


   const handleCreateTask = (data) =>{
     console.log(data)
   }


   const handleUpdate = async (state) => {
     try{ 
      await api.put(`tasks/${state.id}`,state);
    
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
     
      <NavbarTop uid={localStorage.getItem("uid")} />
      <div className="teste">
        <h1>Suas Tarefas</h1>
        <ButtonToolbar className="button_group"  aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button value="todas" onClick={(e)=>filterTask(e.target.value)} >Todas</Button>
            <Button value="relaxado" onClick={(e)=>filterTask(e.target.value)} >Relaxado</Button> 
            <Button value="moderado" onClick={(e)=>filterTask(e.target.value)} >Moderado</Button> 
            <Button value="urgente" onClick={(e)=>filterTask(e.target.value)} >Urgente</Button> 
            <Button onClick={() => setModalShow(true)}>
              {/*<Link to='/newtask'>
                Criar Tarefa 
            </Link>*/}
              Criar Tarefa
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
      <ModalTask show={modalShow} onHide={()=> setModalShow(false)} handleCreatePoha={handleCreateTask}/>
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


const ModalTask = (props) => {

  const [name,setName] = useState('');
  const [priority,setPriority] = useState('');
  const [description,setDescription] = useState('');

  const handleCreateTask = () => {
    props.handleCreatePoha({name,priority,description})
  }
  console.log(props)
  return(
  <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nova Tarefa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCreateTask}>
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
          <Button variant="primary" type="submit">
            Criar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>)
}

export default Task;