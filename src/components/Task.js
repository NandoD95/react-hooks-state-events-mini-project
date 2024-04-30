import React from "react";

function Task({task, removeTask}) {

function handleClick(){
  removeTask(task.text)

}

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
