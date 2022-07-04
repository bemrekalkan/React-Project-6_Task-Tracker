import React from "react";
import Header from "../components/Header";
import ShowTask from "../components/ShowTasks";
import { useState, useEffect } from "react";
// import data from "../helper/starterData";

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTask />
    </div>
  );
};

export default Home;
