import React from 'react'

const Toy = ({key, toy}) => {
  return (
    <div>
        <h1>title:{toy.title}</h1>
        <h2>price:{toy.price}</h2>
        <br/>
        <br/>
        <p>description{toy.description}</p>
    
    </div>
    
  )
}

export default Toy