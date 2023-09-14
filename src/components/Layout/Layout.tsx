import MoonIcon from '@/assets/icons/MoonIcon'
import SunIcon from '@/assets/icons/SunIcon'
import { darkTheme, lightTheme } from '@/libs/theme/theme'
import { Stack, Switch, Theme } from '@mui/material'
import { ReactNode, createContext, useEffect, useState } from 'react'

export const ThemmeContext = createContext<Theme>(darkTheme)

const Layout = ({ children }: { children: ReactNode }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? darkTheme : lightTheme)
    localStorage.setItem('themeMode', event.target.checked ? 'dark' : 'light')
  }

  const [theme, setTheme] = useState(darkTheme)

  useEffect(() => {
    setTheme(initializeThemeMode())
  }, [])

  const initializeThemeMode = () => {
    if (localStorage.getItem('themeMode')) {
      const isDarkDefault = localStorage.getItem('themeMode') === 'dark'
      localStorage.setItem('themeMode', isDarkDefault ? 'dark' : 'light')

      return isDarkDefault ? darkTheme : lightTheme
    }

    const isDarkDefault = window.matchMedia('(prefers-color-scheme: dark)').matches
    localStorage.setItem('themeMode', isDarkDefault ? 'dark' : 'light')

    return isDarkDefault ? darkTheme : lightTheme
  }

  return (
    <ThemmeContext.Provider value={theme}>
      {/*Header*/}
      <Stack
        justifyContent='flex-end'
        direction='row'
        height={64}
        width={1}
        sx={{ backgroundColor: theme.palette.primary.dark }}
      >
        <Stack marginY='auto' marginX={12}>
          <Switch
            icon={
              <SunIcon
                fill={theme.palette.primary.main}
                style={{ background: theme.palette.secondary.main, borderRadius: '50%', padding: 2 }}
                width={26}
                height={26}
              />
            }
            checkedIcon={
              <MoonIcon
                fill={theme.palette.primary.dark}
                style={{ background: theme.palette.secondary.dark, borderRadius: '50%' }}
                width={26}
                height={26}
              />
            }
            sx={{
              width: 50,
              height: 26,
              padding: 1,
              '& .MuiSwitch-switchBase': {
                padding: 0,
                '&.Mui-checked': {
                  '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.secondary.light,
                  },
                },
              },
              '& .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.secondary.light,
                borderRadius: 20 / 2,
              },
            }}
            checked={theme.palette.mode === 'dark'}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Stack>
      </Stack>
      <Stack
        alignItems='center'
        alignContent='center'
        minHeight='calc(100vh - 128px)'
        bgcolor={theme.palette.background.default}
      >
        {children}
      </Stack>
      {/*Footer*/}
      <Stack height={64} width={1} sx={{ backgroundColor: theme.palette.primary.dark }}>
        Footer
      </Stack>
    </ThemmeContext.Provider>
  )
}

export default Layout
