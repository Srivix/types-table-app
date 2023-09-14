import { createTheme } from "@mui/material";
import { breakpoints } from "./config";
import { darkPalette, lightPalette } from "./config/palette";

export const darkTheme = createTheme({
    breakpoints,
    palette: darkPalette,
    spacing: 4,
})

export const lightTheme = createTheme({
    breakpoints,
    palette: lightPalette,
    spacing: 4,
})