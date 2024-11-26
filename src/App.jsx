import React, { useState } from "react";
function App() {
  const [works, setWorks] = useState([]);
  const [newwork, setNewwork] = useState("");

  const addTask = () => {
    if (newwork.trim()) {
      setWorks([
        ...works,
        { id: Date.now(), text: newwork.trim(), completed: false },
      ]);
      setNewwork(""); // To'g'ri nomda o'zgartirilgan
    }
  };

  const toggleTask = (id) => {
    setWorks(
      works.map((work) =>
        work.id === id ? { ...work, completed: !work.completed } : work
      )
    );
  };

  const deleteTask = (id) => {
    setWorks(works.filter((work) => work.id !== id));
  };

  return (
    <div className="task-container">
      <h1>Day Works</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Yangi ishni qo'shing..."
          value={newwork}
          onChange={(e) => setNewwork(e.target.value)}
        />
        <button onClick={addTask}>Qo'shish</button>
      </div>
      <ul>
        {works.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div className="buttons">
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Qaytarish" : "Bajirish"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
