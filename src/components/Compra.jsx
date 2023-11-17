import React, { useEffect, useReducer, useState, useRef } from "react";
import "../index.css";

export default function Compra() {
  const reducer = (state, action) => {
    // console.log(state)
    switch (action.type) {
      case types.mas: //aumenta cantidades
        return state.map((product) =>
          action.payload == product.id && product.cant >= 1
            ? { ...product, cant: product.cant + 1 }
            : product
        );
      case types.menos:
        return state.map((product) =>
          action.payload == product.id && product.cant > 1
            ? { ...product, cant: product.cant - 1 }
            : product
        );
      case types.eliminar:
        return state.filter(
          (product) => action.payload != product.id
          // ? { ...product, cant: product.cant - 1 }
          // : product
        );
      case types.comprar:
        return [...state, action.payload];
    }
    return state;
  };
  const types = {
    menos: "menos",
    mas: "mas",
    comprar: "comprar",
    eliminar: "eliminar",
  };

  const valoresInic = [
    {
      id: 0,
      nombre: "agua",
      cant: 3,
    },
    {
      id: 1,
      nombre: "pancito",
      cant: 10,
    },
    {
      id: 2,
      nombre: "Coca Cola",
      cant: 10,
    },
    {
      id: 3,
      nombre: "Azucar",
      cant: 10,
    },
  ];
  const [lista, dispatch] = useReducer(reducer, valoresInic);
  const [miProd, setMiProd] = useState("");
  const inputName = useRef(null);

  return (
    <>
      <label htmlFor="product">Producto</label>
      <input
        id="product"
        ref={inputName}
        value={miProd}
        onChange={(e) => setMiProd(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          inputName.current.focus();
          setMiProd("");
          dispatch({
            type: types.comprar,
            payload: { id: Date.now(), nombre: miProd, cant: 1 },
          });
        }}
      >
        Agregar
      </button>
      {lista.map((item) => (
        <div key={item.id}>
          Producto: {item.nombre} ({item.cant} unidades)
          <button
            type="button"
            onClick={() => dispatch({ type: types.menos, payload: item.id })}
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: types.mas, payload: item.id })}
            type="button"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: types.eliminar, payload: item.id })}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

/**
 * Pasos use reducer
 * - crear etiquetas, input, componente compra
 * -crear fx useReducer
 * -crear fx reducer
 *
 */
