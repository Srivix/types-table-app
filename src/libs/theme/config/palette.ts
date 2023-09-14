import { PaletteOptions } from "@mui/material/styles"

export const commonPalette = {
    white: '#ffffff',
    black: '#000000',
}

export const yellowPalette = {
    50: '#fdf8e6',
    100: '#fbedc2',
    200: '#f8e199',
    300: '#f5d470',
    400: '#f3cb51',
    500: '#f1c232',
    600: '#efbc2d',
    700: '#edb426',
    800: '#ebac1f',
    900: '#e79f13',
}

export const bluePalette = {
    50: '#e2eaf2',
    100: '#b6cbdf',
    200: '#85a9ca',
    300: '#5487b4',
    400: '#306da4',
    500: '#0b5394',
    600: '#0a4c8c',
    700: '#084281',
    800: '#063977',
    900: '#032965',
}

export const greyPalette = {
    50: '#f0f0f0',
    100: '#f5f5f5',
    200: '#bac1c2',
    300: '#9ba9ab',
    400: '#839699',
    500: '#6c8488',
    600: '#516062',
    700: '#424c4e',
    800: '#313738',
    900: '#091112',
}

export const backgroundLightPalette = {
    default: yellowPalette[300],
    paper: commonPalette.white,
    primary: yellowPalette[300],
    secondary: bluePalette[200],
}

export const backgroundDarkPalette = {
    default: bluePalette[300],
    paper: commonPalette.white,
    primary: bluePalette[300],
    secondary: yellowPalette[200],
}

export const lightPalette: PaletteOptions = {
    mode: 'light',
    common: commonPalette,
    background: backgroundLightPalette,
    primary: {
        main: yellowPalette[500],
        dark: yellowPalette[900],
        light: yellowPalette[200],
        contrastText: commonPalette.black
    },
    secondary: {
        main: bluePalette[500],
        dark: bluePalette[900],
        light: bluePalette[200],
        contrastText: commonPalette.white
    },
    text: {
        secondary: greyPalette[700],
        primary: greyPalette[800],
        disabled: greyPalette[200],
    }
}

export const darkPalette: PaletteOptions = {
    mode: 'dark',
    common: commonPalette,
    background: backgroundDarkPalette,
    primary: {
        main: bluePalette[500],
        dark: bluePalette[900],
        light: bluePalette[200],
        contrastText: commonPalette.white
    },
    secondary: {
        main: yellowPalette[500],
        dark: yellowPalette[900],
        light: yellowPalette[200],
        contrastText: commonPalette.black
    },
    text: {
        secondary: greyPalette[700],
        primary: greyPalette[800],
        disabled: greyPalette[200],
    }
}