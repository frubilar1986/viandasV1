import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [estado, setEstado] = useState({
    data: null,
    isLoading: true,
    error: null,
  });
  const {data,isLoading,error} = estado

  const getFetch = async () => {
    if (!url) return;
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data)
      setEstado({
        data,
        isLoading: false,
        error,
      });
    } catch (error) {
      console.log(error);
      setEstado({
        data: null,
        isLoading: false,
        error: error,
      });
    }
  };
  useEffect(() => {
    if (!url) return;
    getFetch();
   
  }, [url]);

  return {
    data,
    isLoading,
    error
  };
};

export default useFetch;
