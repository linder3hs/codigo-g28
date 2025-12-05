import { useState, useEffect } from "react";
import { uuidv7 } from "uuidv7";
import { CheckCircle, CheckCheck, Calendar, Trash } from "lucide-react";
import { getTaskFromAPI, createTaskToAPI } from "./service";

function App() {
  // variables
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (event) => {
    setTaskName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    // evitar que se recargue la pagina
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv7(),
        text: taskName,
        status: 1, // 1: Creado
        createdAt: new Date().toDateString(),
      },
    ]);
    setTaskName("");
  };

  const handleDelete = (id) => {
    // crear un arreglo excluyendo la id (parametro)
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  };

  const getTasks = async () => {
    const data = await getTaskFromAPI();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

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
            <CheckCircle />
          </button>
        </div>
      </form>
      <div className="space-y-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white px-3 py-5 space-y-2 rounded-md"
          >
            <span className="text-xs italic flex items-center gap-2">
              <Calendar size={12} /> {task.createdAt}
            </span>
            {/* comentario */}
            <p className="font-semibold capitalize text-lg">{task.text}</p>
            <div className="flex justify-end gap-5 mt-3">
              <button className="border border-gray-300 hover:border-green-500 cursor-pointer rounded-md px-2 py-1">
                <CheckCheck color="green" size={16} />
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="border border-gray-300 hover:border-red-500 cursor-pointer rounded-md px-2 py-1"
              >
                <Trash color="red" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
