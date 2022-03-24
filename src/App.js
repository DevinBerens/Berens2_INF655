import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";

let Home = loadable(() => import("./components/home"));
let TaskList = loadable(() => import("./components/taskList"));
let About = loadable(() => import("./components/about"));
let LeftNav = loadable(() => import("./components/leftNav"));

function App() {
  let [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let list = localStorage.getItem("taskList");
    list = JSON.parse(list);
    if (list) {
      setTaskList(list);
    }
  }, []);

  let updateList = useCallback(
    (list) => {
      localStorage.removeItem("taskList");
      localStorage.setItem("taskList", JSON.stringify(list));
      setTaskList(list);
    },
    [taskList]
  );

  return (
    <>
      <h1 className="appHeader">Welcome to the Task Manager</h1>
      <div className="appBody">
        <LeftNav />
        <Routes>
          <Route
            path="/"
            exact={true}
            element={<Home taskList={taskList} setTaskList={updateList} />}
          />
          <Route
            path="/tasklist"
            exact={true}
            element={<TaskList taskList={taskList} setTaskList={updateList} />}
          />
          <Route path="/about" exact={true} element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
