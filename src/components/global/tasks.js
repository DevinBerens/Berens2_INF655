import React from "react";
import Task from "./task";

let Tasks = (props) => {
  let { taskList } = props;

  if (!taskList.length) {
    return (
      <div className="sectionWrapper">No Tasks Available. Add a Task!</div>
    );
  } else {
    return (
      <div className="sectionWrapper">
        <h2>Task List</h2>
        {taskList.map((task, index) => (
          <Task
            key={task.id || task.title}
            title={task.title}
            description={task.description}
            index={index}
            {...props}
          />
        ))}
      </div>
    );
  }
};
export default Tasks;
