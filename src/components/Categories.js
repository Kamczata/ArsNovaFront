import classes from "./Categories.module.css";
import { useState } from "react";

const Categories = (props) => {
  const onCategoryClickHandler = (event) => {
    props.onCategoryClick(event.target.id);
  };

  return (
    <div id={classes.parent}>
      {props.categories.map((category) => (
        <p
          onClick={onCategoryClickHandler}
          className={classes.child}
          key={category.id}
          id={category.id}
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};

export default Categories;
