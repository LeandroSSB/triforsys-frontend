import { IconButton } from "@material-ui/core"
import { Container, IconsContainer, SituationIcon } from "./style"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

export const Product = ({ id, name, price, quantity }) => {


  return (
    <Container variant="outlined">
      <IconsContainer>
        
        <IconButton>
          <EditIcon/>
        </IconButton>
        <IconButton>
          <DeleteIcon/>
        </IconButton>

       <SituationIcon disabled color="blue" >
        <LabelImportantIcon/>
       </SituationIcon>

      </IconsContainer>


    </Container>
  )
}


export default Product