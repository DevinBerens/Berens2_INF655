import React from "react";
import Tasks from "../global/tasks";

let TaskList = (props) => {
  return (
    <div className="pageContainer">
      <h2>Task List</h2>
      <Tasks {...props} />
    </div>
  );
};

export default TaskList;
