import React from 'react'
import Toy from '../../components/toy/Toy'

const AllToyPage = ({toys, setToys}) => {
  return (
(    toys.map(toy => {
         return <Toy key={toy._id} toy={toy} /> 
    }) )
  )
}

export default AllToyPage