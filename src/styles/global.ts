import {createGlobalStyle, ThemeProps} from "styled-components";
import {Theme} from "@mui/material";

export default createGlobalStyle`
  * {
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b4b7bd;
    }
  }

  body {
    font-size: 16px;
    line-height: 1.4;
    font-family: 'Open Sans', sans-serif;
    color: ${(props: ThemeProps<Theme>) => props.theme.palette.text.primary};
    background: ${(props: ThemeProps<Theme>) => props.theme.palette.background.paper};
  }
  
  a {
    text-decoration: none;
    color: ${(props: ThemeProps<Theme>) => props.theme.palette.text.primary};
  }
`