import classes from "./Categories.module.css";

const Categories = (props) => {
  return (
    <div id={classes.parent}>
      {props.categories.map((category) => (
        <p className={classes.child}>{category.name}</p>
      ))}
    </div>
  );
};

export default Categories;
