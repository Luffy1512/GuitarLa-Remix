import style from '~/styles/nosotros.css'
import imagen from '../../public/img/nosotros.jpg'

export function meta() {
  return (
    {
      title: 'GuitarLA - Sobre Nosotros'
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


const Nosotros = () => {
    return (
      <main className="contenedor nosotros">
        <h2 className='heading'>Nosotros</h2>
        <div className="contenido">
          <div className="imagen">
            <img src={imagen} alt="imagen nosotros" />
          </div>
          <div className="texto">
            <p>Quisque libero lacus, rhoncus vel dictum eu, elementum ac erat. Curabitur ligula tortor, sagittis vitae ante at, ornare luctus nisi. Vivamus suscipit libero justo, sed elementum felis dignissim ac. Proin congue diam molestie metus dignissim tincidunt quis a orci. Nullam hendrerit interdum felis, ac euismod nulla vulputate non. Curabitur lorem turpis, sagittis pharetra pharetra nec, dapibus interdum ex.</p>
            <p>Quisque libero lacus, rhoncus vel dictum eu, elementum ac erat. Curabitur ligula tortor, sagittis vitae ante at, ornare luctus nisi. Vivamus suscipit libero justo, sed elementum felis dignissim ac. Proin congue diam molestie metus dignissim tincidunt quis a orci. Nullam hendrerit interdum felis, ac euismod nulla vulputate non. Curabitur lorem turpis, sagittis pharetra pharetra nec, dapibus interdum ex.</p>
          </div>
        </div>
        
      </main>
    )
  }
  
  export default Nosotros