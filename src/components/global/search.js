import React, { useEffect, useState } from "react";
import { filter } from "lodash";
import Task from "./task";

let Search = (props) => {
  let { taskList, index } = props;
  let [search, setSearch] = useState("");
  let [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (search) {
      let temp = filter(taskList, (task) => {
        return (
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase())
        );
      });
      setFilteredTasks(temp);
    } else {
      setFilteredTasks([]);
    }
  }, [search, taskList]);

  return (
    <div className="sectionWrapper">
      <h2>Search for Task in Task List</h2>
      <input
        className="search"
        style={{ width: "40%" }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search Task"
      />
      {filteredTasks.length
        ? filteredTasks.map((task) => (
            <Task
              key={task.id || task.title}
              title={task.title}
              description={task.description}
              index={index}
              {...props}
            />
          ))
        : null}
    </div>
  );
};

export default Search;
