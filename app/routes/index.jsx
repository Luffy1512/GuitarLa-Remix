import { getGuitarras } from '~/models/guitarras.server'
import { getBlogs } from '~/models/blogs.server'
import { getCurso } from '~/models/curso.server'

import { useLoaderData } from '@remix-run/react'

import Guitarra from '~/components/guitarra'
import Blog from '~/components/blog'

import stylesGuitarras from '~/styles/tienda.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'


export async function loader(){

  const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getBlogs(), getCurso()])
  // const guitarras = await getGuitarras()

  // console.log(guitarras)
  // console.log(posts)

  return {guitarras: guitarras.data, 
    posts: posts.data,
    curso: curso.data}
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

const Index = () => {
  const datos = useLoaderData()
  const {guitarras, posts, curso} = datos

  const {titulo, contenido, imagen} = curso.attributes
  return (
    <>
      <main className="contenedor">
        <h2 className='heading'>Nuestra Colección</h2>
        {guitarras?.length && (
          <div className="guitarras_grid">
            {guitarras?.map( guitarra => (
              <Guitarra 
                key={guitarra.id}
                guitarra={guitarra}
              />
            ))}
          </div>
        )}
      </main>

      <section className="curso">
        <style jsx="true">
          {`.curso {
            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.formats.large.url})
          }`}
        </style>
        <div className="contenedor curso_grid">
          <div className="contenido">
            <h2>{titulo}</h2>
            <p>{contenido}</p>
          </div>
        </div>
      </section>

      <section className="contenedor">
        <div className="blogs_grid">
          {posts.map(blog => (
            <Blog 
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Index