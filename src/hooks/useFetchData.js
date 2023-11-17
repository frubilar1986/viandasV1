import { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";

/**
 * hook
 * @returns obj
 */
const useFetchData = (endPoint) => {
  // console.log(endPoint)

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getData = async () => {
    const { data, isLoading } = await fetchData(endPoint); //custon hook return obj
    setData(data);
    setIsloading(isLoading);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       ` https://jsonplaceholder.typicode.com/${endPoint}`
  //     );
  //     // console.log(response)
  //     const data = await response.json();
  //     setData(data);
  //     setIsloading(false);
  //     console.log(data);
  //   } catch (err) {
  //     console.log("errorrrrrrrrrrrrrrrrr:::" + err);
  //   }
  // };

  useEffect(() => {
    getData();
  }, [endPoint]); // cambia cuando se realiza click en btn <UserList/>

  return {
    data,
    isLoading
  };
};

export default useFetchData;
