import { CreateProduct, Header, ProductList } from "./components"
import { useProduct } from "./context"

function App() {

  return (
    <>
      <CreateProduct/>
      <ProductList/>
    </>
  )
}

export default App
