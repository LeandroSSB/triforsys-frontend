import axios from "axios"
import { Form, Error, ErrorContainer } from "./styled"
import { useForm} from "react-hook-form"
import productSchema from "../../schemas/product.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, TextField } from "@material-ui/core"

const CreateProduct = () => {

  const onSubmit = async ({ name, price, quantity }) => {
    try {
      const { data } = await  axios.post("",{ name, price, quantity })

    }catch( err ){
      alert(err)
    }
  }
  
  const { register, handleSubmit, formState: { errors },} = useForm({ resolver: yupResolver(productSchema) })
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Name"     error={ !!errors?.name }      {...register("name")}       required  variant="outlined"/>
      <TextField label="Price"    error={ !!errors?.price }     {...register("price")}      required  variant="outlined"/>
      <TextField label="Quantity" error={ !!errors?.quantity }  {...register("quantity")}   required  variant="outlined"/>
      <Button type="submit" variant="outlined">
        Create
      </Button>
      <ErrorContainer>
        {Object.values(errors).map(a => <Error key={a.message}> {a.message} </Error>)}
      </ErrorContainer>
    </Form>
  )
}

export default CreateProduct