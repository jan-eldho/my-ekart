
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Whishlist from './pages/Whishlist'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
   <>
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/whishlist" element={<Whishlist />} />
   </Routes>
   <Footer />
 
   </>
  )
}

export default App
