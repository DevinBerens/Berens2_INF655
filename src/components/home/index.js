import React from "react";
import Tasks from "../global/tasks";
import TaskForm from "../global/taskForm";
import Search from "../global/search";

let Home = (props) => {
  return (
    <div className="pageContainer">
      <h2>Task Manager Home</h2>
      <TaskForm {...props} />
      <Search {...props} />
      <Tasks {...props} />
    </div>
  );
};

export default Home;
