import React from 'react'

const toyPage = ({toys}) => {
  return (
    <div>
      <h1>{toys.title}</h1>
      <h2>{toys.price}</h2>
      <h3>{toys.description}</h3>
    </div>
  )
}

export default toyPage