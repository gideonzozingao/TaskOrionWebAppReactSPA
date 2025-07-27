"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Container,
  Grid,
  Paper,
  Button,
  Avatar,
} from "@mui/material";

import ChecklistIcon from "@mui/icons-material/Checklist";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AddTaskIcon from "@mui/icons-material/AddTask";

const drawerWidth = 240;

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
      }}
    >
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        <Toolbar sx={{ justifyContent: "center", mt: 2 }}>
          <Avatar sx={{ bgcolor: "#1976d2", width: 48, height: 48 }}>T</Avatar>
        </Toolbar>
        <Typography
          align="center"
          variant="subtitle1"
          sx={{ mt: 1, mb: 2, fontWeight: "bold" }}
        >
          TaskOrion
        </Typography>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { text: "Overview", icon: <DashboardIcon /> },
              { text: "My Tasks", icon: <ChecklistIcon /> },
              { text: "Completed", icon: <AssignmentTurnedInIcon /> },
              { text: "Create Task", icon: <AddTaskIcon /> },
            ].map((item, index) => (
              <ListItem
                button
                key={index}
                sx={{
                  mx: 1,
                  borderRadius: 2,
                  mb: 1,
                  "&:hover": { backgroundColor: "#e3f2fd" },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            background: "rgba(255, 255, 255, 0.4)",
            boxShadow: "none",
            backdropFilter: "blur(10px)",
            color: "#333",
          }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Task & TODO Tracker – Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Welcome back, Gideon 👋
          </Typography>

          {/* Summary Cards */}
          <Grid container spacing={3}>
            {[
              { title: "Tasks Today", value: 5 },
              { title: "In Progress", value: 12 },
              { title: "Completed This Week", value: 18 },
            ].map((card, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background:
                      "linear-gradient(to top left, #ffffffcc, #e3f2fdcc)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                  }}
                >
                  <Typography variant="subtitle2" color="text.secondary">
                    {card.title}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                    {card.value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Task Table or Placeholder */}
          <Paper
            elevation={2}
            sx={{
              mt: 5,
              p: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.8)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Your Tasks
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You currently have no tasks assigned. Start by creating one.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, borderRadius: 3 }}
            >
              Create Task
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
