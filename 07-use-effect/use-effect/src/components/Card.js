import React, { useEffect } from 'react'

const Card = () => {
  useEffect(()=>{
    console.log('Hola desde Card')
  },[])
  return (
    <div>El contador a superado 10</div>
  )
}

export default Card