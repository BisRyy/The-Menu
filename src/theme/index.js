import PropTypes from 'prop-types';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import lightPalette from './palette';
import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
import componentsOverride from './overrides';


// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

const darkPalette = {
  mode: 'dark',
}


export default function ThemeProvider({ children }) {
  const mode = useSelector((state) => state.auth.mode);
  
  useEffect(() => {
    console.log('mode', mode);
  }, [mode]);

  const themeOptions = useMemo(
    () => ({
      // palette:{
      //   mode: 'dark'
      // },
      palette: lightPalette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const darkThemeOptions = useMemo(
    () => ({
      palette: darkPalette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );
  
  
  const darkTheme = createTheme(darkThemeOptions);
  darkTheme.components = componentsOverride(darkTheme);

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={mode === 'light' ? theme : darkTheme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
