import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const Header = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(false);

  const [btnStyle, setBtnStyle] = useState({
    name: "SHOW ADD TASK BAR",
    bgColor: "purple",
  });

  //? 📢 React doesn't update states instantly, it updates them in bulk. States are updated with async logic to avoid over-rendering

  //! By default, React may not change states immediately.   Batch updates states to reduce extra renders. Consecutive states in an event handler are updated collectively at the end of the event. The states are updated in order of arrival. It is necessary to pay attention to this when using interconnected states in the same event.

  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: "SHOW ADD TASK BAR",
        bgColor: "purple",
      });
    } else {
      setBtnStyle({
        name: "CLOSE ADD TASK BAR",
        bgColor: "red",
      });
    }
    setShow(!show);
  };

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button
        onClick={handleShow}
        className="btn"
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};

export default Header;
