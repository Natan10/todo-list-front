import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import FormTask from '../FormTask';

const  TaskModal = (props) => {


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
        <FormTask handleCreateTask={props.handleCreateTask} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TaskModal;