import { Link } from "@remix-run/react"
import { formatearFecha } from '~/helpers'

const Blog = ({blog}) => {
    const {titulo, contenido, imagen, url, createdAt} = blog.attributes
  return (
    <div className="blog">
        <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h2>{titulo}</h2>
            <p className="fecha">{formatearFecha(createdAt)}</p>
            <p className="texto">{contenido}</p>
            <Link className="enlace" to={`/posts/${url}`}>Ver Post</Link>
        </div>
    </div>
  )
}

export default Blog