import { Routes, Route, useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateComponent from "./components/Private";
import PageNotFound from "./pages/PageNotFound";

function App() {


  return (
    <div className="App">

      <Header />
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path="*"
          element={<PageNotFound />}
        />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route element={<PrivateComponent />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/add" element={<AddEdit />} />
          <Route exact path="/update/:id" element={<AddEdit />} />
          <Route exact path="/view/:id" element={<View />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
