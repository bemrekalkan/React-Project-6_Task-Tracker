import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  //? 📢 React doesn't update states instantly, it updates them in bulk. States are updated with async logic to avoid over-rendering
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button onClick={handleShow} className="btn">
        SHOW ADD TASK BAR
      </button>
      {show && <AddTaskForm />}
    </header>
  );
};

export default Header;
