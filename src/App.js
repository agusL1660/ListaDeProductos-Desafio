import './App.css';
import productos from './productos/productos.js'

function App() {
  
  
  return (
    
    <div className="App">
      <header className="App-header">
          <h3>Lista de Productos</h3>
        
      <div className="contenedor">
      {productos.map((producto) => (
        <div key={producto.nro_producto}>
            <div className="producto">
                <p>{producto.nombre}</p>
                <img src={producto.imagen}
                className="imagen"
                  alt='Imagen'
                  loading="lazy"> 
                </img>
                <p >${producto.precio}</p>

                <button className="boton">Añadir al carrito</button>
            </div>
          </div> 
          ))}
        </div>
        </header>

    </div>
    
  );
}

export default App;
