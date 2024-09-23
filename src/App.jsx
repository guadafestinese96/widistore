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
import ItemLancome from './Components/Item/ItemLancome'
import ItemMiyake from './Components/Item/ItemMiyake'
import ItemVapes from './Components/Item/ItemVapes'
import ItemTomFord from './Components/Item/ItemTomFord'
import ItemBvlgary from './Components/Item/ItemBvlgary'
import ItemJeanPaulGaultier from './Components/Item/ItemJeanPaulGaultier'
import ItemYves from './Components/Item/ItemYves'
import AllProductsPerfumes from './Components/AllProducts/AllProductsPerfumes'
import AllProductsVapes from './Components/AllProducts/AllProductsVapes'
import ItemFemenino from './Components/Item/ItemFemenino'
import ItemMasculino from './Components/Item/ItemMasculino'
import CartProvider from './Components/Cart/CartProvider'
import CheckoutForm from './Components/Form/CheckoutForm'
import { Auth0Provider } from '@auth0/auth0-react'

export default function App() {

  return (
    <BrowserRouter>
    <Auth0Provider domain='dev-7cmkqcbih4h2hfid.us.auth0.com' clientId='5WjTYEJ2O7upE5MFyuhcNTTuNrX6XZt1' authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <CartProvider>
        <Layout>
          
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/form' element={<FormApp />} />
            <Route path='/buyform' element={<CheckoutForm />} />
            <Route path='/armani' element={<ItemArmani />} />
            <Route path='/pacorabanne' element={<ItemPaco />} />
            <Route path='/carolinaherrera' element={<ItemCarolina />} />
            <Route path='/thierrymugler' element={<ItemThierry />} />
            <Route path='/calvinklein' element={<ItemCalvin />} />
            <Route path='/creed' element={<ItemCreed />} />
            <Route path='/dior' element={<ItemDior />} />
            <Route path='/kenzo' element={<ItemKenzo />} />
            <Route path='/jesusdelpozo' element={<ItemJdp />} />
            <Route path='/givenchy' element={<ItemGivenchy />} />
            <Route path='/lancome' element={<ItemLancome />} />
            <Route path='/elfbar' element={<ItemVapes />} />
            <Route path='/miyake' element={<ItemMiyake />} />
            <Route path='/tomford' element={<ItemTomFord />} />
            <Route path='/bvlgary' element={<ItemBvlgary />} />
            <Route path='/yvessaintlauren' element={<ItemYves />} />
            <Route path='/jeanpaulgaultier' element={<ItemJeanPaulGaultier />} />
            <Route path='/productosperfumes' element={<AllProductsPerfumes />} />
            <Route path='/productosvapes' element={<AllProductsVapes />} />
            <Route path='/femenino' element={<ItemFemenino />} />
            <Route path='/masculino' element={<ItemMasculino />} />
          </Routes>
        </Layout>
        </CartProvider>
        </Auth0Provider>
    </BrowserRouter>
  )
}