import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActivePath = (path) => location.pathname === path;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          mb: 2,
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          Racker
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemText>
              <Button
                component={Link}
                to={item.path}
                fullWidth
                sx={{
                  color: isActivePath(item.path)
                    ? theme.palette.primary.main
                    : "text.primary",
                  fontWeight: isActivePath(item.path) ? 600 : 400,
                  textTransform: "none",
                  fontSize: "1rem",
                  py: 1.5,
                }}
              >
                {item.label}
              </Button>
            </ListItemText>
          </ListItem>
        ))}
        <ListItem sx={{ pt: 2 }}>
          <Button
            component={Link}
            to="/signin"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 2,
              textTransform: "none",
              py: 1.5,
            }}
          >
            Sign In
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 2,
              textTransform: "none",
              py: 1.5,
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              boxShadow: "0 4px 20px rgba(102,126,234,0.3)",
            }}
          >
            Get Started
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, py: 1 }}>
            {/* Logo */}
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                mr: 4,
                fontWeight: 800,
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
                fontSize: { xs: "1.3rem", md: "1.5rem" },
              }}
            >
              TaskOrion
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      mx: 1,
                      color: isActivePath(item.path)
                        ? theme.palette.primary.main
                        : "text.primary",
                      fontWeight: isActivePath(item.path) ? 600 : 500,
                      textTransform: "none",
                      fontSize: "1rem",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: isActivePath(item.path) ? "100%" : "0%",
                        height: 2,
                        backgroundColor: theme.palette.primary.main,
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Desktop Action Buttons */}
            {!isMobile && (
              <Stack direction="row" spacing={3}>
                <Button
                  component={Link}
                  to="/signin"
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    px: 3,
                    fontWeight: 500,
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    px: 3,
                    background: "linear-gradient(45deg, #667eea, #764ba2)",
                    boxShadow: "0 4px 20px rgba(102,126,234,0.3)",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      boxShadow: "0 6px 25px rgba(102,126,234,0.4)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;
