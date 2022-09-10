import React, { useEffect, useState } from 'react'

const App = () => {
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    fetch('httpss://rickandmortyapi.com/api/character')
    .then((result) =>{
      result.json()
      .then((data)=>setCards(data.results))
      .catch((error)=> {
        console.log('Error json', error.message)
        setError(error.message)
      })
      
    })
    .catch((error)=> {
      console.log('error', error.message)
      setError(error.message)
    })
  }, [])

  console.log('error', error)

  if(error) return <div>Error al obtener los datos: {error}</div>
  return (
    <div>{cards.map((card)=>{
      return <div key={card.id}>{card.name}</div>
    })}</div>
  )
}

export default App