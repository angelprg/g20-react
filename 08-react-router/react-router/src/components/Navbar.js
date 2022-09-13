import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="articles">Artículos</Link>
        <Link to="catalog">Catálogo</Link>
        <Link to="user">Usuario</Link>
      </nav>
  )
}

export default Navbar