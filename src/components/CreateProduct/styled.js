import styled from "styled-components"


export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  width: 500px;
  >div, button {
    margin: 15px;
  }
`
export const ErrorContainer = styled.span`

`

export const Error = styled.p`
  font-size: 15px;
  color: red;
  margin: 0;
`
