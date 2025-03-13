import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { FaCode, FaRobot, FaHandshake, FaPalette } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
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

const services = [
  {
    title: "Web/Mobile Application",
    icon: FaCode,
    description: "Custom web and mobile applications built with modern technologies like Next.js, React, and SwiftUI. Focus on performance, scalability, and user experience.",
  },
  {
    title: "AI Chatbot",
    icon: FaRobot,
    description: "Intelligent chatbot solutions powered by advanced AI models. Perfect for customer service, automation, and enhancing user engagement.",
  },
  {
    title: "Tech Consulting",
    icon: FaHandshake,
    description: "Expert guidance on technology stack selection, architecture design, and implementation strategies to optimize your business solutions.",
  },
  {
    title: "UI/UX Design",
    icon: FaPalette,
    description: "Beautiful and intuitive user interfaces designed with modern aesthetics and user-centered principles. Focus on accessibility and user engagement.",
  },
];

export default function ServicesSection() {
  return (
    <Box
      component={motion.section}
      id="services"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{ py: 10 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box
            component={motion.div}
            variants={cardVariants}
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

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  component={motion.div}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                  }}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    p: 4,
                    height: "100%",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                      transform: "translateX(-100%)",
                      transition: "transform 0.6s",
                    },
                    "&:hover::before": {
                      transform: "translateX(100%)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        component={service.icon}
                        sx={{
                          fontSize: "2rem",
                          color: "#ed64a6",
                        }}
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontWeight: "medium",
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 