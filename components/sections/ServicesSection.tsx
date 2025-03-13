import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function ServicesSection() {
  return (
    <Box
      component={motion.section}
      id="services"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            component={motion.div}
            variants={contentVariants}
            sx={{
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100px",
                height: "4px",
                background: "linear-gradient(to right, #ed64a6, #805ad5)",
                borderRadius: "2px",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: "bold",
                textAlign: "center",
                background: "linear-gradient(to right, #ed64a6, #805ad5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </Typography>
          </Box>
          <Box
            component={motion.div}
            variants={contentVariants}
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "2px",
                background: "linear-gradient(to right, transparent, #ed64a6, transparent)",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
              }}
            >
              Coming soon...
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 