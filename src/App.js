import './App.css';

function App() {

  let myName = 'Devin';

  let toDoList = [
    {
      id: 1,
      title: 'Homework',
      description: 'There are 3 assignments to do this week'
    },
    {
      id: 2,
      title: 'Wash dishes',
      description: 'You need to wash the dishes'
    },
    {
      id: 3,
      title: 'Do laundry',
      description: 'It is time to do laundry'
    }
  ];

  let generateTask = () => {
    let num = Math.floor(Math.random() * (toDoList.length));
    return toDoList[num].title;
  }

  return (
    <div className="app">
      My name is <h3>{myName}</h3> and the selected task to do is <h3>{generateTask()}</h3>
    </div>
  );
}

export default App;
