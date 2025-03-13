import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobile, FaDatabase } from "react-icons/fa";

const skillsData = [
  {
    title: "Frontend Development",
    icon: FaCode,
    description:
      "React, TypeScript, Next.js, and modern CSS frameworks for building responsive web applications.",
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Node.js, Python, and RESTful API design with focus on scalability and performance.",
  },
  {
    title: "Mobile Development",
    icon: FaMobile,
    description:
      "React Native and Flutter for cross-platform mobile application development.",
  },
  {
    title: "Database Design",
    icon: FaDatabase,
    description:
      "MongoDB, PostgreSQL, and Redis for efficient data storage and retrieval.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function SkillsSection() {
  return (
    <Box
      component={motion.section}
      id="skills"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: "100vh",
        py: 10,
      }}
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
                background: "linear-gradient(to right, #3182ce, #805ad5)",
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
                background: "linear-gradient(to right, #3182ce, #805ad5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills &amp; Experience
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {skillsData.map((skill, index) => (
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
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      component={skill.icon}
                      sx={{
                        fontSize: "2.5rem",
                        color: "#805ad5",
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontWeight: "medium",
                      }}
                    >
                      {skill.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textAlign: "center",
                      }}
                    >
                      {skill.description}
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