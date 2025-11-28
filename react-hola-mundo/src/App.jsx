// Vamos a importa el componente Header
import Header from "./components/Header";
import Title from "./components/Title";

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
      <div>
        <Title text="Hola mundo" size="h1" />
        <Title text="Me llamo Linder" />
      </div>
    </section>
  );
}

export default App;
