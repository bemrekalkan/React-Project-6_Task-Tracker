import React from "react";
import Header from "../components/Header";
import ShowTask from "../components/ShowTasks";
import { useState } from "react";
import data from "../helper/starterData";

const Home = () => {
  const [tasks, setTasks] = useState(data);
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTask />
    </div>
  );
};

export default Home;
