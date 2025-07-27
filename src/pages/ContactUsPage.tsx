import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Avatar,
  Paper,
  Alert,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Send,
} from "@mui/icons-material";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "hello@racker.com",
      color: "#667eea",
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      contact: "+1 (555) 123-4567",
      color: "#764ba2",
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: "Visit Us",
      description: "Come say hello at our office HQ",
      contact: "123 Business Ave, Tech City, TC 12345",
      color: "#f093fb",
    },
    {
      icon: <AccessTime sx={{ fontSize: 40 }} />,
      title: "Support Hours",
      description: "We're here to help",
      contact: "24/7 Support Available",
      color: "#48c6ef",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
          >
            Have a question or need help? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </Typography>
        </Box>

        {/* Contact Info Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 3,
                      backgroundColor: info.color,
                      color: "white",
                    }}
                  >
                    {info.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                  >
                    {info.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: info.color }}
                  >
                    {info.contact}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form Section */}
        <Grid container spacing={6} alignItems="flex-start">
          {/* Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={4}
              sx={{
                p: 6,
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Send us a Message
              </Typography>

              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />

                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  startIcon={<Send />}
                  sx={{
                    mt: 4,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    background: "linear-gradient(45deg, #667eea, #764ba2)",
                    boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 40px rgba(102, 126, 234, 0.4)",
                    },
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Additional Info */}
          <Grid item xs={12} md={4}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Quick Response
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Technical Support
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  Need technical help? Our support team is available 24/7 to
                  assist you with any issues or questions about using Racker.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Sales Inquiries
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  Interested in TaskOrion for your team? Contact our sales team
                  to discuss pricing, features, and custom solutions for your
                  organization.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUsPage;
