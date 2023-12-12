import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/Home/webHome";
import Login  from "./components/Login/login";
import Page01 from "./components/Cadastro/Pag01";
import Page02 from "./components/Cadastro/Pag02";
import Page03 from "./components/Cadastro/Pag03";
import Page04 from "./components/Cadastro/Pag04";
import Footer from "./components/Footer/footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/Pag01" element={<Page01 />}></Route>
        <Route exact path="/Pag02" element={<Page02 />}></Route>
        <Route exact path="/Pag03" element={<Page03 />}></Route>
        <Route exact path="/Pag04" element={<Page04 />}></Route>
        <Route exact path="/footer" element={<Footer />}></Route>
      </Routes>
    </BrowserRouter>

  );
}
export default AppRoutes;