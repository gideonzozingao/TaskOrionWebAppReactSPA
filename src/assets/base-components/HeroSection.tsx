import { ArrowForward, PlayArrow } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  createTheme,
  Fade,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
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
function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Chip
                  label="🚀 Now with AI-Powered Insights"
                  sx={{
                    mb: 3,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    borderRadius: 3,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "3rem", md: "4.5rem" },
                    color: "white",
                    lineHeight: 1.1,
                    mb: 3,
                  }}
                >
                  Transform Your
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(45deg, #ffeaa7, #fab1a0)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "block",
                    }}
                  >
                    Workflow
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Experience the future of project management with intelligent
                  automation, seamless collaboration, and insights that drive
                  results.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      backgroundColor: "white",
                      color: theme.palette.primary.main,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      "&:hover": {
                        backgroundColor: "white",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.16)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      color: "white",
                      borderColor: "rgba(255,255,255,0.5)",
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        borderColor: "white",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={1200}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 400,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: 4,
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Dashboard Preview
                  </Typography>
                  {/* Animated elements */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      animation: "float 3s ease-in-out infinite",
                      "@keyframes float": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-10px)" },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
