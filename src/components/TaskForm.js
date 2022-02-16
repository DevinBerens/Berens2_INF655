import React, {useState, useCallback} from 'react';

let TaskForm = (props) => {
    let [input, setInput] = useState('');

    let addTask = useCallback(() => {
        props.setTaskList([...props.taskList, {title: input}])
        setInput('')
    }, [input])

    return (
        <div>
            <input value={input} onChange={(e) => {setInput(e.target.value)}} />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default TaskForm;