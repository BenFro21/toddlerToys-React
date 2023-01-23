import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
   <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/new'>Create New Toy</Link></li>
        <li><Link to='/order'>Order</Link></li>
        <li><Link to='/'></Link></li>

   </ul>

  )
}

export default Navbar