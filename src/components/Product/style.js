import { IconButton, Paper } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled(Paper)`
  width: 32rem;
  height: 20rem;
  padding: 20px;
  margin: 10px 0px;
`

export const IconsContainer = styled(Paper)`



`

export const SituationIcon = styled(IconButton)`
  path{
    color: ${props => props.color}
  }

`