import * as yup from "yup"


export default yup.object().shape({
  name: yup.string().required("Name required"),
  price: yup.number().typeError("Price must be a number.").required("Price required"),
  quantity: yup.number().typeError("Quantity must be a number.").required("quantity required"),
})