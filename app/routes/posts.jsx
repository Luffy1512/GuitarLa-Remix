import { Outlet } from '@remix-run/react'
import style from '~/styles/blog.css'

export function meta() {
  return (
    {
      title: 'GuitarLA - Nuestro Blog',
      description: 'Nuestro blog, venta, informacion, cursos'
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


const Blog = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Blog