import React, { useContext } from "react";

import { CarritoContext } from "../context/CarritoContext";

const CarritoPage = () => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCompra,
    disminuirCompra,
    quitarCompra,
  } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };
  const handlePrint = () => {
    print();
  };

  return (
    <>
      <div className="espacio">
        CarritoApp
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>

                <th scope="col" className="px-6 py-3">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              {listaCompras.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.title}
                  </th>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        aumentarCompra(item.id);
                      }}
                    >
                      +
                    </button>
                    <button>{item.cantidad}</button>
                    <button
                      onClick={() => {
                        disminuirCompra(item.id);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td className="px-6  py-4">
                    <button
                      type="button"
                      className="boton-quitar"
                      onClick={() => {
                        quitarCompra(item.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              <th>
                <b>TOTAL: </b>
              </th>
              <td></td>
              <td>${calcularTotal()}</td>
              <td></td>
            </tbody>
          </table>
          <div>
            <button
              onClick={() => {
                handlePrint();
              }}
              disabled={listaCompras<1}
              className="boton-agregar mt-4"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarritoPage;
