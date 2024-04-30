import React, {useState} from "react";

function NewTaskForm({category, onAdd}) {
  const newCategories = category.slice(1, 5)
  // console.log(newCategories)
  const [details, setDetails] = useState("")
  const [selectCategory, setCategory] = useState("")

  function onTaskFormSubmit(e){
    e.preventDefault()
    const newTask = {
      text: details,
      category: selectCategory
    }
    onAdd(newTask)

  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e)=> setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={selectCategory} onChange={()=> setCategory(e.target.value)}>
          {newCategories.map((categories) => {
            return <option key={categories}>{categories}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
