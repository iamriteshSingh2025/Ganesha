import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import logo from '../../../assets/logo.png';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/categories', label: 'Gift Categories' },
  { to: '/product/tech-gifts', label: 'Tech Gifts' },
  { to: '/product/festive-hampers', label: 'Festive Hampers' },
  { to: '/contact', label: 'Get a Quote' },
];

const categories = [
  { to: '/product/tech-gifts', label: 'Tech Gifts' },
  { to: '/product/festive-hampers', label: 'Festive Hampers' },
  { to: '/product/welcome-kits', label: 'Employee Welcome Kits' },
  { to: '/product/office-sets', label: 'Office Gift Sets' },
  { to: '/product/customized', label: 'Customized Products' },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: '#ffffff' }}>
      {/* CTA Banner */}
      <Box
        sx={{
          borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
          background: 'linear-gradient(135deg, #0F1C2E 0%, #1A2D47 100%)',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 4,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  mb: 1,
                  color: '#ffffff',
                }}
              >
                Ready to Make Gifting Memorable?
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Let's plan your next corporate gifting campaign. Get a free quote in 24 hours.
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="secondary"
              size="large"
              id="footer-quote-btn"
              sx={{
                px: 4,
                py: 2,
                fontSize: '16px',
                whiteSpace: 'nowrap',
              }}
            >
              Request a Free Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Footer */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 4 }}>
            {/* Brand column */}
            <Grid item xs={12} md={4}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  textDecoration: 'none',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Givye Logo"
                  sx={{
                    height: 48,
                    width: 'auto',
                    borderRadius: '6px',
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

              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4, lineHeight: 1.7 }}>
                India's trusted corporate gifting partner. We help companies create
                lasting impressions through premium, customized gifting solutions.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                {[
                  {
                    icon: <FacebookIcon fontSize="small" />,
                    href: 'https://facebook.com',
                    label: 'Facebook',
                    hoverColor: '#1877F2',
                  },
                  {
                    icon: <InstagramIcon fontSize="small" />,
                    href: 'https://instagram.com',
                    label: 'Instagram',
                    hoverColor: '#E4405F',
                  },
                  {
                    icon: <TwitterIcon fontSize="small" />,
                    href: 'https://twitter.com',
                    label: 'Twitter',
                    hoverColor: '#1DA1F2',
                  },
                  {
                    icon: <LinkedInIcon fontSize="small" />,
                    href: 'https://linkedin.com',
                    label: 'LinkedIn',
                    hoverColor: '#0077B5',
                  },
                  {
                    icon: <YouTubeIcon fontSize="small" />,
                    href: 'https://youtube.com',
                    label: 'YouTube',
                    hoverColor: '#FF0000',
                  },
                  {
                    icon: <WhatsAppIcon fontSize="small" />,
                    href: 'https://wa.me/917068968499',
                    label: 'WhatsApp',
                    hoverColor: '#25D366',
                  },
                ].map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      width: 38,
                      height: 38,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        bgcolor: social.hoverColor,
                        color: '#ffffff',
                        transform: 'translateY(-4px)',
                        boxShadow: `0 4px 12px ${social.hoverColor}60`,
                        borderColor: social.hoverColor,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={6} sm={4} md={2.5}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: 16,
                  letterSpacing: '0.5px',
                  color: 'secondary.main',
                }}
              >
                Quick Links
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {quickLinks.map((l) => (
                  <Box component="li" key={l.to}>
                    <Link
                      component={RouterLink}
                      to={l.to}
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': { color: 'secondary.main', pl: 0.5 },
                        transition: 'all 0.2s ease',
                        display: 'inline-block',
                      }}
                    >
                      {l.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Categories */}
            <Grid item xs={6} sm={4} md={2.5}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: 16,
                  letterSpacing: '0.5px',
                  color: 'secondary.main',
                }}
              >
                Gift Categories
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {categories.map((l) => (
                  <Box component="li" key={l.to}>
                    <Link
                      component={RouterLink}
                      to={l.to}
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': { color: 'secondary.main', pl: 0.5 },
                        transition: 'all 0.2s ease',
                        display: 'inline-block',
                      }}
                    >
                      {l.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={4} md={3}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  mb: 3,
                  fontSize: 16,
                  letterSpacing: '0.5px',
                  color: 'secondary.main',
                }}
              >
                Contact Us
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box component="li" sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <PlaceIcon sx={{ color: 'secondary.main', fontSize: 20, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Delhi, Noida, India
                  </Typography>
                </Box>
                <Box component="li" sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <PhoneIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                  <Link
                    href="tel:+917068968499"
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&:hover': { color: 'secondary.main' },
                    }}
                  >
                    +91 7068968499
                  </Link>
                </Box>
                <Box component="li" sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <EmailIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                  <Link
                    href="mailto:rs3422863@gmail.com"
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&:hover': { color: 'secondary.main' },
                    }}
                  >
                    rs3422863@gmail.com
                  </Link>
                </Box>
                <Box component="li" sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <AccessTimeIcon sx={{ color: 'secondary.main', fontSize: 20, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Mon–Sat, 10am – 6pm
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Bar */}
      <Box sx={{ py: 3, bgcolor: '#0a1320' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              © {new Date().getFullYear()} Givye Corporate Gifts. All rights reserved.
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              Made with 💖 for India's corporates
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
