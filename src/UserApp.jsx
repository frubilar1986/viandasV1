import React, { useState } from "react";
import UserList from "./components/UserList";

const UserApp = () => {
  const [endPoint, setEndpoint] = useState("users");

  const handleFetch = () => {
    console.log("api");
    endPoint == 'users'  
      ?setEndpoint("comments")
      :setEndpoint("users")
  };  

  return (
    <>
      <h1>Lista de usuarios </h1>
      <button onClick={handleFetch}>llama a la api</button>
      <UserList endPoint = {endPoint} ></UserList>
    </>
  );
};

export default UserApp;
