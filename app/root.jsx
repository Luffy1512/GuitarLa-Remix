// Remix tiene funciones para la informacion meta y hojas de estilo
import {
  Meta, 
  Links, 
  Outlet, 
  // Funciones de Remix para mejor performance
  Scripts, // para evitar que recargue cuando navegamos 
  LiveReload, // para estar escuchando por los cambios y evitar recargar la pagina
  useCatch,
  Link
} from '@remix-run/react'
import { useState, useEffect, useContext } from 'react'
// ~ - hace referencia a la carpeta de app
import Footer from '~/components/footer'
import Header from '~/components/header'
import style from '~/styles/index.css'

export function meta() {
  return (
    {
      charset: 'utf-8',
      title: 'GuitarLA - Remix',
      viewport: 'width=device-width,initial-scale=1'
    }
  )
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/'
    },
    {
      rel: 'stylesheet',
      href: style
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    }
  ]
}

// Funcion principal
export default function App() {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  const [carrito, setCarrito] = useState(carritoLS)
  const [mensaje, setMensaje] = useState('')
  
  // Local Storage, como remix se ejecuta tanto en el cliente como en el servidor. remix recomienda que utilicemos local storage en un useEffect asi se ejecuta una vez en el cliente y no en el servidor

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  


  function agregarCarrito(guitarra) {
    // console.log('Agregando...', guitarra);
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // console.log('Esta guitarra ya esta agregada al carrito');
      setMensaje('Esta guitarra ya esta agregada al carrito');
      return
    }
    setCarrito([...carrito, guitarra])
  }

  return (
    <Document>
      {/* <h1>Hola desde App</h1> */}
      <Outlet 
        context={{
          agregarCarrito,
          carrito,
          setCarrito,
          mensaje,
          setMensaje
        }}
      />
    </Document>
  )
}

// Layout principal puedes nombrarlo como document o layout en Remix recomiendan Document
function Document(props) {
  
  // console.log(props);
  const {children} = props
  // console.log(context);

  const carritoNumero = 2
  return (
    <html>
      <head>
       <Meta />
       <Links />
      </head>
      <body>
        <Header
          carritoNumero={carritoNumero}
        />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

/* MANEJO DE ERRORES */
// Se debe llamar de esta forma la funcion
export function CatchBoundary() {
  const error = useCatch()
  return (
    <Document>
      <p className='error'>{error.status} {error.statusText}</p>
      <Link className='enlace-error' to={'/'}>Tal vez quieras volver a la pagina principal</Link>
    </Document>
  )
}

export function ErrorBoundary({error}) {
  return (
    <Document>
      <p className="error">{error.status} {error.statusText}</p>
      <Link className='enlace-error' to={'/'}>Tal vez quieras volver a la pagina principal</Link>
    </Document>
  )
}