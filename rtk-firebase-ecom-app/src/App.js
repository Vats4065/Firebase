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
import PrivateComponent, { PrivateAdmin } from "./components/Private.jsx";
import Error from "./components/Error.jsx";
import UserInfo from "./pages/User/ UserInfo.jsx";
import { useEffect, useState } from "react";
import Dashboard from "./pages/admin/Dashboard.jsx";
import Addproduct from "./pages/admin/Addproduct.jsx";
import Order from "./pages/admin/Order.jsx";
import Myproducts from "./pages/admin/Myproducts.jsx";



function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [cartItem, setCartItems] = useState(0)


  return (
    <div className="App">
      <title>eShop - {username}</title>


      <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} username={username} setUsername={setUsername} />
      <ToastContainer position="top-right" />

      <Routes>
        <Route path="/*" element={<Error />}></Route>
        <Route path="/login" element={<Login isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<PrivateComponent></PrivateComponent>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart cartItem={cartItem} setCartItems={setCartItems} />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/orderHistory" element={<OrderHistory />}></Route>

          <Route path="/user" element={<UserInfo />}></Route>
          <Route element={<PrivateAdmin isAdmin={isAdmin} setIsAdmin={setIsAdmin}></PrivateAdmin>}>
            <Route exact path="/admin" element={<Admin />}>
              <Route exact path="dashboard" element={<Dashboard />}></Route>
              <Route exact path="add" element={<Addproduct />}></Route>
              <Route exact path="orders" element={<Order />}></Route>
              <Route exact path="myproducts" element={<Myproducts />}></Route>
            </Route>
          </Route>

        </Route>

      </Routes>

      <Footer />
    </div>

  );
}

export default App;
