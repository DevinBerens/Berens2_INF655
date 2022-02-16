import './App.css';
import React, {useState} from 'react';
import TaskData from './components/TaskData'
import Tasks from './components/Tasks';

function App() {
  let [taskList, setTaskList] = useState(TaskData);

  return (
    <div className="app">
      <h1>Welcome to the Task Manager</h1>
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default App;
