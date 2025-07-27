import { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  createTheme,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";
import { Group, Analytics, Star, Timeline } from "@mui/icons-material";
import HeroSection from "../assets/base-components/HeroSection";
// Professional modern theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#667eea",
      light: "#9ca9f0",
      dark: "#4c63d2",
    },
    secondary: {
      main: "#764ba2",
      light: "#a076c7",
      dark: "#5a3779",
    },
    background: {
      default: "#fafbff",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a202c",
      secondary: "#4a5568",
    },
  },
  typography: {
    fontFamily: `"Inter", "SF Pro Display", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0,0,0,0.02)",
    "0px 4px 8px rgba(0,0,0,0.04)",
    "0px 8px 16px rgba(0,0,0,0.06)",
    "0px 12px 24px rgba(0,0,0,0.08)",
    "0px 16px 32px rgba(0,0,0,0.1)",
    "0px 24px 48px rgba(0,0,0,0.12)",
    ...Array(19).fill("0px 24px 48px rgba(0,0,0,0.12)"),
  ],
});

const features = [
  {
    icon: <Timeline sx={{ fontSize: 40 }} />,
    title: "Intelligent Task Flow",
    desc: "AI-powered task prioritization with smart deadlines that adapt to your team's workflow and capacity.",
    color: "#667eea",
  },
  {
    icon: <Group sx={{ fontSize: 40 }} />,
    title: "Seamless Collaboration",
    desc: "Real-time team sync with advanced communication tools, file sharing, and progress tracking.",
    color: "#764ba2",
  },
  {
    icon: <Analytics sx={{ fontSize: 40 }} />,
    title: "Advanced Analytics",
    desc: "Deep insights into productivity patterns with customizable dashboards and performance metrics.",
    color: "#f093fb",
  },
];

const stats = [
  { number: "50K+", label: "Active Users" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
  { number: "150+", label: "Integrations" },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    avatar: "SC",
    content:
      "Racker transformed how our team manages projects. The intuitive interface and powerful features make complex workflows feel effortless.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    avatar: "MR",
    content:
      "The analytics dashboard gives us insights we never had before. Our productivity increased by 40% in just two months.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Design Lead at Creative Co",
    avatar: "EW",
    content:
      "Beautiful design meets powerful functionality. Racker feels like it was built specifically for creative teams.",
    rating: 5,
  },
];

function HomePage() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  return (
    <Box>
      {/* Stats Section */}
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    background: "linear-gradient(45deg, #667eea, #764ba2)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ mx: 4 }} />

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Powerful Features
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
          >
            Everything you need to manage projects efficiently and boost team
            productivity
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={hoveredFeature === index ? 8 : 2}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  transform:
                    hoveredFeature === index
                      ? "translateY(-8px)"
                      : "translateY(0)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  cursor: "pointer",
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 3,
                      backgroundColor: feature.color,
                      color: "white",
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: "#f8fafc", py: 10 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Loved by Teams Worldwide
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              See what our customers are saying about Racker
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" spacing={0.5} mb={2}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} sx={{ color: "#ffc107", fontSize: 20 }} />
                      ))}
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, lineHeight: 1.7, fontStyle: "italic" }}
                    >
                      "{testimonial.content}"
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{ backgroundColor: theme.palette.primary.main }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              color: "white",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3rem" },
            }}
          >
            Ready to Transform Your Workflow?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.9)",
              mb: 4,
              fontWeight: 400,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            Join thousands of teams already using Racker to streamline their
            projects and boost productivity.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                px: 5,
                py: 2,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                "&:hover": {
                  backgroundColor: "white",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Start Your Free Trial
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.5)",
                px: 5,
                py: 2,
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1.1rem",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Schedule Demo
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
