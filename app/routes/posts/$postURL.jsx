import { useLoaderData } from '@remix-run/react'
import { getBlog } from '~/models/blogs.server'
import { formatearFecha } from '~/helpers'

export function meta({data}) {
  // console.log(data)
  if(!data) {
    return {
      title: 'Entrada no Encontrada',
      description: 'Nuestro blog, venta, informacion, cursos'
    }
  }
  return (
    {
      title: `GuitarLA - ${data.titulo}`,
      description: 'Nuestro blog, venta, informacion, cursos'
    }
  )
}

export async function loader({params}){

    // console.log(params.postURL)
    const blog = await getBlog(params.postURL)
    
    if(blog.data.length === 0){
      throw new Response('', {
        status: 404,
        statusText: 'Entrada no encontrada'
      })
    }
    
    return blog.data[0].attributes
}

const EntradaBlog = () => {
  const blog = useLoaderData()
  const {titulo, contenido, imagen, createdAt} = blog
  return (
    <main className="contenido_centrado blog">
      <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
          <h2>{titulo}</h2>
          <p className="fecha">{formatearFecha(createdAt)}</p>
          <p className="texto_largo">{contenido}</p>
      </div>
    </main>
  )
}

export default EntradaBlog