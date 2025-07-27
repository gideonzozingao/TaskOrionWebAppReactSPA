import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  Stack,
  Avatar,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Google,
  GitHub,
  PersonAdd,
} from "@mui/icons-material";
import axios, { AxiosResponse } from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: "" }));
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: "" }));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (errors.username) setErrors((prev) => ({ ...prev, username: "" }));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword)
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
  };
  const handleAgreeToTermsChange = (e) => {
    setAgreeToTerms(e.target.checked);
    if (errors.agreeToTerms)
      setErrors((prev) => ({ ...prev, agreeToTerms: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter a valid email address";
    if (!username.trim()) newErrors.username = "Username is required";
    else if (username.length < 8)
      newErrors.username = "Username must be at least 8 characters";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage("");

    const signupData = {
      firstName,
      lastName,
      email,
      password,
      agreeToTerms,
      username,
    };

    try {
      const res = await axios.post(
        "http://localhost:8087/authentication/register",
        signupData
      );

      if (res.status === 201) {
        setSuccessMessage(
          "🎉 Account created successfully! You can now sign in."
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setAgreeToTerms(false);

        // Auto dismiss success message
        setTimeout(() => {
          setSuccessMessage("");
          // Optionally redirect to login:
          // window.location.href = "/signin";
        }, 5000);
      } else {
        setErrors({ submit: "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({
        submit:
          error?.response?.data?.message ||
          "Failed to create account. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Signing up with ${provider}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={32}
          sx={{
            p: 4,
            borderRadius: 4,

            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar
              sx={{
                mx: "auto",
                mb: 2,
                bgcolor: "primary.main",
                width: 56,
                height: 56,
              }}
            >
              <PersonAdd fontSize="large" />
            </Avatar>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Create Account
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Join thousands of teams using Racker
            </Typography>
          </Box>

          <Stack spacing={2} sx={{ mb: 3 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Google />}
              onClick={() => handleSocialLogin("Google")}
            >
              Continue with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GitHub />}
              onClick={() => handleSocialLogin("GitHub")}
            >
              Continue with GitHub
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              or sign up with email
            </Typography>
          </Divider>

          {/* Alerts */}
          {successMessage && (
            <Alert
              severity="success"
              sx={{
                mb: 3,
                borderLeft: "5px solid #4caf50",
                backgroundColor: "#e8f5e9",
                color: "#2e7d32",
                fontWeight: 500,
              }}
            >
              {successMessage}
            </Alert>
          )}
          {errors.submit && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {errors.submit}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />

            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />

            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="Email Address"
              value={email}
              onChange={handleEmailChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              error={!!errors.username}
              helperText={errors.username}
            />

            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              sx={{ mb: 2 }}
              control={
                <Checkbox
                  checked={agreeToTerms}
                  onChange={handleAgreeToTermsChange}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    style={{ color: "#667eea", fontWeight: 600 }}
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    style={{ color: "#667eea", fontWeight: 600 }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
            {errors.agreeToTerms && (
              <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                {errors.agreeToTerms}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  style={{ color: "#667eea", fontWeight: 600 }}
                >
                  Sign in here
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup;
