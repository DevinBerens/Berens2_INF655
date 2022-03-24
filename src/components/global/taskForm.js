import React, { useState, useCallback } from "react";

let TaskForm = (props) => {
  let { taskList, setTaskList, edit, closeTask, index } = props;
  let [title, setTitle] = useState(props.title || "");
  let [description, setDescription] = useState(props.description || "");

  let handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (edit) {
        let temp = taskList.slice();
        temp.splice(index, 1, { title, description });
        setTaskList(temp);
        setTitle("");
        setDescription("");
      } else {
        setTaskList([...taskList, { title, description }]);
        setTitle("");
        setDescription("");
      }
      closeTask && closeTask();
    },
    [title, description]
  );

  return (
    <div className="sectionWrapper">
      <h2 className="formTitle"> {edit ? "Edit" : "Add"} Task</h2>
      <form
        className="formWrapper"
        style={{ width: edit ? "70%" : "40%" }}
        onSubmit={handleSubmit}
      >
        <input
          className="formItem"
          placeholder="Task Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          rows={3}
          className="formItem"
          placeholder="Task Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit" className="formItem">
          {edit ? "Save" : "Add"} Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
