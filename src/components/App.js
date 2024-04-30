import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("")
 
  function removeTask(text){
    const removeTasks = tasks.filter((task) => task.text !== text)
    setTasks(removeTasks)
  }

  function onAdd(newTask){
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={category} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm category={category} onAdd={onAdd}/>
      <TaskList tasks={tasks} removeTask={removeTask} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
