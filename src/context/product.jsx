import { createContext, useContext, useState } from "react";


const productContext = createContext([])
export const ProductProvider  = ({ children }) => {
  const [ product, setProduct ] = useState([])

  const createProduct = ( product ) => {

  }

  const removeProduct = ( product ) => {

  }
  
  const editProduct = ( product ) => {

  }

  return (
    <productContext.Provider value={{ product, createProduct, removeProduct, editProduct }}>
      {children}
    </productContext.Provider>
  )
}

export const useProduct = () => useContext(productContext)