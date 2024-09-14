/* Import section */
import "./styles.css";
import Tasks from "./components/ItemsList.jsx";
import { useState } from "react";

/*App section*/
export default function App() {
  const [quest, setQuest] = useState(""); // State to store the current value of the input field
  const [tasks, setTasks] = useState([]); // State to store the list of tasks

  // Function to handle adding a new task
  function handleQuestChange() {
    //Chceck if user didn't entered empty value or only spaces
    //If not add new task and clear user input
    if (quest.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, { text: quest, check: false }]);
      setQuest("");
    }
  }

  return (
    <div className="container">
      <h1>Today's tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Add task"
          className="main-input"
          value={quest}
          onChange={(event) => setQuest(event.target.value)}
        />
        <button className="submit-task" onClick={handleQuestChange}>
          +
        </button>
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
