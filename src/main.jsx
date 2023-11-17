import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ListTasks from "./ListTasks.jsx";
import UserApp from "./UserApp.jsx";
import Contador from "./components/Contador.jsx";
import Usuarios from "./components/Usuarios.jsx";
import Calendario from "./components/Calendario.jsx";
import Compra from "./components/Compra.jsx";
import { Navbar } from "flowbite-react";
import WheatherApp from "./WheatherApp.jsx";
import { BrowserRouter } from "react-router-dom";
import CarritoApp from "./CarritoApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      
      <CarritoApp />
      {/* <ListTasks/> */}
      {/* <UserApp/> */}
      {/* <Contador/> */}
      {/* <Navbar/> */}
      {/* <Usuarios/> */}
      {/*jab*/}
      {/* <Calendario/> */}
      {/* <Compra/> */}
      {/* <WheatherApp/> */}
    </React.StrictMode>
  </BrowserRouter>
    
  
);
