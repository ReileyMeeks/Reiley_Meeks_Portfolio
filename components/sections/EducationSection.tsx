// components/sections/EducationSection.tsx
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const educationData = [
  {
    degree: "Masters of Artificial Intelligence",
    date: "May 2027",
    institution: "University of Texas at Austin",
    details: "",
  },
  {
    degree: "BS, Computer Science",
    date: "May 2023",
    institution: "University of North Carolina at Charlotte",
    details: "Concentration: AI, Robotics, and Gaming | Honors: Cum Laude",
  },
];

export default function EducationSection() {
  return (
    <Box
      component={motion.section}
      id="education"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{ py: 10 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: "bold",
            textAlign: "center",
            mb: 6,
            background: "linear-gradient(to right, #3182ce, #805ad5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Education
        </Typography>
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} key={index}>
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
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "rgba(255,255,255,0.8)" }}>
                  {edu.institution} | {edu.date}
                </Typography>
                {edu.details && (
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", mt: 1 }}>
                    {edu.details}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}