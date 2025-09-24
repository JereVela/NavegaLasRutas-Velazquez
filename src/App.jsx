import React from 'react';
import NavBar from "./navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import Catalogo from "./pages/Catalogo";
import CategoriaPage from './pages/CategoriaPage'; 
import DetailPage from './pages/DetailPage';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categoria/:nombre" element={<CategoriaPage />} /> 
        <Route path="/producto/:id" element={<DetailPage />}/>
      </Routes>
    </Router>
  );
};
export default App;