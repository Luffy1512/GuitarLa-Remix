import {Link, useLocation} from '@remix-run/react'
import carritoImg from '../../public/img/carrito.png'

const Navegacion = () => {
    const location = useLocation();
  // console.log(location)
  return (
    <nav className='navegacion'>
        <Link 
        to={'/'}
        className={location.pathname === '/' ? 'active' : ''}
        >Inicio</Link>
        <Link 
        to={'/nosotros'}
        className={location.pathname === '/nosotros' ? 'active' : ''}
        >Nosotros</Link>
        <Link 
        to={'/guitarras'}
        className={location.pathname === '/guitarras' ? 'active' : ''}
        >Tienda</Link>
        <Link 
        to={'/posts'}
        className={location.pathname === '/blog' ? 'active' : ''}
        >Blog</Link>
        <Link
        to={'/carrito'}
        ><img src={carritoImg} alt="Imagen del Carrito" /></Link>
    </nav>
  )
}

export default Navegacion