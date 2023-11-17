import React, { useEffect } from "react";
import { useState } from "react";

const WheatherApp = () => {
  const [city, setCity] = useState("");
  const [clima, setClima] = useState("");
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "44bde5ec5b1fcdc876ff45e9466f6ee5";
  const difKelvin = 273.15;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    if (city.length > 0) fetchClima();
    setCity("");
  };

  const fetchClima = async (url) => {
    try {
      const resp = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
      const data = await resp.json();
      console.log(data);
      setClima(data);
    } catch (error) {
      console.log("pepa");
    }
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
    console.log("handleChangeCity");
  };
  // useEffect(()=>{
  //     fetchClima()
  // },[])

  return (
    <div className="bg-gray-100">
      <div className="flex min-h-screen">
        {/* <!-- Sidebar --> */}
        <div className="bg-gray-800 text-gray-100 w-1/4 hidden lg:block">
          <div className="p-4">
            {/* <!-- Contenido de la barra lateral --> */}
            <h1 className="text-2xl font-bold">Sidebar</h1>
            {/* <p>Enlaces o contenido aquí</p> */}
          </div>
        </div>

        {/* <!-- Contenido principal --> */}
        <div className="w-full lg:w-3/4 p-4">
          {/* <!-- Contenido de la página --> */}
          <h1 className="text-3xl font-bold mb-4">Contenido Principal</h1>
          <h1>App clima</h1>
          {/* <p>Contenido de la página principal.</p> */}
          <form onSubmit={onSubmit}>
            <div className="mb-6">
              <label
                for="success"
                className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                Nombre ciudad
              </label>
              <input
                onChange={handleChangeCity}
                value={city}
                type="text"
                id="success"
                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Ingresa ciudad"
              />
              <p className=" hidden mt-2 text-sm text-green-600 dark:text-green-500">
                <span className="font-medium">Well done!</span> Some success
                message.
              </p>
            </div>
          </form>
          {clima && (
            <div>
              <p className="text-2xl">Clima actual de : {clima.name}</p>
              <p>Temperatura: {parseInt(clima?.main?.temp - difKelvin)} C</p>
              <p>Condicion meteorologica: {clima.weather[0].description}</p>
              <img style={{width:"150px ", height:"150px"}}  src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} alt="" />
            </div>
          )}
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-100 text-center p-4">
        <p>Footer - Información de contacto, derechos de autor, etc.</p>
      </footer>
    </div>
  );
};

export default WheatherApp;
