const Articulo = ({articuloState, carrito, setCarrito}) => {
    // console.log(articuloState);
    const { id, cantidad, nombre, imagen, precio } = articuloState

    function modificarCarrito(cantidad) {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === articuloState.id) {
                articuloState.cantidad = cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    function handleEliminar(id) {
        // console.log('Eliminando...', id);

        const confirmar = confirm('¿Esta Seguro que Desea Eliminar el Articulo?')
        if (!confirmar) {
           return 
        }
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id != id)

        // console.log(carritoActualizado);
        setCarrito(carritoActualizado)
    }
  return (
    <div className="producto">
        <div>
            <img src={imagen} alt={`Imagen del producto ${nombre}`} />
        </div>
        <div className="producto__contenido">
            <p className="producto__nombre">{nombre}</p>

            <div className="producto__campo">
                <label htmlFor="cantidad">Cantidad:</label>
                <input 
                    id="cantidad"
                    onChange={ e => modificarCarrito(+e.target.value)} 
                    value={cantidad}
                    type="number" 
                    max={5}
                    min={1}
                />
            </div>
            <p className="producto__precio">$<span>{precio}</span></p>
        </div>  
        <div>
            <p className="producto__subtotal">Subtotal: <span>${precio*cantidad}</span></p>

            <button
                onClick={() => handleEliminar(id)}
                className="producto__btn" 
                type="button"
            >Eliminar Articulo</button>
        </div>      
    </div>
  )
}

export default Articulo