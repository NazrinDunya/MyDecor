import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Header from './components/Header'
// import Home from './pages/Home'
import Login from './components/Login'
import Homefilter from './pages/Homefilter'
import HeaderSearch from './components/HeaderSearch'
import Shop from './pages/Shop'
import { ProductProvider } from './context/ProductContext'
import ProductDetails from './pages/ProductDetails'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './pages/Footer'
import { CartProvider } from 'react-use-cart'
import Cart from './pages/Cart'
import { WishlistProvider } from 'react-use-wishlist'
import WishList from './pages/WishList'


const AppRouters = () => {
  return (
    <BrowserRouter>
    <WishlistProvider>
    <CartProvider>
    <HeaderSearch/>
       <ProductProvider>
       <Routes>
        <Route path='/' element={<Homefilter/>}></Route>
        <Route path='/login' element={<Login/>}></Route> 
        <Route path='/shop' element={<Shop/>}></Route> 
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path='/shop/:url' element={<ProductDetails/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
       </Routes>
       </ProductProvider>
       <Footer/>
    </CartProvider>
    </WishlistProvider>
    </BrowserRouter>
  )
}

export default AppRouters