import './App.css';
import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllToyPage from './pages/AllToyPage/AllToyPage';
import NewToyPage from './pages/newToyPage/NewToyPage';

const backendUrl = 'http://localhost:8000/'

function App() {
  const [toys, setToys] =useState([])

  useEffect(() => {
    fetch(`${backendUrl}toys/`)
    .then(res => res.json())
    .then(toys => setToys(toys))
  }, [])

  const addToy = (toy) => {
    setToys([...toys, toy])
  }

  console.log(toys)

  return (
      <Layout>
        <Routes >
          <Route path='/' element={<AllToyPage toys={toys} setToys={setToys} />} /> 
          <Route path='/new' element={<NewToyPage addToy={addToy} />} />
        </Routes>
      </Layout>
  );
}

export default App;
