import { ProductProvider } from "./product"


const Provider = ({ children }) => {

  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  )
}


export default Provider