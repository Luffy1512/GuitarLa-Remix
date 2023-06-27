import { useLoaderData, useOutletContext } from '@remix-run/react'
import { useState } from 'react'
import { getGuitarra } from '~/models/guitarras.server'

export async function loader({params}) {
    // console.log(params.guitarraURL)
    const guitarra = await getGuitarra(params.guitarraURL)
    // console.log(guitarra)

    if(!guitarra.data.length){
      throw new Response('', {
        status: 404,
        statusText: 'Guitarra no encontrada'
      })
    }

    return guitarra
}

export function meta({data}) {
    // console.log(data)
    if(!data) {
      return {
        title: 'Guitarra no Encontrada',
        description: 'GuitarLA - Mas Informacion sobre nuestra guitarra'
      }
    }
    return (
      {
        title: `GuitarLA - ${data.nombre}`,
        description: 'GuitarLA - Mas Informacion sobre nuestra guitarra'
      }
    )
  }


const Guitarra = () => {
    const {agregarCarrito, mensaje, setMensaje} = useOutletContext()
    // console.log(carrito);
    
    const [cantidad, setCantidad] = useState(0)
    

    const guitarra = useLoaderData()
    // console.log(guitarra)

    const {nombre, precio, descripcion, imagen} = guitarra.data[0].attributes

    function handleSubmit(e) {
      e.preventDefault()
      // console.log(cantidad)
      if (cantidad<1) {
        // console.log('Debes Elegir una Cantidad');
        setMensaje('Debes Elegir una Cantidad');
      } else {
        setMensaje('Agregado al Carrito');

        const objGuitarra = {
          id: guitarra.data[0].id,
          nombre,
          precio,
          descripcion,
          imagen: imagen.data.attributes.formats.medium.url,
          cantidad
        }

        // console.log(objGuitarra);
        agregarCarrito(objGuitarra)
      }
      setTimeout(() => {
        setMensaje('')
      }, 3000);
      
    }
  return (
    <main className='contenido_centrado guitarra'>
        <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
        <div className="contenido">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p className='precio'>${precio}</p>
            <form
              className='formulario' 
              onSubmit={handleSubmit}
            >
              <div className="campo">
                <label htmlFor="cantidad">Cantidad:</label>
                <select
                  onChange={ e => setCantidad(+e.target.value)} 
                  id="cantidad"
                >
                  <option value="0">-- Seleccione --</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              
              <input type="submit" value="Agregar al Carrito" />

              {mensaje && (
                <p className={`${mensaje === 'Agregado al Carrito' ? 'alerta-succefull' : 'alerta-danger'}`}>{mensaje}</p>
              )}
            </form>
        </div>
    </main>
  )
} 

export default Guitarra