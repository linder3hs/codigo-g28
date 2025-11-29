import { useState } from "react";

function App() {
  // variables
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  /**
   function handleInput(event) {
    // console.log(event.target.value);
    setTaskName(event.target.value);
  }
   */
  const handleInput = (event) => {
    setTaskName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    // evitar que se recargue la pagina
    event.preventDefault();
    setTasks([...tasks, taskName]);
    setTaskName("");
  };

  return (
    <div className="h-screen bg-gray-100 px-6 py-8 space-y-10">
      <h1 className="text-center text-3xl font-bold">TodoList</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="bg-white p-5 rounded-lg flex">
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={taskName}
            onChange={handleInput}
            className="border border-gray-400 px-3 py-2 rounded-l flex-1 outline-none"
          />
          <button
            type="submit"
            className="bg-gray-950 cursor-pointer text-white p-3 rounded-r border border-gray-950"
          >
            Crear
          </button>
        </div>
      </form>
      <div className="space-y-5">
        {tasks.map((task, index) => (
          <div key={index} className="bg-white px-3 py-5 rounded-md">
            <p className="font-semibold capitalize">{task}</p>
            <div className="flex gap-5 mt-3">
              <button className="border border-gray-300 cursor-pointer rounded-md px-2 py-1">
                ✅
              </button>
              <button className="border border-gray-300 cursor-pointer rounded-md px-2 py-1">
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
