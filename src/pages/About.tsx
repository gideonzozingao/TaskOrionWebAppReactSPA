import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Paper,
  LinearProgress,
  Chip,
} from "@mui/material";
import {
  Rocket,
  People,
  Security,
  Speed,
  TrendingUp,
  EmojiObjects,
  Favorite,
  Public,
} from "@mui/icons-material";

function About() {
  const stats = [
    { number: "2019", label: "Founded" },
    { number: "50K+", label: "Active Users" },
    { number: "25+", label: "Team Members" },
    { number: "99.9%", label: "Uptime" },
  ];

  const values = [
    {
      icon: <EmojiObjects sx={{ fontSize: 50 }} />,
      title: "Innovation",
      description:
        "We constantly push boundaries to create cutting-edge solutions that transform how teams work together.",
      color: "#667eea",
    },
    {
      icon: <People sx={{ fontSize: 50 }} />,
      title: "Collaboration",
      description:
        "We believe the best results come from diverse teams working together towards common goals.",
      color: "#764ba2",
    },
    {
      icon: <Favorite sx={{ fontSize: 50 }} />,
      title: "Customer First",
      description:
        "Every decision we make is driven by what's best for our customers and their success.",
      color: "#f093fb",
    },
    {
      icon: <Public sx={{ fontSize: 50 }} />,
      title: "Global Impact",
      description:
        "We're committed to building tools that make a positive difference in workplaces worldwide.",
      color: "#48c6ef",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      avatar: "SJ",
      bio: "Former VP of Product at TechCorp with 15+ years in product management and team leadership.",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      avatar: "MC",
      bio: "Ex-Google engineer passionate about building scalable systems and intuitive user experiences.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      avatar: "ER",
      bio: "Award-winning designer with expertise in user research and creating delightful product experiences.",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      avatar: "DK",
      bio: "Full-stack engineer focused on performance, security, and building robust development practices.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "Started with a simple idea to make project management more intuitive and effective.",
    },
    {
      year: "2020",
      title: "First 1,000 Users",
      description:
        "Reached our first major milestone with teams from 20+ countries using Racker.",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description:
        "Raised $5M to expand our team and accelerate product development.",
    },
    {
      year: "2022",
      title: "Advanced Analytics",
      description:
        "Launched our AI-powered analytics suite to provide deeper insights into team performance.",
    },
    {
      year: "2023",
      title: "50K+ Active Users",
      description:
        "Crossed 50,000 active users with teams from Fortune 500 to startups worldwide.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Opened offices in Europe and Asia to better serve our international customers.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 12,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
            }}
          >
            Building the Future of Work
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: 700,
              mx: "auto",
              opacity: 0.9,
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            At Racker, we're passionate about empowering teams to achieve more
            together. Our mission is to create tools that make collaboration
            effortless and productivity natural.
          </Typography>

          {/* Stats */}
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Our Story
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              Racker was born from a simple frustration: why was it so hard for
              teams to stay organized and work together effectively? Our
              founders, Sarah and Michael, experienced this challenge firsthand
              while leading teams at fast-growing tech companies.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              They realized that existing project management tools were either
              too complex for everyday use or too simple to handle real business
              needs. So they set out to build something different – a platform
              that combines powerful functionality with intuitive design.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              Today, Racker helps thousands of teams worldwide turn their ideas
              into reality, one project at a time.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={8}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "linear-gradient(45deg, #f8fafc, #e2e8f0)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Stack spacing={3}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Rocket sx={{ color: "#667eea", fontSize: 30 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Mission-Driven
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Speed sx={{ color: "#764ba2", fontSize: 30 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Performance Focused
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Security sx={{ color: "#f093fb", fontSize: 30 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Security First
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <TrendingUp sx={{ color: "#48c6ef", fontSize: 30 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Growth Minded
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ backgroundColor: "#f8fafc", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Our Values
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400, maxWidth: 600, mx: "auto" }}
            >
              The principles that guide everything we do and every decision we
              make
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
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
                        mb: 3,
                        backgroundColor: value.color,
                        color: "white",
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
            Meet Our Team
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400, maxWidth: 600, mx: "auto" }}
          >
            The passionate people behind Racker who work every day to make your
            team more productive
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={2}
                sx={{
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
                      width: 100,
                      height: 100,
                      mx: "auto",
                      mb: 3,
                      backgroundColor: "#667eea",
                      fontSize: "2rem",
                      fontWeight: 600,
                    }}
                  >
                    {member.avatar}
                  </Avatar>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {member.name}
                  </Typography>
                  <Chip
                    label={member.role}
                    sx={{
                      mb: 2,
                      backgroundColor: "rgba(102, 126, 234, 0.1)",
                      color: "#667eea",
                      fontWeight: 500,
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Timeline Section */}
      <Box sx={{ backgroundColor: "#f8fafc", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Our Journey
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400, maxWidth: 600, mx: "auto" }}
            >
              Key milestones in our mission to transform how teams collaborate
              and succeed
            </Typography>
          </Box>

          <Box sx={{ position: "relative" }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 4,
                background: "linear-gradient(180deg, #667eea, #764ba2)",
                transform: "translateX(-50%)",
                display: { xs: "none", md: "block" },
              }}
            />

            <Stack spacing={6}>
              {milestones.map((milestone, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: {
                      xs: "column",
                      md: index % 2 === 0 ? "row" : "row-reverse",
                    },
                    textAlign: {
                      xs: "center",
                      md: index % 2 === 0 ? "left" : "right",
                    },
                  }}
                >
                  <Box sx={{ flex: 1, px: { xs: 0, md: 4 } }}>
                    <Paper
                      elevation={4}
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        maxWidth: 400,
                        mx: { xs: "auto", md: index % 2 === 0 ? 0 : "auto" },
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: "#667eea",
                          mb: 1,
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {milestone.description}
                      </Typography>
                    </Paper>
                  </Box>

                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: "#667eea",
                      border: "4px solid white",
                      boxShadow: "0 0 0 4px rgba(102, 126, 234, 0.2)",
                      zIndex: 1,
                      display: { xs: "none", md: "block" },
                    }}
                  />

                  <Box sx={{ flex: 1 }} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          py: 10,
          textAlign: "center",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 600,
            }}
          >
            Join Our Mission
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontWeight: 400,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            Ready to transform how your team works? Join thousands of teams
            already using Racker to achieve more together.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Box component="a" href="/signup" sx={{ textDecoration: "none" }}>
              <Typography
                variant="contained"
                component="span"
                sx={{
                  display: "inline-block",
                  backgroundColor: "white",
                  color: "#667eea",
                  px: 5,
                  py: 2,
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Start Your Free Trial
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
