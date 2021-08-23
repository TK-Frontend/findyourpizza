import { createContext } from 'react'

export const themes = {
    light: {
        color: '#ffffff',
    },
    dark: {
        color: '#252525',
    },
};

export const ThemeContext = createContext(themes.light);