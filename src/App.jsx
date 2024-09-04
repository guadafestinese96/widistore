import './App.css'
import Layout from './Components/Layout/Layout'
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Inicio from './Components/Inicio/Inicio'
import FormApp from './Components/Form/FormApp'
import ItemArmani from './Components/Item/ItemArmani'
import ItemPaco from './Components/Item/ItemPaco'
import ItemCarolina from './Components/Item/ItemCarolina'
import ItemThierry from './Components/Item/ItemThierry'
import ItemCalvin from './Components/Item/ItemCalvin'
import ItemCreed from './Components/Item/ItemCreed'
import ItemDior from './Components/Item/ItemDior'
import ItemKenzo from './Components/Item/ItemKenzo'
import ItemJdp from './Components/Item/ItemJdp'
import ItemGivenchy from './Components/Item/ItemGivenchy'
import ItemVapes from './Components/Item/ItemVapes'
import Search from './Components/Search/SearchPerfumes'
import AllProducts from './Components/AllProducts/AllProducts'


export default function App() {

  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<Inicio/>} />
      <Route path='/form' element={<FormApp/>}/>
      <Route path='/armani' element={<ItemArmani/>}/>
      <Route path='/pacorabanne' element={<ItemPaco/>}/>
      <Route path='/carolinaherrera' element={<ItemCarolina/>}/>
      <Route path='/thierrymugler' element={<ItemThierry/>}/>
      <Route path='/calvinklein' element={<ItemCalvin/>}/>
      <Route path='/creed' element={<ItemCreed/>}/>
      <Route path='/dior' element={<ItemDior/>}/>
      <Route path='/kenzo' element={<ItemKenzo/>}/>
      <Route path='/jesusdelpozo' element={<ItemJdp/>}/>
      <Route path='/givenchy' element={<ItemGivenchy/>}/>
      <Route path='/elfbar' element={<ItemVapes/>}/>
      <Route path='/productos' element={<AllProducts/>}/>
   </Routes> 
    </Layout>
   </BrowserRouter>
  )
}