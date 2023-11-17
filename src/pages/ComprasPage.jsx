import React, { useContext, useEffect, useState } from 'react'
import Tarjeta from '../components/Tarjeta';
import { ProductosContext } from '../context/ProductosContext';
import { CarritoContext } from '../context/CarritoContext';


const ComprasPage = () => {

const {productos} = useContext(ProductosContext)
const {listaCompras,agregarCompra,aumentarCompra,disminuirCompra,quitarCompra} = useContext(CarritoContext)

const handleAgregar = (compra) => {
  agregarCompra(compra)
}
const handleQuitar = (id) => {
  quitarCompra(id)
}
const handleAumentar = (id) => {
  
}
const handleDisminuir = (id) => {
  
}

  // const [productos , setProductos] = useState([]);

  // const fetchProductos =async () => {
  //     const response = await fetch("https://fakestoreapi.com/products")
  //     const data = await response.json()
  //     setProductos(data)
  // }
  // useEffect(()=>{
  //   fetchProductos()
  // },[])
  // console.log(productos)    /// trasladado como providers
  
  return (
    <div className='espacio' >
      <p>ttps://fakestoreapi.com/products</p>
      {productos.map(producto =>(
        <Tarjeta 
        key={producto.id}
        img={producto.image}
        titulo={producto.title}
        precio={producto.price}
        handleAgregar={()=>handleAgregar(producto)}  
        handleQuitar={()=>handleQuitar(id)}
        />
      ))}
    </div>
  )
}

export default ComprasPage
