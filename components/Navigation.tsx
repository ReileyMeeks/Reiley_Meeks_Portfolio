// components/Navigation.tsx
"use client"; 

import { useState, useRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Menu items with proper section identifiers
const menuItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills & Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

// Variants to animate the outer pill container
const containerVariants = {
  closed: {
    width: "80px", // Set a specific width for the closed state
    height: "70px",
    borderRadius: "30px",
    transition: { type: "spring", stiffness: 200, damping: 25, mass: 0.5 },
  },
  open: {
    width: "200px",       // Adjust as desired
    height: "250px",       // Let the content determine the height
    borderRadius: "30px",
    transition: { type: "spring", stiffness: 200, damping: 25, mass: 0.5 },
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  // Use hash-based navigation for more reliable scrolling
  const scrollToSection = (sectionId: string) => {
    // Set hash in URL to trigger native browser scroll
    window.location.hash = sectionId;
    
    // Close the menu
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "5%",
        right: "150px",
        transform: "translateY(0%)",
        zIndex: 2,
      }}
    >
      {/* Outer pill container */}
      <Box
        ref={containerRef}
        component={motion.div}
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "8px 12px",
          paddingLeft: "20px",
          overflow: "hidden",
          transformOrigin: "top right",
        }}
      >
        {/* Toggle button (Menu or Close icon) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            alignSelf: "flex-end",
            padding: "8px 8px",
          }}
        >
          <IconButton
            onClick={handleToggle}
            sx={{
              color: "white",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* AnimatePresence to smoothly reveal/hide menu items */}
        <AnimatePresence>
          {isOpen && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                overflow: "hidden",
                paddingTop: "4px",
              }}
            >
              {menuItems.map((item) => (
                <Typography
                  key={item.id}
                  variant="body1"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    padding: "5px 12px",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                      borderRadius: "20px",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}