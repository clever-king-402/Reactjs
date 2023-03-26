import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import MyAccount from './pages/MyAccount';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Contact from './pages/Contact';
// import './assets/js/main.js'
function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/product-list" element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<CheckOut/>}></Route>
          <Route path='/my-account' element={<MyAccount/>}></Route>
          <Route path='/wishlist' element={<WishList/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
