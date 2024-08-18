import './App.css'
import Layout from './Components/Layout/Layout'
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Inicio from './Components/Inicio/Inicio'
import FormApp from './Components/Form/FormApp'
import ItemArmani from './Components/Item/ItemArmani'

export default function App() {

  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<Inicio/>} />
      <Route path='/form' element={<FormApp/>}/>
      <Route path='/armani' element={<ItemArmani/>}/>
   </Routes> 
    </Layout>
   </BrowserRouter>
  )
}