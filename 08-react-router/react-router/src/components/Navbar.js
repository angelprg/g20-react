import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="articles">Artículos</Link>
        <Link to="catalog">Catálogo</Link>
        <Link to="admin/user">Usuario</Link>
        <Link to="admin">Admin</Link>
      </nav>
  )
}

export default Navbar