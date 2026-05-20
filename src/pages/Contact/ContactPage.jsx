import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { keyframes } from '@mui/system';

const eventTypes = [
  'Diwali / Festive Gifting',
  'Employee Welcome Kits',
  'Client Appreciation',
  'Employee Recognition',
  'Product Launch Event',
  'Annual Day / Celebration',
  'Conference / Trade Show',
  'Other',
];

const budgetRanges = [
  'Under ₹25,000',
  '₹25,000 – ₹1,00,000',
  '₹1,00,000 – ₹5,00,000',
  '₹5,00,000 – ₹10,00,000',
  'Above ₹10,00,000',
];

const whyItems = [
  { icon: '⚡', title: 'Fast Response', desc: 'We reply to every quote request within 24 hours.' },
  { icon: '🎨', title: 'Free Mockup', desc: 'Get a free branded mockup before you finalize.' },
  { icon: '💬', title: 'Dedicated Support', desc: 'One dedicated account manager for your order.' },
  { icon: '🚚', title: 'On-Time Delivery', desc: 'We guarantee delivery before your deadline.' },
];

/* ─── Keyframes for Animated Checkmark ──────────────────────── */
const checkDraw = keyframes`
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: 0; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    eventType: '',
    quantity: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

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
            Get In Touch
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
            Request a Quote
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', md: '18px' },
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7,
            }}
          >
            Tell us about your gifting requirement. We'll send you a customized proposal with samples and pricing within 24 hours.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }}>
            {/* Left Panel: Direct Info & Why Us */}
            <Grid item xs={12} md={5}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 1.5,
                  }}
                >
                  Why Contact Us?
                </Typography>
                <GoldDivider left sx={{ mb: 4 }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5, mb: 6 }}>
                  {whyItems.map((item) => (
                    <Box key={item.title} sx={{ display: 'flex', gap: 2 }}>
                      <Box
                        sx={{
                          bgcolor: 'rgba(201,168,76,0.12)',
                          color: 'secondary.dark',
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '22px',
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Direct Contact details */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    border: '1px solid rgba(0,0,0,0.06)',
                    bgcolor: '#ffffff',
                    mb: 4,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 3,
                    }}
                  >
                    Reach Us Directly
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {[
                      {
                        icon: <PhoneIcon sx={{ color: 'secondary.main' }} />,
                        label: 'Phone / WhatsApp',
                        value: '+91 7068968499',
                        link: 'tel:+917068968499',
                      },
                      {
                        icon: <EmailIcon sx={{ color: 'secondary.main' }} />,
                        label: 'Email',
                        value: 'rs3422863@gmail.com',
                        link: 'mailto:rs3422863@gmail.com',
                      },
                      {
                        icon: <PlaceIcon sx={{ color: 'secondary.main' }} />,
                        label: 'Location',
                        value: 'Delhi, Noida, India',
                      },
                      {
                        icon: <AccessTimeIcon sx={{ color: 'secondary.main' }} />,
                        label: 'Working Hours',
                        value: 'Mon–Sat, 10am – 6pm IST',
                      },
                    ].map((d, idx) => (
                      <Box key={idx} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box sx={{ mt: 0.3 }}>{d.icon}</Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 500 }}>
                            {d.label}
                          </Typography>
                          {d.link ? (
                            <Typography
                              component="a"
                              href={d.link}
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                textDecoration: 'none',
                                '&:hover': { color: 'secondary.main' },
                              }}
                            >
                              {d.value}
                            </Typography>
                          ) : (
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                              {d.value}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Paper>

                {/* WhatsApp Chat CTA */}
                <Button
                  component="a"
                  href="https://wa.me/917068968499?text=Hi%2C%20I%20want%20to%20enquire%20about%20corporate%20gifting."
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  color="primary"
                  id="contact-whatsapp-btn"
                  sx={{
                    py: 1.8,
                    borderRadius: 1.5,
                    borderWidth: '2px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1.5,
                    fontSize: '15px',
                    '&:hover': {
                      borderWidth: '2px',
                      bgcolor: 'primary.main',
                      color: '#ffffff',
                    },
                  }}
                >
                  <WhatsAppIcon /> Chat Instantly on WhatsApp
                </Button>
              </Box>
            </Grid>

            {/* Right Panel: Form / Thank you */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  bgcolor: '#ffffff',
                }}
              >
                {submitted ? (
                  /* ── Thank You State ── */
                  <Box
                    id="thank-you-message"
                    sx={{
                      textAlign: 'center',
                      py: 4,
                      animation: `${scaleIn} 0.5s ease both`,
                    }}
                  >
                    {/* Animated Check Wrapper */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        border: '2px solid',
                        borderColor: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 4,
                      }}
                    >
                      <Box
                        component="svg"
                        viewBox="0 0 52 52"
                        sx={{ width: 44, height: 44, fill: 'none' }}
                      >
                        <Box
                          component="path"
                          d="M14 26l8 8 16-16"
                          stroke="#C9A84C"
                          strokeWidth={4}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="100"
                          strokeDashoffset="100"
                          sx={{
                            animation: `${checkDraw} 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards`,
                          }}
                        />
                      </Box>
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 2,
                      }}
                    >
                      Thank You! 🎉
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1, px: 2, lineHeight: 1.7 }}>
                      Your quote request has been received. Our gifting expert will contact you within <Box component="strong" sx={{ fontWeight: 600 }}>24 hours</Box> with a personalized proposal.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.disabled', mb: 5 }}>
                      In the meantime, feel free to explore more gift ideas.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Button
                        component={RouterLink}
                        to="/categories"
                        variant="contained"
                        color="secondary"
                        id="ty-browse-btn"
                        sx={{ px: 3, py: 1.5, borderRadius: 1.5 }}
                      >
                        Browse More Gifts
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        id="ty-new-request-btn"
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            companyName: '',
                            contactPerson: '',
                            email: '',
                            phone: '',
                            eventType: '',
                            quantity: '',
                            budget: '',
                            message: '',
                          });
                        }}
                        sx={{
                          px: 3,
                          py: 1.5,
                          borderRadius: 1.5,
                          borderWidth: '2px',
                          '&:hover': { borderWidth: '2px' },
                        }}
                      >
                        Submit Another Request
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  /* ── Form State ── */
                  <Box component="form" onSubmit={handleSubmit} id="quote-form" noValidate>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      Get Your Free Quote
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
                      Fill in your details and we'll respond within 24 hours.
                    </Typography>

                    <Grid container spacing={3}>
                      {/* Company Name */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          id="companyName"
                          name="companyName"
                          label="Company Name"
                          placeholder="e.g. TechNova India Pvt. Ltd."
                          variant="outlined"
                          value={form.companyName}
                          onChange={handleChange}
                        />
                      </Grid>

                      {/* Contact Person */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          id="contactPerson"
                          name="contactPerson"
                          label="Contact Person"
                          placeholder="Your full name"
                          variant="outlined"
                          value={form.contactPerson}
                          onChange={handleChange}
                        />
                      </Grid>

                      {/* Email Address */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          id="email"
                          name="email"
                          type="email"
                          label="Email Address"
                          placeholder="you@company.com"
                          variant="outlined"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </Grid>

                      {/* Phone / WhatsApp */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          id="phone"
                          name="phone"
                          type="tel"
                          label="Phone / WhatsApp"
                          placeholder="+91 98765 43210"
                          variant="outlined"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </Grid>

                      {/* Occasion / Event */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          required
                          select
                          id="eventType"
                          name="eventType"
                          label="Occasion / Event Type"
                          value={form.eventType}
                          onChange={handleChange}
                        >
                          <MenuItem value="">Select occasion...</MenuItem>
                          {eventTypes.map((e) => (
                            <MenuItem key={e} value={e}>
                              {e}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      {/* Estimated Quantity */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          required
                          id="quantity"
                          name="quantity"
                          label="Estimated Quantity"
                          placeholder="e.g. 200 gifts"
                          variant="outlined"
                          value={form.quantity}
                          onChange={handleChange}
                        />
                      </Grid>

                      {/* Budget Range */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          id="budget"
                          name="budget"
                          label="Budget Range"
                          value={form.budget}
                          onChange={handleChange}
                        >
                          <MenuItem value="">Select budget...</MenuItem>
                          {budgetRanges.map((b) => (
                            <MenuItem key={b} value={b}>
                              {b}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      {/* Additional Info */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          id="message"
                          name="message"
                          label="Additional Requirements"
                          placeholder="Tell us more — any specific products, themes, delivery location, or deadline..."
                          value={form.message}
                          onChange={handleChange}
                        />
                      </Grid>

                      {/* Submit Button */}
                      <Grid item xs={12}>
                        <Button
                          fullWidth
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          disabled={loading}
                          id="submit-quote-btn"
                          sx={{
                            py: 2,
                            fontSize: '16px',
                            fontWeight: 600,
                            borderRadius: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1.5,
                          }}
                        >
                          {loading ? (
                            <>
                              <CircularProgress size={20} color="inherit" />
                              Submitting...
                            </>
                          ) : (
                            '🎁 Submit Quote Request'
                          )}
                        </Button>
                      </Grid>
                    </Grid>

                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        textAlign: 'center',
                        color: 'text.disabled',
                        mt: 2.5,
                        fontWeight: 500,
                      }}
                    >
                      🔒 Your information is secure and will not be shared with third parties.
                    </Typography>
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
