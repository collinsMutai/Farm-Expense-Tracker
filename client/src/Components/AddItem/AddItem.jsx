import React from "react";
import "./AddItem.css";

const AddItem = () => {
  return (
    <div className="form">
      <h2>Add Expense/Income</h2>
      <div className="input-field">
        <label htmlFor="">Add Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className="input-field">
        <label htmlFor="">Add Amount</label>
        <input type="text" placeholder="Amount" />
      </div>
      <div className="input-field">
        <label htmlFor="">Select Date</label>
        <input type="date" placeholder="Amount" />
      </div>
      <div className="input-field checkboxes">
        <label htmlFor="">Select Expense or Income?</label>
        <div>
          <label htmlFor="expense">Expense</label>
          <input type="checkbox" name="expense" />
          <label htmlFor="income">Income</label>
          <input type="checkbox" name="income" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AddItem;
