import React, { useState } from "react";
import  useFetchData  from "../hooks/useFetchData";


const UserList = ({ endPoint }) => {
  // console.log(endPoint);
  //customs hook que retorna data y isLoadondig cuando carga
  const { data, isLoading } = useFetchData(endPoint);
  console.log(data);
  console.log(isLoading);

  return (
    <>
      <ul>
        {isLoading ? (
          <p>Cargando!!....</p>
        ) : endPoint == "users" ? (
          data.map(usr => (
            <li key={usr.id}>
              Nombre: {usr.name} email: {usr.email}
            </li>
          ))
        ) : (
          data.map(usr => <li key={usr.id}> Comentarios: {usr.body} </li>)
        )}
      </ul>
    </>
  );
};

export default UserList;
