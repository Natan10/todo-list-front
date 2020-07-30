import React from 'react'
import PropTypes from 'prop-types';
import CardTask from '../CardTask';

const TaskList = ({taskFilter,handleUpdate,handleDelete}) => {

  return (
    <>
      {taskFilter.map(task =>( 
        <CardTask key={task.id}
                  id={task.id} 
                  name={task.name} 
                  description={task.description}
                  state={task.status}
                  priority={task.priority}
                  handleUpdateTask={handleUpdate}
                  handleDeleteTask={handleDelete}
                  />
          ))}
    </>
  )
}

TaskList.propTypes = {
  taskFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
}


export default TaskList;