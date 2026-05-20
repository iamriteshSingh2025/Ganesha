import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar/Navbar';
import Footer from './Components/layout/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import CategoriesPage from './pages/Categories/CategoriesPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import ContactPage from './pages/Contact/ContactPage';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;