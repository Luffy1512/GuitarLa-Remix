import {Link, useLocation} from '@remix-run/react'
import imagen from '../../public/img/logo.svg'
import carritoImg from '../../public/img/carrito.png'

import Navegacion from './navegacion';

const Header = ({carritoNumero}) => {
 
  const location = useLocation();

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link
          to={'/'}
          className="logo"
        >
          <img src={imagen} alt="Imagen Logo" />
        </Link>
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
          >
            <img src={carritoImg} alt="Imagen del Carrito" />
            {carritoNumero>0 && (
              <p>{carritoNumero}</p>
            )}
          </Link>
      </nav>
      </div>
    </header>
  )
}

export default Header