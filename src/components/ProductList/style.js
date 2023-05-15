import { Paper } from "@material-ui/core"
import styled from "styled-components"


export const Container = styled(Paper)`
  width: 50vw;
  min-height: 50vh;
  max-height: 80vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  overflow-y: auto;
`