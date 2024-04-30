import React from "react";

function CategoryFilter({category, setSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {category.map((categories) => {
        return <button key={categories} onClick={() => setSelectedCategory(categories)}>{categories}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
