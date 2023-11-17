import { ProductosContext } from "./ProductosContext";
import { useState, useEffect } from "react";

 const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductos(data);
  };
  useEffect(() => {
    fetchProductos();
  }, []);
//   console.log(productos);
  return (
    <ProductosContext.Provider value={ {productos} }>
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;
