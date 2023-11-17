import React from 'react'
import { useState } from 'react'

export default function useCounter(valorInicial = 0) {

    const [contador,setContador] = useState(valorInicial)

    const incrementar = (valor = 1) =>{
        setContador(contador + valor)
    }
    const decrementar = (valor = 1,negativo) =>{
        if(!negativo && contador) return
            
        setContador(contador - valor)
    }
    const resetear = () =>{
        setContador(0)
    }

  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
}
