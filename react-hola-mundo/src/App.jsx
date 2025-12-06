import Modal from "./components/Modal";
import {
  CheckCircle,
  CheckCheck,
  Calendar,
  Trash,
  TriangleAlert,
} from "lucide-react";
import useAppLogic from "./hooks/useAppLogic";

function App() {
  const {
    tasks,
    currentTask,
    isOpen,
    taskName,
    handleDelete,
    handleFormSubmit,
    handleInput,
    handleIsOpen,
    handleModalDelete,
  } = useAppLogic();

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
                onClick={() => handleModalDelete(task)}
                className="border border-gray-300 hover:border-red-500 cursor-pointer rounded-md px-2 py-1"
              >
                <Trash color="red" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        title="Eliminar Tarea"
        open={isOpen}
        onClose={handleIsOpen}
        onConfirm={handleDelete}
      >
        {/* dentro de la etiqueta modal = children */}
        <div className="flex gap-2">
          <TriangleAlert className="text-yellow-600" />
          <p>
            Esta seguro de eliminar esta tarea{" "}
            <strong>{currentTask?.text}</strong>?, es una{" "}
            <strong className="text-red-500">acción irreversible</strong>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
