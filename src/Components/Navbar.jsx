import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/home/home" },
  { name: "Work", path: "/home/work" },
  { name: "About", path: "/home/about" },
  { name: "Contact", path: "/home/contact" },
];

// Animation variant for bouncing text
const bounceVariant = {
  initial: { y: -200 },
  animate: {
    y: [0, -30, 0, -15, 0, -5, 0],
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(87, 87, 87, 0.6)",
          borderBottom: "1px solid rgba(200,200,200,0.2)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <motion.div
            initial={{ y: -50 }}
            animate={{
              y: [-32, 0,-16, 0, -8, 0,-4,0,-2, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <Box
              component="span"
              sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}
            >
              Aryan Bisht
            </Box>
          </motion.div>


          {isMobile ? (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <Box key={item.name} sx={{ position: "relative" }}>
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color:
                        location.pathname === item.path ? "white" : "white",
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Link>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: "absolute",
                        height: "2px",
                        background: "#000",
                        width: "100%",
                        bottom: -4,
                        left: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, pt: 4 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.name}
                button
                component={Link}
                to={item.path}
                onClick={toggleDrawer}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                    color:
                      location.pathname === item.path
                        ? "primary"
                        : "text.primary",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
