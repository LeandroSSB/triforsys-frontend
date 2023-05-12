import { createContext, useContext, useState } from "react";


const productContext = createContext([])
export const ProductProvider  = ({ children }) => {
  const [ product, setProduct ] = useState({})

  const createProduct = ( product ) => {

  }

  const removeProduct = ( product ) => {

  }

  return (
    <productContext.Provider value={{ product, createProduct, removeProduct }}>
      {children}
    </productContext.Provider>
  )
}

export const useProduct = () => useContext(productContext)