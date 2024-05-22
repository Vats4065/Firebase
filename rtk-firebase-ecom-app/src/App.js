import { Route, Routes } from "react-router-dom"
import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Contact from "./pages/contact/Contact.jsx";
import OrderHistory from "./pages/orderHistory/OrderHistory.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import "react-toastify/ReactToastify.min.css"
import { ToastContainer } from "react-toastify";
import PrivateComponent from "./components/Private.jsx";


function App() {
  return (
    <div className="App">

      <Header />
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<PrivateComponent></PrivateComponent>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/orderHistory" element={<OrderHistory />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Route>

      </Routes>

      <Footer />
    </div>

  );
}

export default App;
