import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Orders from './Pages/Orders/Orders/Orders';
import OurCars from './Pages/OurCars/OurCars/OurCars';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cars' element={<OurCars />} />
      <Route path='/orders/:id' element={<Orders />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
