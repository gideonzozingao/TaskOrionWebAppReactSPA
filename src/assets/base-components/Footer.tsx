import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1a202c", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TaskOrion
            </Typography>
            <Typography
              variant="body2"
              color="rgba(255,255,255,0.7)"
              sx={{ mb: 2 }}
            >
              The modern project management solution for teams that want to
              achieve more.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontSize: "1rem", fontWeight: 600 }}
                >
                  Product
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Features
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Pricing
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Security
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontSize: "1rem", fontWeight: 600 }}
                >
                  Company
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    About
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Careers
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Blog
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontSize: "1rem", fontWeight: 600 }}
                >
                  Support
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Help Center
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Contact
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Status
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontSize: "1rem", fontWeight: 600 }}
                >
                  Legal
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Privacy
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Terms
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    Cookie Policy
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />
        <Typography
          variant="body2"
          color="rgba(255,255,255,0.5)"
          textAlign="center"
        >
          © 2025 Racker. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
