import { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

/* ─── Product Data ───────────────────────────────────────────── */
const products = {
  'tech-gifts': {
    title: 'Tech Gifts Collection',
    category: 'Tech Gifts',
    tagline: 'Trending gadgets your team will love',
    img: '/images/cat_tech.png',
    desc: 'Our Tech Gifts collection features the most sought-after gadgets and accessories for corporate gifting. From wireless earbuds and power banks to smart notebooks and USB hubs — every product is quality-tested and available for bulk orders with custom branding.',
    highlights: ['Wireless Earbuds & Headphones', 'Branded Power Banks', 'USB Hubs & Multi-ports', 'Smart Notebooks', 'Webcams & Ring Lights', 'Custom Branded Accessories'],
    customOptions: ['Company Logo Printing', 'Custom Packaging Box', 'Personalized Message Card', 'Custom Color Options', 'Bulk Quantity Discount'],
    priceRange: '₹500 – ₹5,000 per unit',
    minQty: '50 units',
    deliveryTime: '7–10 business days',
  },
  'festive-hampers': {
    title: 'Festive Hampers',
    category: 'Festive Hampers',
    tagline: 'Celebrate every festival beautifully',
    img: '/images/cat_festive.png',
    desc: 'Spread joy this festive season with our handcrafted premium hampers. Perfect for Diwali, Holi, Eid, Christmas, and every celebration in between. Each hamper is thoughtfully curated with premium sweets, dry fruits, and festive essentials.',
    highlights: ['Premium Dry Fruits & Nuts', 'Artisanal Sweet Boxes', 'Decorative Diyas & Candles', 'Luxury Chocolates', 'Custom Gift Baskets', 'Festive Packaging'],
    customOptions: ['Custom Branded Box', 'Personalized Message Card', 'Company Logo Sticker', 'Hamper Size Customization', 'Add-on Items Available'],
    priceRange: '₹800 – ₹8,000 per hamper',
    minQty: '50 hampers',
    deliveryTime: '5–7 business days',
  },
  'welcome-kits': {
    title: 'Employee Welcome Kits',
    category: 'Onboarding',
    tagline: 'Make day one unforgettable',
    img: '/images/cat_welcome.png',
    desc: 'First impressions matter. Our Employee Welcome Kits are designed to make your new joiners feel valued, excited, and part of the team. Each kit is fully customizable with your company branding, colors, and a personal welcome message.',
    highlights: ['Premium Branded Notebook', 'Company Logo Mug', 'Tote Bag with Branding', 'Water Bottle', 'ID Card Holder', 'Welcome Letter & Handbook'],
    customOptions: ['Company Logo on All Items', 'Custom Kit Contents', 'Branded Gift Box', 'Personal Welcome Note', 'Company Color Theme'],
    priceRange: '₹700 – ₹4,000 per kit',
    minQty: '25 kits',
    deliveryTime: '10–14 business days',
  },
  'office-sets': {
    title: 'Office Gift Sets',
    category: 'Executive Gifts',
    tagline: 'Premium desk essentials for professionals',
    img: '/images/cat_office.png',
    desc: 'Reward top performers and impress important clients with our Executive Office Gift Sets. Featuring premium leather diaries, luxury pen sets, elegant desk organizers, and more — all beautifully packaged and available with custom branding.',
    highlights: ['Premium Leather Diary', 'Luxury Pen Sets', 'Elegant Desk Organizer', 'Business Card Holder', 'Executive Paperweight', 'Premium Gift Packaging'],
    customOptions: ['Name Engraving on Pen/Diary', 'Company Logo Embossing', 'Custom Gift Box', 'Message Card', 'Personalization per Unit'],
    priceRange: '₹1,000 – ₹10,000 per set',
    minQty: '25 sets',
    deliveryTime: '10–14 business days',
  },
  'customized': {
    title: 'Customized Products',
    category: 'Custom Branding',
    tagline: 'Your brand on every gift',
    img: '/images/cat_customized.png',
    desc: 'Build powerful brand recall with fully customized corporate merchandise. We print, engrave, and customize a wide range of products with your company logo, colors, and messaging — perfect for events, trade shows, and daily gifting needs.',
    highlights: ['Custom Logo T-Shirts', 'Branded Coffee Mugs', 'Engraved Pens', 'Custom Printed Notebooks', 'Branded Tote Bags', 'Event Merchandise'],
    customOptions: ['Full Logo Customization', 'Choose Base Product', 'Custom Color Scheme', 'Multiple Print Techniques', 'Bulk Pricing Available'],
    priceRange: '₹200 – ₹3,000 per item',
    minQty: '100 units',
    deliveryTime: '12–18 business days',
  },
  'premium-hampers': {
    title: 'Premium Luxury Hampers',
    category: 'Premium Gifting',
    tagline: 'For your most valued relationships',
    img: '/images/cat_festive.png',
    desc: 'Reserve the extraordinary for your most important clients and senior leadership. Our Premium Luxury Hampers are curated with imported chocolates, premium wines, luxury candles, high-end skincare products, and gourmet delicacies — all in exquisite packaging.',
    highlights: ['Imported Premium Chocolates', 'Premium Wines & Spirits', 'Luxury Scented Candles', 'High-end Skincare Products', 'Gourmet Snacks & Cheeses', 'Black & Gold Luxury Packaging'],
    customOptions: ['Personalized Note Card', 'Company Branding on Box', 'Custom Hamper Curation', 'Premium Gift Wrapping', 'Scheduled Delivery Option'],
    priceRange: '₹3,000 – ₹25,000 per hamper',
    minQty: '10 hampers',
    deliveryTime: '5–7 business days',
  },
};

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

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products[id] || products['tech-gifts'];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quantity, setQuantity] = useState('50-100');

  const toggleOption = (opt) => {
    setSelectedOptions((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 8 }}>
      {/* Breadcrumb */}
      <Box sx={{ bgcolor: '#ffffff', py: 2, borderBottom: '1px solid rgba(0,0,0,0.05)', mb: 6 }}>
        <Container maxWidth="lg">
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link component={RouterLink} to="/" color="inherit" sx={{ fontSize: '14px', fontWeight: 500 }}>
              Home
            </Link>
            <Link component={RouterLink} to="/categories" color="inherit" sx={{ fontSize: '14px', fontWeight: 500 }}>
              Gift Categories
            </Link>
            <Typography color="text.primary" sx={{ fontSize: '14px', fontWeight: 500 }}>
              {product.title}
            </Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Main Content */}
      <Box component="section">
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }}>
            {/* Left: Image & Info Pills */}
            <Grid item xs={12} md={5}>
              <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', mb: 4 }}>
                <Box
                  component="img"
                  src={product.img}
                  alt={product.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    bgcolor: 'primary.main',
                    color: '#ffffff',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1.5,
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    textTransform: 'uppercase',
                  }}
                >
                  {product.category}
                </Box>
              </Box>

              {/* Info Pills */}
              <Grid container spacing={2}>
                {[
                  { icon: '📦', label: 'Min. Order', value: product.minQty },
                  { icon: '🚚', label: 'Delivery', value: product.deliveryTime },
                  { icon: '💰', label: 'Price Range', value: product.priceRange },
                ].map((pill, idx) => (
                  <Grid item xs={12} sm={4} md={12} key={idx}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        borderRadius: 3,
                        border: '1px solid rgba(0,0,0,0.06)',
                        bgcolor: '#ffffff',
                      }}
                    >
                      <Box sx={{ fontSize: '28px', lineHeight: 1 }}>{pill.icon}</Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 500 }}>
                          {pill.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main', noWrap: true }}>
                          {pill.value}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Right: Details */}
            <Grid item xs={12} md={7}>
              <Box>
                <Typography
                  component="span"
                  sx={{
                    display: 'inline-block',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    color: 'secondary.main',
                    mb: 1.5,
                  }}
                >
                  {product.category}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    fontWeight: 700,
                    mb: 1,
                    color: 'primary.main',
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {product.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'secondary.dark', fontWeight: 500, fontSize: '18px', mb: 2 }}>
                  {product.tagline}
                </Typography>
                <GoldDivider left sx={{ mb: 3 }} />
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
                  {product.desc}
                </Typography>

                {/* Highlights */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
                    What's Included
                  </Typography>
                  <Grid container spacing={1.5}>
                    {product.highlights.map((h) => (
                      <Grid item xs={12} sm={6} key={h} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckIcon sx={{ color: 'secondary.main', fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                          {h}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Customisation Options */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
                    Customization Options
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {product.customOptions.map((opt) => {
                      const isSelected = selectedOptions.includes(opt);
                      return (
                        <Chip
                          key={opt}
                          label={opt}
                          onClick={() => toggleOption(opt)}
                          icon={isSelected ? <CheckIcon fontSize="small" /> : undefined}
                          sx={{
                            p: 1,
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            bgcolor: isSelected ? 'secondary.main' : 'rgba(15, 28, 46, 0.04)',
                            color: isSelected ? 'primary.main' : 'primary.main',
                            border: '1px solid',
                            borderColor: isSelected ? 'secondary.main' : 'transparent',
                            '&:hover': {
                              bgcolor: isSelected ? 'secondary.light' : 'rgba(15, 28, 46, 0.08)',
                            },
                            transition: 'all 0.2s ease',
                          }}
                        />
                      );
                    })}
                  </Box>
                </Box>

                {/* Quantity */}
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
                    Estimated Quantity
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {['50-100', '100-250', '250-500', '500-1000', '1000+'].map((q) => {
                      const isSelected = quantity === q;
                      return (
                        <Button
                          key={q}
                          variant={isSelected ? 'contained' : 'outlined'}
                          color={isSelected ? 'primary' : 'inherit'}
                          onClick={() => setQuantity(q)}
                          id={`qty-${q.replace('+', 'plus')}`}
                          sx={{
                            borderRadius: 1.5,
                            borderWidth: '1.5px',
                            minWidth: 80,
                            py: 1,
                            borderColor: isSelected ? 'primary.main' : 'rgba(0,0,0,0.15)',
                            '&:hover': {
                              borderWidth: '1.5px',
                            },
                          }}
                        >
                          {q}
                        </Button>
                      );
                    })}
                  </Box>
                </Box>

                {/* CTA */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    component={RouterLink}
                    to={`/contact?product=${id}&qty=${quantity}`}
                    variant="contained"
                    color="secondary"
                    size="large"
                    id="product-request-quote-btn"
                    sx={{
                      py: 2,
                      fontSize: '16px',
                      borderRadius: 1.5,
                      width: '100%',
                    }}
                  >
                    🎁 Request a Quote for This Category
                  </Button>
                  <Button
                    component="a"
                    href="https://wa.me/917068968499"
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    color="primary"
                    id="product-whatsapp-btn"
                    sx={{
                      py: 1.8,
                      fontSize: '15px',
                      borderRadius: 1.5,
                      borderWidth: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      '&:hover': {
                        borderWidth: '2px',
                        bgcolor: 'primary.main',
                        color: '#ffffff',
                      },
                    }}
                  >
                    💬 Chat on WhatsApp
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Related Categories */}
      <Box sx={{ mt: 10, pt: 8, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              color: 'primary.main',
              mb: 4,
            }}
          >
            Explore Other Categories
          </Typography>
          <Grid container spacing={4}>
            {Object.entries(products)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, p]) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <Card
                    component={RouterLink}
                    to={`/product/${key}`}
                    id={`related-${key}`}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                        '& .related-arrow': {
                          color: 'secondary.main',
                          pl: 0.5,
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
                      <Box
                        component="img"
                        src={p.img}
                        alt={p.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 2.5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: 16,
                          fontWeight: 600,
                          mb: 1,
                          color: 'primary.main',
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {p.title}
                      </Typography>
                      <Typography
                        className="related-arrow"
                        variant="caption"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          color: 'primary.main',
                          fontWeight: 600,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        View Products →
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
