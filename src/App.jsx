import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
/* import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct"; */
/* import AdminRoute from "./Pages/Dashboard/AdminRoute/AdminRoute"; */
/* import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
 /* import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin"; */
/* import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders"; */
/* import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts"; */
/* import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders"; */
/* import Pay from "./Pages/Dashboard/Pay/Pay"; */
/* import Review from "./Pages/Dashboard/Review/Review"; */
/* import Home from "./Pages/Home/Home/Home";*/
import Login from "./Pages/Login/Login/Login";
/* import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute"; */
import Register from "./Pages/Login/Register/Register";
/* import Orders from "./Pages/Orders/Orders/Orders"; */
/* import OurBlogs from "./Pages/OurBlogs/OurBlogs/OurBlogs"; */
/* import OurCars from "./Pages/OurCars/OurCars/OurCars"; */
import NotFound from "./Pages/Shared/NotFound/NotFound";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

// dynamic import
const Home = lazy(() => import("./Pages/Home/Home/Home"));
const OurCars = lazy(() => import("./Pages/OurCars/OurCars/OurCars"));
const OurBlogs = lazy(() => import("./Pages/OurBlogs/OurBlogs/OurBlogs"));
const PrivateRoute = lazy(() =>
  import("./Pages/Login/PrivateRoute/PrivateRoute")
);
const Orders = lazy(() => import("./Pages/Orders/Orders/Orders"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard/Dashboard"));
const MyOrders = lazy(() => import("./Pages/Dashboard/MyOrders/MyOrders"));
const Review = lazy(() => import("./Pages/Dashboard/Review/Review"));
const Pay = lazy(() => import("./Pages/Dashboard/Pay/Pay"));
const AdminRoute = lazy(() =>
  import("./Pages/Dashboard/AdminRoute/AdminRoute")
);
const ManageAllOrders = lazy(() =>
  import("./Pages/Dashboard/ManageAllOrders/ManageAllOrders")
);
const AddProduct = lazy(() =>
  import("./Pages/Dashboard/AddProduct/AddProduct")
);
const MakeAdmin = lazy(() => import("./Pages/Dashboard/MakeAdmin/MakeAdmin"));
const ManageProducts = lazy(() =>
  import("./Pages/Dashboard/ManageProducts/ManageProducts")
);
/* const Login = lazy(() => import("./Pages/Login/Login/Login"));
const Register = lazy(() => import("./Pages/Login/Register/Register")); */

function App() {
  return (
    <AuthProvider>
      <Suspense
        fallback={
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
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
      </Suspense>
    </AuthProvider>
  );
}

export default App;
