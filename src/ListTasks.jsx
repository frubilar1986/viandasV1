import React, { useState } from "react";
import AddTask from "./components/AddTask";

const ListTasks = () => {
  let lista = [
    {id:0, name: "instalaciones Varias", visto: true },
    {id:1, name: "instalaciones Parias", visto: true },
    {id:2, name: "instalaciones Tarias", visto: true },
  ];
  const [arreglo, setArreglo] = useState(lista);



  const onAddTask = (val)=>{
    if(val<1) return
    console.log(val)
    let valor = val.trim()
    const envio = {
          name: valor,
          visto: false,
    }
    setArreglo([...arreglo,envio])
  }



  return (
    <>
      <h1>Liata de temas del curso</h1>
      <AddTask agregarTarea={onAddTask} />
      <ol>
        {arreglo.map((item) => (
          <li key={item.id}>{item.name}  </li>
        ))}
      </ol>
    </>
  );
};

export default ListTasks;
