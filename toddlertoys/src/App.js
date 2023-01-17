import './App.css';
import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import AllToyPage from './pages/AllToyPage.jsx/AllToyPage';
import NewToyPage from './pages/NewToyPage/NewToyPage'
const backendUrl = 'http://localhost:8000/'

function App() {
  const [toys, setToys] =useState([])

  useEffect(() => {
    fetch(`${backendUrl}toys/`)
    .then(res => res.json())
    .then(toys => setToys(toys))
  }, [])

  console.log(toys)

  return (
    <div className="App">
     <Navbar>
        <Routes >
        
        <Route path='/' element={<AllToyPage toys={toys} setToys={setToys} />} /> 
        <Route path='/new' element={<NewToyPage />} /> 
       
        </Routes>
      </Navbar>
   
    </div>
  );
}

export default App;
