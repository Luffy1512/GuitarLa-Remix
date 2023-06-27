import { Link } from '@remix-run/react'

const Guitarra = ({guitarra}) => {
    const {nombre, precio, descripcion, imagen, url} = guitarra.attributes
    // console.log(imagen.data.attributes.formats.medium.url)
  return (
    <div className='guitarras'>
        <h3>{nombre}</h3>
        <div className='contenido'>
            <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
            <div>
                <p className='descripcion'>{descripcion}</p>
                <p className='precio'>${precio}</p>
                <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
            </div>
        </div>
    </div>
  )
}

export default Guitarra