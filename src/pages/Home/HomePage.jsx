import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { keyframes } from '@mui/system';

/* ─── Animations ─────────────────────────────────────────────── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

/* ─── Data ───────────────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Companies Served' },
  { value: '10,000+', label: 'Gifts Delivered' },
  { value: '100%', label: 'Customizable' },
  { value: 'Pan-India', label: 'Delivery' },
];

const categories = [
  { id: 'tech-gifts',       icon: '💻', title: 'Tech Gifts',            desc: 'Trending gadgets & accessories', img: '/images/cat_tech.png' },
  { id: 'festive-hampers',  icon: '🎊', title: 'Festive Hampers',        desc: 'Diwali, Eid & seasonal gifts',  img: '/images/cat_festive.png' },
  { id: 'welcome-kits',     icon: '🎒', title: 'Employee Welcome Kits', desc: 'Make day-one unforgettable',     img: '/images/cat_welcome.png' },
  { id: 'office-sets',      icon: '🗂️', title: 'Office Gift Sets',       desc: 'Premium desk essentials',       img: '/images/cat_office.png' },
  { id: 'customized',       icon: '🖨️', title: 'Customized Products',    desc: 'Your brand, our craftsmanship', img: '/images/cat_customized.png' },
  { id: 'premium-hampers',  icon: '🏆', title: 'Premium Hampers',        desc: 'Ultra-luxury gifting experience', img: '/images/cat_festive.png' },
];

const features = [
  { icon: '✅', title: 'Premium Quality',      desc: 'Every product is handpicked and quality-tested before delivery.' },
  { icon: '🖨️', title: 'Custom Branding',      desc: 'Add your company logo, message card, or custom packaging.' },
  { icon: '📦', title: 'Bulk Orders',           desc: 'Smooth execution for 50 to 50,000+ units — on time, every time.' },
  { icon: '🚚', title: 'Pan-India Delivery',   desc: 'We deliver to offices and homes across India reliably.' },
];

const steps = [
  { num: '01', title: 'Browse & Choose',  desc: 'Explore our gift categories and choose what fits your needs.' },
  { num: '02', title: 'Request a Quote',  desc: "Fill our simple form — we'll respond with a customized proposal in 24 hrs." },
  { num: '03', title: 'We Deliver',       desc: 'We handle packaging, branding & delivery straight to your employees or clients.' },
];

const testimonials = [
  {
    quote: "Givye transformed our Diwali gifting. 300 hampers delivered in 3 days — flawless packaging and our logo looked amazing!",
    name: 'Priya Sharma',
    role: 'HR Manager, TechNova India',
    initials: 'PS',
  },
  {
    quote: "Our welcome kits for new joiners are now a highlight of the onboarding process. Employees love them!",
    name: 'Rahul Mehta',
    role: 'Admin Head, FinEdge Corp',
    initials: 'RM',
  },
  {
    quote: "Best corporate gifting experience we've had. Professional team, quick turnaround, and great quality at bulk pricing.",
    name: 'Sunita Patel',
    role: 'Procurement Lead, Infovision Ltd',
    initials: 'SP',
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

export default function HomePage() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* ── Hero ──────────────────────────────────── */}
      <Box
        id="hero"
        sx={{
          position: 'relative',
          minHeight: '85svh',
          display: 'flex',
          alignItems: 'center',
          color: '#ffffff',
          py: { xs: 8, md: 12 },
        }}
      >
        {/* Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        >
          <Box
            component="img"
            src="/images/hero_banner.png"
            alt="Corporate Gifting"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, rgba(15, 28, 46, 0.95) 30%, rgba(15, 28, 46, 0.6) 100%)',
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ animation: `${fadeInUp} 0.8s ease both` }}>
          <Box sx={{ maxWidth: 720 }}>
            {/* Tag */}
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
              India's Trusted Corporate Gifting Partner
            </Typography>

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.8rem', sm: '3.8rem', md: '4.8rem' },
                lineHeight: 1.15,
                mb: 3,
                color: '#ffffff',
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              The Art of <br />
              <Box component="span" sx={{ color: 'secondary.main' }}>
                Corporate Gifting
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                color: 'rgba(255, 255, 255, 0.85)',
                mb: 5,
                lineHeight: 1.7,
              }}
            >
              Premium. Customized. Delivered Pan-India. <br />
              We help companies gift with purpose — for festivals, events, and every milestone.
            </Typography>

            {/* CTAs */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 6 }}>
              <Button
                component={RouterLink}
                to="/categories"
                variant="contained"
                color="secondary"
                size="large"
                id="hero-browse-btn"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '16px',
                  borderRadius: 1.5,
                  '&:hover': {
                    backgroundColor: 'secondary.light',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Browse Gift Categories
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                color="inherit"
                size="large"
                id="hero-quote-btn"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '16px',
                  borderRadius: 1.5,
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  color: '#ffffff',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Get a Free Quote
              </Button>
            </Box>

            {/* Floating Badges */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                animation: `${float} 6s ease-in-out infinite`,
              }}
            >
              <Box
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  px: 2.5,
                  py: 1,
                  borderRadius: 4,
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                🏅 500+ Companies Trust Us
              </Box>
              <Box
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  px: 2.5,
                  py: 1,
                  borderRadius: 4,
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                📦 10,000+ Gifts Delivered
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Stats ─────────────────────────────────── */}
      <Box sx={{ bgcolor: 'primary.light', py: 4, color: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            {stats.map((s, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    color: 'secondary.main',
                    mb: 0.5,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', letterSpacing: 1 }}
                >
                  {s.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Categories ────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }} id="categories">
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="span"
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'secondary.main',
                display: 'block',
                mb: 1.5,
              }}
            >
              What We Offer
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
              Gift Categories
            </Typography>
            <GoldDivider />
            <Typography variant="subtitle1" sx={{ mt: 2, maxWidth: 560, mx: 'auto' }}>
              From tech gadgets to festive hampers — we have the perfect gift for every occasion and budget.
            </Typography>
          </Box>

          {/* Grid */}
          <Grid container spacing={4}>
            {categories.map((cat) => (
              <Grid item xs={12} sm={6} md={4} key={cat.id}>
                <Card
                  component={RouterLink}
                  to={`/product/${cat.id}`}
                  id={`cat-${cat.id}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                      '& .cat-arrow': {
                        color: 'secondary.main',
                        pl: 1,
                      },
                    },
                  }}
                >
                  {/* Image Wrap */}
                  <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
                    <Box
                      component="img"
                      src={cat.img}
                      alt={cat.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to top, rgba(15, 28, 46, 0.4) 0%, rgba(15, 28, 46, 0) 100%)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 12,
                        left: 16,
                        bgcolor: 'secondary.main',
                        color: 'primary.main',
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                        boxShadow: '0 4px 12px rgba(201,168,76,0.3)',
                      }}
                    >
                      {cat.icon}
                    </Box>
                  </Box>

                  {/* Card Content */}
                  <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 600,
                        mb: 1.5,
                        color: 'primary.main',
                      }}
                    >
                      {cat.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                      {cat.desc}
                    </Typography>
                    <Typography
                      className="cat-arrow"
                      variant="button"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: 'primary.main',
                        fontWeight: 600,
                        fontSize: '14px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Explore →
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              component={RouterLink}
              to="/categories"
              variant="outlined"
              color="primary"
              id="view-all-categories-btn"
              sx={{
                borderWidth: '2px',
                px: 4,
                py: 1.8,
                fontSize: '15px',
                borderColor: 'primary.main',
                borderRadius: 1.5,
                color: 'primary.main',
                '&:hover': {
                  borderWidth: '2px',
                  backgroundColor: 'primary.main',
                  color: '#ffffff',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View All Categories
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Why Choose Us ─────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: '#ffffff' }} id="why-us">
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="span"
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'secondary.main',
                display: 'block',
                mb: 1.5,
              }}
            >
              Why Givye?
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, color: '#ffffff' }}>
              Why Companies Choose Us
            </Typography>
            <GoldDivider />
            <Typography variant="subtitle1" sx={{ mt: 2, maxWidth: 560, mx: 'auto', color: 'rgba(255,255,255,0.7)' }}>
              We don't just deliver gifts — we deliver memorable experiences.
            </Typography>
          </Box>

          {/* Grid */}
          <Grid container spacing={4}>
            {features.map((f, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    bgcolor: 'primary.light',
                    p: 4,
                    borderRadius: 3,
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <Box sx={{ fontSize: '32px', mb: 2 }}>{f.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                      mb: 1.5,
                      color: 'secondary.main',
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                    {f.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── How It Works ──────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }} id="how-it-works">
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="span"
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'secondary.main',
                display: 'block',
                mb: 1.5,
              }}
            >
              Simple Process
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
              How It Works
            </Typography>
            <GoldDivider />
          </Box>

          {/* Grid */}
          <Grid container spacing={4} sx={{ position: 'relative' }}>
            {steps.map((step, i) => (
              <Grid item xs={12} md={4} key={i} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    bgcolor: '#ffffff',
                    p: 5,
                    borderRadius: 3,
                    height: '100%',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      '& .step-num': {
                        color: 'secondary.main',
                      },
                    },
                  }}
                >
                  <Typography
                    className="step-num"
                    sx={{
                      fontSize: '3.5rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: 'rgba(15, 28, 46, 0.1)',
                      mb: 2,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      transition: 'color 0.28s ease',
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: 'primary.main',
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {step.desc}
                  </Typography>
                </Box>
                {/* Arrow spacer for desktop */}
                {i < steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: '50%',
                      right: '-16px',
                      transform: 'translateY(-50%)',
                      fontSize: '24px',
                      color: 'secondary.main',
                      zIndex: 2,
                    }}
                  >
                    →
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Testimonials ──────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }} id="testimonials">
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="span"
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'secondary.main',
                display: 'block',
                mb: 1.5,
              }}
            >
              Client Stories
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
              What Our Clients Say
            </Typography>
            <GoldDivider />
          </Box>

          {/* Grid */}
          <Grid container spacing={4}>
            {testimonials.map((t, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(0, 0, 0, 0.03)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '5rem',
                      lineHeight: 0.1,
                      color: 'secondary.main',
                      opacity: 0.3,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      mt: 3,
                      mb: -2,
                    }}
                  >
                    “
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 4, flexGrow: 1, lineHeight: 1.7 }}>
                    {t.quote}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'primary.main',
                        fontWeight: 600,
                        width: 44,
                        height: 44,
                      }}
                    >
                      {t.initials}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
