import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import OurCars from './Pages/OurCars/OurCars/OurCars';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cars' element={<OurCars />} />
    </Routes>
  );
}

export default App;
