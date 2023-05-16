import { List, Paper, Badge, ListItem } from "@material-ui/core";
import styled from "styled-components";

export const ContainerStyled = styled(Paper)`
  width: 32rem;
  height: 20rem;
  padding: 20px;
  margin: 10px 0px;
`

export const IconsContainer = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  span {
    margin-left: auto;
  }
`

export const SituationIcon = styled(Badge)`
  color: ${props => props.color};
`


export const ProductTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
`

export const ProductDetails = styled(List)`

`
export const ProductItem = styled(ListItem)`
  font-weight: 600;
  font-size: 20px
`