import React, { useState } from "react";

const AddTask = ({ agregarTarea }) => {
  const [input, setImput] = useState("");

  const onInputChange = (e) => {
    setImput(e.target.value);
    console.log(input)
  };

  const onSubmit = (e) => {
    // const envio = {
    //   name: input,
    //   visto: false,
   // };
    e.preventDefault();
    //  agregarTarea(tareas => [...tareas, envio])
     agregarTarea(input)
    // agregarTarea('')
    setImput('')
    
  };
  return <>
    <form  onSubmit={onSubmit}>
        <input type="text" 
               placeholder="Ingresar una tarea nueva" 
               value={input}
               onChange={onInputChange}  
        />
    </form>
  </>;
};

export default AddTask;
