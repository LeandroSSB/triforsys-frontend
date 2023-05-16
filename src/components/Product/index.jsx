import { IconButton } from "@material-ui/core"
import { ContainerStyled, IconsContainer, SituationIcon, ProductTitle, ProductDetails, ProductItem } from "./style"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useProduct } from "./../../context/index"
import { useState } from "react";

export const Product = ({ id, name, price, quantity }) => {
  const [productName, setProductName] = useState(name)
  const [productPrice, setProductPrice] = useState(price)
  const [productQuantity, setProductQuantity] = useState(quantity)

  const situationResolver = (q) => {
    if(q <= 10) return "red"
    else if( q > 10 && q <= 30) return "orange"
    else if( q >= 31) return "green"
    return ""
  }

  const { removeProduct, editProduct } = useProduct()

  

  return (
    <ContainerStyled variant="outlined">
      
      <IconsContainer>
        
        <IconButton>
          <EditIcon/>
        </IconButton>

        <IconButton onClick={() => removeProduct(id)}>
          <DeleteIcon/>
        </IconButton>
        
        <ProductTitle>
          aaaaaaaaaaaaa
        </ProductTitle>

       <SituationIcon color={situationResolver(quantity || 30)} badgeContent={quantity || 30} disabled  >
          <LabelImportantIcon/>
       </SituationIcon>

      </IconsContainer>

      <ProductDetails>
        <ProductItem>
          Price: {price || "30"}
        </ProductItem>

        <ProductItem>
          Quantity: {quantity || "30"}
        </ProductItem>
      </ProductDetails>

    </ContainerStyled>
  )
}


export default Product