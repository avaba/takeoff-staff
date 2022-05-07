import styled, {ThemeProps} from "styled-components";
import {Theme} from "@mui/material";

export const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const Form = styled.form`
  width: 350px;
  max-width: 100%;
`

export const Title = styled.h1`
  color: ${(props: ThemeProps<Theme>) => props.theme.palette.primary.main};
  font-size: 24px;
  margin-top: 0;
  text-align: center;
`
