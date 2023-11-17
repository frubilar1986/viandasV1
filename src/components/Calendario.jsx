import React, { useReducer, useState } from "react";

export default function Calendario() {
  const [unidades, setUnidades] = useState(1);
  
  const types = {
    masM: "masM",
    menosM: "menosM",
    masA: "masA",
    menosA: "menosA",
  };
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const valorIni = { //object
    m: month, //mes actual
    a: year, //ano actual
  };
  const reducer = (state, action) => { 
    // console.log(actionState);
    let newMonth = state.m;
    let newYear = state.a;
    switch (action.type) {
      case types.menosM:
        newMonth = newMonth == 0 ? 11 : newMonth - 1;
        break;
      case types.masM:
        newMonth = newMonth == 11 ? (newMonth = 0) : newMonth++;
        break;
      case types.menosA:
        newYear = newYear - unidades;
        break;
      case types.masA:
        newYear = newYear + unidades;
        // console.log(newYear)
        break;
    }
    return { m: newMonth, a: newYear };
  };

  const [fecha, dispatch] = useReducer(reducer, valorIni);
  //   console.log(state)
  return (
    <div>
      <div
        className={
          (fecha.m < month && fecha.a <= year) || fecha.a < year
            ? "textRojo"
            : "textVerde"
        }
      >
        {meses[fecha.m]} ({fecha.a})
      </div>
      <div>
        Meses:{" "}
        <button
          onClick={() => {
            dispatch({ type: types.menosM });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: types.masM });
          }}
        >
          +
        </button>
      </div>
      <div>
        Anos:{" "}
        <button
          onClick={() =>
            dispatch({ type: types.menosA, payload: Number(unidades) })
          }
        >
          -
        </button>
        <input
          type="number"
          value={unidades}
          onChange={(event) => setUnidades(event.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: types.masA, payload:unidades })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
//enviar datos al reduce()
