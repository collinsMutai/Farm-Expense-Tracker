import React from "react";
import "./Card.css";
import AddItem from "../AddItem/AddItem";
import Todo from "../Todo/Todo";

const Card = () => {
  return (
    <div>
      <div className="additem-todo-container">
        <Todo />
        <AddItem />
      </div>
      <div className="main">
        <div className="expense">
          <h2>Expenses Total: Kshs 3000</h2>
          <div className="select-month">
            <p>Select month</p>
            <select name="" id="">
              <option value="Jan">Jan</option>
              <option value="Jan">Feb</option>
              <option value="Jan">Mar</option>
            </select>
          </div>
          <div className="card">
            <h3 className="card-title">Name</h3>
            <h3 className="card-title">Amount</h3>
            <h3 className="card-title">Date</h3>
            <p>Seedlings</p>
            <p>Kshs 2000</p>
            <p>Feb 22 Thur 2024</p>
            <p>Seedlings</p>
            <p>Kshs 2000</p>
            <p>Feb 22 Thur 2024</p>
          </div>
        </div>
        <div className="expense">
          <h2>Income Total: Kshs 4000</h2>
          <div className="select-month">
            <p>Select month</p>
            <select name="" id="">
              <option value="Jan">Jan</option>
              <option value="Jan">Feb</option>
              <option value="Jan">Mar</option>
            </select>
          </div>
          <div className="card">
            <h3 className="card-title">Name</h3>
            <h3 className="card-title">Amount</h3>
            <h3 className="card-title">Date</h3>
            <p>Kales</p>
            <p>Kshs 2000</p>
            <p>Feb 22 Thur 2024</p>
            <p>Cabbage</p>
            <p>Kshs 2000</p>
            <p>Feb 22 Thur 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
