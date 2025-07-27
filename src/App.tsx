import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./assets/base-components/Header";
import Footer from "./assets/base-components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ContactUsPage from "./pages/ContactUsPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import Projects from "./pages/Projects";
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
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 600, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
