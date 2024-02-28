import React from "react";
import "./Home.css";
import avatar from "../../Assets/avatar.png";
import Card from "../Card/Card";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="container">
      <Sidebar avatar={avatar} />
      <Card />
    </div>
  );
};

export default Home;
