import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
