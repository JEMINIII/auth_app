import React from "react";
import { BrowserRouter, Routes,Route,Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
// import { Create } from "./Create";
import {Home} from "./pages/Home.jsx"
import {Create} from "./pages/Create.jsx"
import Read from "./pages/Read.jsx"
import Update from "./pages/Update.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import "./style.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import "./style.scss"
// import Sidebar from "./components/Sidebar.jsx";

const Layout = () =>{
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
function App(){
  return (
    <div className="app">
    <div className="container">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/read/:id" element={<Read />}/>
      <Route path="/edit/:id" element={<Update />}/>
    </Route>
      
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
    </BrowserRouter>
    </div>
    </div>
  )
}

export default App



