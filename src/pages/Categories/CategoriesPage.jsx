import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const categories = [
  {
    id: 'tech-gifts',
    icon: '💻',
    title: 'Tech Gifts',
    desc: 'Impress your employees and clients with the latest tech accessories. From wireless earbuds to smart notebooks, we have trending gadgets that everyone loves.',
    img: '/images/cat_tech.png',
    tags: ['Earbuds', 'Power Banks', 'USB Hubs', 'Webcams', 'Smart Gadgets'],
    min: '₹500',
    max: '₹5,000',
  },
  {
    id: 'festive-hampers',
    icon: '🎊',
    title: 'Festive Hampers',
    desc: 'Make every festival special with premium hampers. Diwali, Eid, Christmas, Holi — our hampers are filled with sweets, dry fruits, and festive essentials.',
    img: '/images/cat_festive.png',
    tags: ['Diwali Hampers', 'Dry Fruits', 'Sweet Boxes', 'Diyas & Candles', 'Gift Baskets'],
    min: '₹800',
    max: '₹8,000',
  },
  {
    id: 'welcome-kits',
    icon: '🎒',
    title: 'Employee Welcome Kits',
    desc: 'Make your new joiners feel valued from day one. Our onboarding kits are curated to reflect your company culture and make a lasting impression.',
    img: '/images/cat_welcome.png',
    tags: ['Notebooks', 'Mugs', 'Tote Bags', 'Water Bottles', 'ID Holders'],
    min: '₹700',
    max: '₹4,000',
  },
  {
    id: 'office-sets',
    icon: '🗂️',
    title: 'Office Gift Sets',
    desc: 'Elegant desk accessories and executive sets for top performers, client gifts, and leadership appreciation. Premium quality, beautifully packaged.',
    img: '/images/cat_office.png',
    tags: ['Leather Diaries', 'Pen Sets', 'Desk Organizers', 'Card Holders', 'Executive Kits'],
    min: '₹1,000',
    max: '₹10,000',
  },
  {
    id: 'customized',
    icon: '🖨️',
    title: 'Customized Products',
    desc: 'Your brand on every gift. We offer logo printing, engraving, and custom packaging on a wide range of products. Build brand recall effortlessly.',
    img: '/images/cat_customized.png',
    tags: ['Logo Printing', 'Engraved Pens', 'Custom Mugs', 'Branded Bags', 'Custom Packaging'],
    min: '₹200',
    max: '₹3,000',
  },
  {
    id: 'premium-hampers',
    icon: '🏆',
    title: 'Premium Hampers',
    desc: 'For your most valued clients and key executives — ultra-luxury hampers with imported chocolates, premium wines, skincare, and gourmet selections.',
    img: '/images/cat_festive.png',
    tags: ['Imported Chocolates', 'Premium Wines', 'Luxury Candles', 'Skincare', 'Gourmet Snacks'],
    min: '₹3,000',
    max: '₹25,000',
  },
];

/* ─── Gold Divider Component ─────────────────────────────────── */
function GoldDivider({ left = false, sx }) {
  return (
    <Box
      sx={{
        width: 60,
        height: 3,
        background: 'linear-gradient(90deg, #C9A84C, #E2C678)',
        borderRadius: '2px',
        mx: left ? 0 : 'auto',
        my: 2,
        ...sx,
      }}
    />
  );
}

export default function CategoriesPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 0 }}>
      {/* Page Hero */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: '#ffffff',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="span"
            sx={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'secondary.main',
              mb: 2,
            }}
          >
            Explore Our Range
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 3,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Gift Categories
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', md: '18px' },
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7,
            }}
          >
            From tech gadgets to luxury hampers — discover the perfect gift for every occasion, team size, and budget.
          </Typography>
        </Container>
      </Box>

      {/* Categories List */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 } }}>
            {categories.map((cat, i) => (
              <Grid
                container
                spacing={{ xs: 4, md: 8 }}
                key={cat.id}
                id={`category-${cat.id}`}
                sx={{
                  flexDirection: { xs: 'column', md: i % 2 !== 0 ? 'row-reverse' : 'row' },
                  alignItems: 'center',
                }}
              >
                {/* Image Col */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 12px 48px rgba(0,0,0,0.12)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={cat.img}
                      alt={cat.title}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                    {/* Floating Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        bgcolor: 'secondary.main',
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        boxShadow: '0 4px 16px rgba(201,168,76,0.4)',
                      }}
                    >
                      {cat.icon}
                    </Box>
                  </Box>
                </Grid>

                {/* Content Col */}
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '2.5px',
                        textTransform: 'uppercase',
                        color: 'secondary.main',
                        display: 'block',
                        mb: 1,
                      }}
                    >
                      {cat.icon} Category
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '1.8rem', md: '2.3rem' },
                        mb: 1.5,
                        color: 'primary.main',
                        fontFamily: "'Playfair Display', Georgia, serif",
                      }}
                    >
                      {cat.title}
                    </Typography>
                    <GoldDivider left />
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3.5, lineHeight: 1.7 }}>
                      {cat.desc}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {cat.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          sx={{
                            bgcolor: 'rgba(15, 28, 46, 0.04)',
                            color: 'primary.main',
                            fontWeight: 500,
                            fontSize: '13px',
                          }}
                        />
                      ))}
                    </Box>

                    {/* Price Range */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4, flexWrap: 'wrap' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        Starting from
                      </Typography>
                      <Typography variant="h5" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
                        {cat.min}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        –
                      </Typography>
                      <Typography variant="h5" sx={{ color: 'secondary.dark', fontWeight: 700 }}>
                        {cat.max}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        per gift
                      </Typography>
                    </Box>

                    {/* Actions */}
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button
                        component={RouterLink}
                        to={`/product/${cat.id}`}
                        variant="contained"
                        color="secondary"
                        id={`view-product-${cat.id}`}
                        sx={{ px: 3, py: 1.5, borderRadius: 1.5 }}
                      >
                        View Products & Request Quote
                      </Button>
                      <Button
                        component={RouterLink}
                        to="/contact"
                        variant="outlined"
                        color="primary"
                        id={`quote-${cat.id}`}
                        sx={{
                          px: 3,
                          py: 1.5,
                          borderRadius: 1.5,
                          borderWidth: '2px',
                          '&:hover': {
                            borderWidth: '2px',
                            bgcolor: 'primary.main',
                            color: '#ffffff',
                          },
                        }}
                      >
                        Get Custom Quote
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Bottom CTA */}
      <Box sx={{ pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              background: 'linear-gradient(135deg, #0F1C2E 0%, #1A2D47 100%)',
              color: '#ffffff',
              borderRadius: 4,
              p: { xs: 6, md: 8 },
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(15,28,46,0.15)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Can't find what you're looking for?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4, maxWidth: 580, mx: 'auto' }}>
              Tell us your occasion, budget, and quantity — we'll suggest the perfect gifts.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="secondary"
              size="large"
              id="categories-contact-btn"
              sx={{ px: 4, py: 2, borderRadius: 1.5, fontSize: 16 }}
            >
              Talk to Our Gifting Expert
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
