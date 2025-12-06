import { useState, useEffect } from "react";
import { createTaskToAPI, deleteTaskFromAPI, getTaskFromAPI } from "../service";
import useToogle from "./useToggle";

function useAppLogic() {
  // Input
  const [taskName, setTaskName] = useState("");
  // Lista de tareas
  const [tasks, setTasks] = useState([]);

  // Tarea seleccionada
  const [currentTask, setCurrentTask] = useState(null);

  // Vamos a usar nuestro hook
  const { isOpen: isOpenDelete, handleIsOpen: handleIsOpenDelete } =
    useToogle();
  // Para poder usar el hook mas de 1 vez a los nombres originales
  // los cambiamos por alias
  const { isOpen: isOpenUpdate, handleIsOpen: handleIsOpenUpdate } =
    useToogle();

  const handleInput = (event) => {
    setTaskName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    // evitar que se recargue la pagina
    event.preventDefault();
    const newTask = {
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
    handleIsOpenDelete();
    setCurrentTask(task);
  };

  const handleModalUpdate = (task) => {
    handleIsOpenUpdate();
    setCurrentTask(task);
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(form.get("text"));
    console.log(form.get("status"));
  };

  const handleDelete = async () => {
    // Eliminar
    await deleteTaskFromAPI(currentTask?.id);
    // Cerremos el modal
    handleIsOpenDelete();
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
    isOpenDelete,
    isOpenUpdate,
    tasks,
    currentTask,
    taskName,
    handleDelete,
    handleFormSubmit,
    handleInput,
    handleIsOpenDelete,
    handleIsOpenUpdate,
    handleModalDelete,
    handleModalUpdate,
    handleUpdateSubmit,
  };
}

export default useAppLogic;
