import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F1C2E', // navy
      light: '#1A2D47', // navy-light
      dark: '#0a1320', 
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C9A84C', // gold
      light: '#E2C678', // gold-light
      dark: '#b39540',
      contrastText: '#0F1C2E',
    },
    background: {
      default: '#FAF8F5', // off-white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937', // gray-800
      secondary: '#4B5563', // gray-600
      disabled: '#9CA3AF', // gray-400
    },
    grey: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      400: '#9CA3AF',
      600: '#4B5563',
      800: '#1F2937',
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: '#0F1C2E',
    },
    h2: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: '#0F1C2E',
    },
    h3: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: '#0F1C2E',
    },
    h4: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: '#0F1C2E',
    },
    h5: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: '#0F1C2E',
    },
    h6: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 600,
      color: '#0F1C2E',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.3px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.65,
    },
    subtitle1: {
      fontSize: '17px',
      lineHeight: 1.7,
      color: '#4B5563',
    },
  },
  shape: {
    borderRadius: 6, // matching --radius-sm initially, components can override
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        *, *::before, *::after {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#E2C678',
            boxShadow: '0 8px 32px rgba(201,168,76,0.25)',
          },
        },
      },
    },
  },
});

export default theme;
