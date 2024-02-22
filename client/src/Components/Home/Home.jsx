import React from "react";
import "./Home.css";
import avatar from "../../Assets/avatar.png";

const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="avatar">
          <img src={avatar} alt="" />
          <p>Hello Admin</p>
        </div>
        <button className="logout-btn">Logout</button>
      </div>
      <div className="main">
        <div className="expense">
          <h2>Expenses Total: Kshs 3000</h2>
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

export default Home;
