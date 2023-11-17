import React from "react";
import useCounter from "../hooks/useCounter";

const Contador = () => {
  const { contador, incrementar, decrementar, resetear } = useCounter(0);

  
  return (
    <>
      <h1>Contador:{contador} </h1>
      <button onClick={() => incrementar()}>+1</button>
      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
      <button onClick={() => decrementar(1,false)}>-1</button>
      <button onClick={() => resetear()}>0</button>
    </>
  );
};

export default Contador;
