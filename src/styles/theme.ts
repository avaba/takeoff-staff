import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#55AE7E",
            light: "#77be97",
            dark: "#3b7958",
            contrastText: "#fff",
        },
        secondary: {
            main: "#FB3640",
            light: "#fb5e66",
            dark: "#af252c",
            contrastText: "#fff",
        },
        background: {paper: '#222226', default: '#333336'},
    },
    typography: {
        fontFamily: "Open Sans, sans-serif"
    }
})