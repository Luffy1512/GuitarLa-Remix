import style from '~/styles/tienda.css'
import { Outlet, useOutletContext } from '@remix-run/react'

export function meta() {
  return (
    {
      title: 'GuitarLA - Nuestra Tienda',
      description: 'GuitarLA - Nuestra Coleccion de Guitarras'
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

const Tienda = () => {
  return (
    <>
      <Outlet 
        context={useOutletContext()}
      />
    </>
  )
}

export default Tienda