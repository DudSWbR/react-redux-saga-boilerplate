import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'IBM Plex Sans',
    fontDisplay: 'swap',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1140,
      xl: 1920,
    },
  },
  palette: {
    common: {
      bgModal: 'rgba(0,0,0,0.5)',
      black: '#484847',
      white: '#fff',
      disabled: 'rgba(0,0,0,0.24)',
      disabledNegative: 'rgba(255,255,255,0.24)',
      transparent: 'transparent',
      alert: '#FF9800',
      success: '#23B318',
      grey: '#797979',
      lightGrey: '#C9C9C9',
      light: '#f5f5f5',
      negative: {
        static: '#FFFFFF',
        hover: '#0062FF',
      },
    },
    primary: {
      light: '#132AFF',
      main: '#132AFF',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2BDBA6',
      main: '#2BDBA6',
      dark: '#006647',
      contrastText: '#fff',
    },
    tertiary: {
      main: '#488EFF',
    },
    error: {
      main: '#DE1616',
    },
  },
  gradient: {
    main: 'rgba(0, 0, 0, 0.5)',
  },
});

export default theme;
