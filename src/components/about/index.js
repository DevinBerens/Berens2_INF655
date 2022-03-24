import React from "react";

let About = (props) => {
  return (
    <div className="pageContainer">
      <h2>About Task Manager</h2>
      <div className="sectionWrapper">
        <p>
          Welcome to my task manager project! This is an application I am
          building for INF655. This application is built using React hooks and
          makes use of several npm packages including lodash, react-router-dom,
          and @loadable/component. This application contains 3 main pages: Home,
          About, and Task List.
        </p>
        <p>
          The home page allows the user to add tasks, search tasks, and shows
          the task list. For each task in the task list, the user can edit /
          delete it. The about page gives a brief explanation of the application
          and the features it consists of. The task list page shows the entire
          list of tasks and allows the user to edit / delete each individual
          task.
        </p>
      </div>
    </div>
  );
};

export default About;
