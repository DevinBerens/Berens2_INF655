import React from "react";
import TaskForm from "./taskForm";

let EditModal = (props) => {
  return (
    <div
      className="editModal"
      style={{
        minWidth: `calc(${window.innerWidth / 3}px)`,
        minHeight: `calc(${window.innerHeight / 3}px)`,
      }}
    >
      <TaskForm {...props} edit={true} />
    </div>
  );
};

export default EditModal;
