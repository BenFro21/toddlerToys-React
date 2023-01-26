import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const backendUrl = 'http://localhost:8000/'


const NewToyPage = ({addToy}) => {
  const navigate = useNavigate()

  let initalState = {
    title: '',
    price:'',
    description: ''
  }
const [formData, setFormData] =useState(initalState)
const handleChange = (e) => {
  setFormData({...formData, [e.target.id] : e.target.value})
}
const handleSubmit = (e) => {
  e.preventDefault()
  axios.post(`${backendUrl}toys`, formData)
  .then(res => {
    setFormData(initalState)
    addToy(res.data)
    navigate('/', {replace: true})
  })
}

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>title</label>
        <input id='title' name='title' type='text' onChange={handleChange} />

        <label htmlFor='price'>Price</label>
        <input id='price' name='price' type='number' onChange={handleChange} />
        

        <label htmlFor='description'>Description</label>
        <input id='description' name='description' type='textarea' onChange={handleChange} />
        
        <input type='submit' value='Post Toy' /> 
      </form>
    )
}

export default NewToyPage