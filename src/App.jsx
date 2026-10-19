import "./App.css";
//import "bootswatch/dist/Sandstone/bootstrap.min.css";
import styles from "./components/Layout/Layout.module.css";
import { ItemListContainer } from "./components/TarjetaProducto/ItemListContainer/ItemListContainer";
import { Layout } from "./components/Layout/Layout";
import { FormularioContainer } from "./components/Formulario/FormularioContainer/FormularioContainer";

function App() {
  return (
    <Layout>
      <div className={styles.cuerpo}>        
        <div>
          <ItemListContainer Mensaje="Nuestros productos destacados" />
        </div>
        <div>
          <FormularioContainer />
        </div>
      </div>      
    </Layout>
  );
}
export default App;
