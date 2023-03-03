import React from "react";
import classes from "./MealsItemForm.module.css";


function MealItemForm(props) {
  return (
    <form   className={classes.form}>
     
      <input
        label="Amount"
        input={{
          id: "amount" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></input>
    </form>
  );
};
export default MealItemForm;