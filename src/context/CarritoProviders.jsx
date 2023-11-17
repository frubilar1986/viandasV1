import { useReducer } from "react";
import React from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];
const CarritoProviders = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[carrito] Agregar Compra":
        return [...state, action.payload];
      case "[carrito] aumentar cantidad ":        
        return state.map((item) => {
          const cant = item.cantidad + 1;
          if (item.id === action.payload) return { ...item, cantidad: cant };
          return item;
        });
      case "[carrito] disminuir compra":
        return state.map((item) => {
          const cant = item.cantidad - 1;
          if (item.id === action.payload && item.cantidad > 1)
            return { ...item, cantidad: cant };
          return item;
        });
        
        break;
      case "[carrito] quitar compra":
        return state.filter((compra) => compra.id !== action.payload);
      default:
        return state;
    }
  };
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1
    const action = {
      type: "[carrito] Agregar Compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCompra = (id) => {
    const action = {
      type: "[carrito] aumentar cantidad ",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCompra = (id) => {
    const action = {
      type: "[carrito] disminuir compra",
      payload: id,
    };
    dispatch(action);
  };

  const quitarCompra = (id) => {
    const action = {
      type: "[carrito] quitar compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCompra,
        disminuirCompra,
        quitarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProviders;
