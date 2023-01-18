import React from 'react'
import Toy from '../../components/toy/Toy'

const AllToyPage = ({toys, setToys}) => {
  return (
    toys.map(toy => {
         return ( <div><Toy key={toy._id} toy={toy} /></div>) 
    }) 
  )
}

export default AllToyPage