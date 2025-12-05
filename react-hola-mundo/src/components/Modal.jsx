import { X } from "lucide-react";

// props: objeto
// destructuracion const {children, title, ...} = props
function Modal({ children, title, open }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        open ? "block" : "hidden"
      }`}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50"></div>

      <div className="relative z-50 w-full max-w-md mx-4 bg-white rounded-md shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button className="cursor-pointer hover:border hover:rounded-full hover:border-red-400">
            <X />
          </button>
        </div>
        {/* Body */}
        <div className="p-4">{children}</div>
        {/* Footer */}
        <div className="flex items-center justify-end gap-5 p-4 border-t border-gray-300">
          <button className="bg-red-400 text-white cursor-pointer px-3 py-2 rounded-md">
            Cancelar
          </button>
          <button className="bg-gray-950 text-white cursor-pointer px-3 py-2 rounded-md">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
