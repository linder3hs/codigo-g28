function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-lg mx-auto pt-5">
        <div className="">
          <h1 className="text-center text-2xl font-bold">Perfil</h1>
          <div className="mt-5 bg-white rounded-md shadow-md">
            <form className="px-6 py-4 space-y-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  readOnly
                  className="px-3 py-2 border bg-gray-100 border-gray-300 rounded-md outline-none"
                  value={user.nombre}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  readOnly
                  className="px-3 py-2 border bg-gray-100 border-gray-300 rounded-md outline-none"
                  value={user.email}
                />
              </div>
              <div className="text-center">
                <button className="bg-red-400 text-white px-3 py-2 rounded-md cursor-pointer">
                  Cerrar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
