export default function ItemList({ tasks, setTasks }) {
  // Function to handle deleting a task by index
  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index); // Filter out the specified index data in task and update the task array
    setTasks(updatedTasks); // Update the tasks state
  }

  // Function created for checking/unchecking a task by it's index
  function handleCheckChange(index) {
    // Map through tasks to check value of task.check and change it
    setTasks((prevTasks) =>
      prevTasks.map((task, taskIndex) =>
        taskIndex === index ? { ...task, check: !task.check } : task
      )
    );
  }

  return (
    <table>
      <tbody className="task-list">
        {/* Render each task in a table row using index as key and tasks as values */}
        {tasks.map((task, index) => (
          <tr key={index} className="task-item">
            <td>
              <input
                type="checkbox"
                checked={task.check} // Set checkbox checked status based on task.check
                onChange={() => handleCheckChange(index)}
              />
            </td>
            <td
              style={{
                textDecoration: task.check ? "line-through" : "none", // Using conditional styling to apply line-through style if task is checked
              }}
            >
              {task.text}
            </td>
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
