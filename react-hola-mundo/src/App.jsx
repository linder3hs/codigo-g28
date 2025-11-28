// Vamos a importa el componente Header
import Header from "./components/Header";

/**
 * Como crear un componente desde 0
 */

// El nombre de la funcion solo va en mayuscula cuando es
// un componente, sé que es un componente porque tiene
// la extension jsx y es una interface
function App() {
  // retorna un bloque de HTML
  return (
    <section>
      <Header />
      <h1>Hola mundo desde React</h1>
      <div>
        <section>
          <nav></nav>
        </section>
      </div>
      <section></section>
    </section>
  );
}

export default App;
