import React, {useCallback, useState} from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

let Tasks = (props) => {


    if (!props.taskList) {
        return <div>No Tasks Available</div>
    } else {
        return (
            <div className="app">
              Welcome Devin! <br /><br />
              The tasks are 
              {props.taskList.map((task) => (
                  <Task key={task.id || task.title} title={task.title} description={task.description} />
              ))}
              <br />
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
              <TaskForm taskList={props.taskList} setTaskList={props.setTaskList} />
              </div>
            </div>
          );
    }
}
export default Tasks;