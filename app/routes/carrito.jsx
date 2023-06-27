import { useOutletContext } from '@remix-run/react'
import { useState, useEffect } from 'react'
import { ClientOnly } from 'remix-utils'
import Articulo from '~/components/articulo'
import style from '~/styles/carrito.css'

export function meta() {
  return (
    {
      title: 'GuitarLA - Carrito de Compras',
      description: 'GuitarLA - Compra las mejores Guitarras al mejor precio'
    }
  )
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: style
    }
  ]
}

const Carrito = () => {
  const {carrito, setCarrito} = useOutletContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(calculoTotal)
  }, [carrito])
  

  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
      <main className="contenedor carrito">
          <h2 className='heading'>Carrito de Compras</h2>

          <div className="contenido">
              <div className="articulos">
                  <h2>Articulos</h2>
                  {carrito?.length === 0 ? 'Carrito Vacio' : carrito?.map(articuloState => (
                    <Articulo 
                      key={articuloState.id}
                      articuloState={articuloState}
                      carrito={carrito}
                      setCarrito={setCarrito}
                    />
                  ))}
              </div>
              <aside className="resumen">
                  <h2>Resumen del Pedido</h2>
                  <p>Total a pagar: ${total}</p>
              </aside>
          </div>
      </main>
      )}
    </ClientOnly>
  )
}

export default Carrito