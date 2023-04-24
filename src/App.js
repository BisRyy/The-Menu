import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// redux
import { Provider } from 'react-redux';
import store from './redux/store';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
  // const mode = useSelector((state) => state.auth.mode);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });

  return (
    <HelmetProvider>
      <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </Provider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
