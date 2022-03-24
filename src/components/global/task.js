import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditModal from "./editModal";

export default function Task(props) {
  let { title, description, taskList, setTaskList, index } = props;

  let [showEditModal, setShowEditModal] = useState(false);

  //pop open a modal to edit the task
  let editTask = useCallback(() => {
    setShowEditModal(true);
  }, []);

  // close the modal
  let closeTask = useCallback(() => {
    setShowEditModal(false);
  }, []);

  // delete the selected task
  let deleteTask = useCallback(() => {
    let temp = taskList.slice();
    temp.splice(index, 1);
    setTaskList(temp);
  }, [taskList]);

  return (
    <div className="taskWrapper">
      <div className="taskInfo">
        <div className="taskTitle">{title}</div>
        {description && <div className="taskDescription">{description}</div>}
      </div>
      <FontAwesomeIcon
        className="editTask icon"
        onClick={editTask}
        icon={faPencil}
      />
      <FontAwesomeIcon
        className="deleteTask icon"
        onClick={deleteTask}
        icon={faTrash}
      />
      {showEditModal && <EditModal {...props} closeTask={closeTask} />}
    </div>
  );
}
