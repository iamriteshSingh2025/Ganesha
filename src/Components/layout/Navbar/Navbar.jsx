import { useState, useEffect } from 'react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../../assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/categories', label: 'Gift Categories' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled ? 'rgba(15, 28, 46, 0.98)' : 'rgba(15, 28, 46, 0.90)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 72, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Givye Logo"
                sx={{
                  height: 42,
                  width: 'auto',
                  borderRadius: '4px',
                  objectFit: 'contain',
                }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    color: '#ffffff',
                    fontSize: '20px',
                    letterSpacing: '0.5px',
                  }}
                >
                  Givye
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'secondary.main',
                  }}
                >
                  Corporate Gifts
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box
              component="nav"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  end={link.to === '/'}
                  sx={{
                    px: 2,
                    py: 1,
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '14px',
                    fontWeight: 500,
                    borderRadius: '6px',
                    letterSpacing: '0.2px',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: '#ffffff',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                    '&.active': {
                      color: 'secondary.main',
                      backgroundColor: 'rgba(201, 168, 76, 0.1)',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* CTA */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="secondary"
                id="nav-cta-btn"
                sx={{
                  px: 2.5,
                  py: 1.2,
                  fontSize: '14px',
                  borderRadius: 1.5,
                }}
              >
                Get a Quote
              </Button>
            </Box>

            {/* Mobile Hamburger */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              id="mobile-menu-btn"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(15, 28, 46, 0.98)',
            backdropFilter: 'blur(12px)',
            color: '#ffffff',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {navLinks.map((link) => (
            <ListItem disablePadding key={link.to}>
              <ListItemButton
                component={NavLink}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: 2,
                  color: 'rgba(255, 255, 255, 0.75)',
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'rgba(201, 168, 76, 0.08)',
                  },
                  '&.active': {
                    color: 'secondary.main',
                    backgroundColor: 'rgba(201, 168, 76, 0.12)',
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontSize: 16, fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', pt: 4 }}>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="secondary"
            fullWidth
            id="mobile-cta-btn"
            onClick={() => setDrawerOpen(false)}
            sx={{
              py: 1.5,
              fontSize: '15px',
              borderRadius: 2,
            }}
          >
            Get a Quote
          </Button>
        </Box>
      </Drawer>
      {/* Spacer to push content down below fixed Navbar */}
      <Box sx={{ height: 72 }} />
    </>
  );
}