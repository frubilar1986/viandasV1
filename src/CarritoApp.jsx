import React from "react";
import Nav from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import CarritoPage from "./pages/CarritoPage";
import ComprasPage from "./pages/ComprasPage";
import ProductosProvider from "./context/ProductosProvider";
import CarritoProviders from "./context/CarritoProviders";

const CarritoApp = () => {
  return (
    <>
      <ProductosProvider>
        <CarritoProviders>
          <Nav />
          <Routes>
            <Route path="/" element={<ComprasPage />}></Route>
            <Route path="/carrito" element={<CarritoPage />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </CarritoProviders>
      </ProductosProvider>
    </>
  );
};

export default CarritoApp;
