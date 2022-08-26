import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AdminRoute from "./Pages/Dashboard/AdminRoute/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Pay from "./Pages/Dashboard/Pay/Pay";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Orders from "./Pages/Orders/Orders/Orders";
import OurBlogs from "./Pages/OurBlogs/OurBlogs/OurBlogs";
import OurCars from "./Pages/OurCars/OurCars/OurCars";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<OurCars />} />
        <Route path="/blogs" element={<OurBlogs />} />
        <Route element={<PrivateRoute />}>
          <Route path="/orders/:id" element={<Orders />} />
          <Route path="/dashboard/" element={<Dashboard />}>
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="review" element={<Review />} />
            <Route path="pay" element={<Pay />} />
            <Route element={<AdminRoute />}>
              <Route path="manage-all-orders" element={<ManageAllOrders />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="make-admin" element={<MakeAdmin />} />
              <Route path="manage-products" element={<ManageProducts />} />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
