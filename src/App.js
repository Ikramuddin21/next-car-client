import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Pay from './Pages/Dashboard/Pay/Pay';
import Review from './Pages/Dashboard/Review/Review';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Orders from './Pages/Orders/Orders/Orders';
import OurCars from './Pages/OurCars/OurCars/OurCars';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cars' element={<OurCars />} />
        <Route path='/*' element={<PrivateRoute />}>
          <Route path='orders/:id' element={<Orders />} />
          <Route path='dashboard/*' element={<Dashboard />}>
            <Route path='my-orders' element={<MyOrders />} />
            <Route path='review' element={<Review />} />
            <Route path='pay' element={<Pay />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
