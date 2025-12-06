import { useState, useEffect } from "react";
import { uuidv7 } from "uuidv7";
import { createTaskToAPI, deleteTaskFromAPI, getTaskFromAPI } from "../service";

function useAppLogic() {
  // variables
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleInput = (event) => {
    setTaskName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    // evitar que se recargue la pagina
    event.preventDefault();
    const newTask = {
      id: uuidv7(),
      text: taskName,
      status: 1, // 1: Creado
    };
    await createTaskToAPI(newTask);
    setTaskName("");
    await getTasks();
  };

  const handleModalDelete = (task) => {
    // crear un arreglo excluyendo la id (parametro)
    // const filteredTask = tasks.filter((task) => task.id !== id);
    // setTasks(filteredTask);
    // await deleteTaskFromAPI(id);
    // await getTasks();
    setIsOpen(true);
    setCurrentTask(task);
  };

  const handleIsOpen = () => setIsOpen(!isOpen);

  const handleDelete = async () => {
    // Eliminar
    await deleteTaskFromAPI(currentTask?.id);
    // Cerremos el modal
    setIsOpen(false);
    // Obtener la lista actualizada
    await getTasks();
  };

  const getTasks = async () => {
    const data = await getTaskFromAPI();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return {
    isOpen,
    tasks,
    currentTask,
    taskName,
    handleDelete,
    handleFormSubmit,
    handleInput,
    handleIsOpen,
    handleModalDelete,
  };
}

export default useAppLogic;
