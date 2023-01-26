import React from 'react'
import Toy from '../../components/toy/Toy'
import { Link } from 'react-router-dom'




const AllToyPage = ({toys, setToys}) => {
return(
    toys.map(toy => {
  return(
    <div>
    <Toy toy={toy} />
    <Link to={`/toys/${toy._id}`}>View Details</Link>
    </div>
)
})     
)
}

export default AllToyPage