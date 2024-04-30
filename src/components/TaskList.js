import React from "react";
import Task from "./Task"

function TaskList({tasks, removeTask, selectedCategory}) {


  const taskToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All"){
      return tasks
    }
    return task.category.toLowerCase().includes(selectedCategory.toLowerCase())
    })

  const task = taskToDisplay.map((task) => {
    return <Task key={task.text} task={task} removeTask={removeTask}/>
  })
  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
