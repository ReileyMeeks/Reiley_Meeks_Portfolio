// components/sections/SkillsSection.tsx
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { SkillPill } from "../SkillPill";
import { FaCode, FaServer, FaCloud, FaTools } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
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

// Define your skill categories and key skills
const categories = [
  {
    category: "Languages",
    icon: FaCode,
    description: "Core programming languages;",
    skills: [
      { name: "Python", proficiency: 100, color: "linear-gradient(45deg, #3776ab, #4CAF50)" },
      { name: "Swift", proficiency: 100, color: "linear-gradient(45deg, #ffac45, #ff6b6b)" },
      { name: "TypeScript", proficiency: 90, color: "linear-gradient(45deg, #007acc, #00bcd4)" },
      { name: "JavaScript", proficiency: 85, color: "linear-gradient(45deg, #f7df1e, #ffd700)" },
      { name: "Java", proficiency: 80, color: "linear-gradient(45deg, #b07219, #e65100)" },
      { name: "Go", proficiency: 70, color: "linear-gradient(45deg, #00ADD8, #00bcd4)" },
      { name: "C/C++", proficiency: 65, color: "linear-gradient(45deg, #00599C, #2196F3)" },
    ],
  },
  {
    category: "Frameworks",
    icon: FaServer,
    description: "Specialize in modern frameworks and libraries;",
    skills: [
      { name: "Next.js", proficiency: 90, color: "linear-gradient(45deg, #000000, #333333)" },
      { name: "React.js", proficiency: 90, color: "linear-gradient(45deg, #61dafb, #00bcd4)" },
      { name: "SwiftUI", proficiency: 90, color: "linear-gradient(45deg, #ffac45, #ff6b6b)" },
      { name: "Flask", proficiency: 80, color: "linear-gradient(45deg, #000000, #4CAF50)" },
      { name: "React Native", proficiency: 70, color: "linear-gradient(45deg, #61dafb, #2196F3)" },
    ],
  },
  {
    category: "Cloud & Services",
    icon: FaCloud,
    description: "Cloud platforms and services;",
    skills: [
      { name: "Azure", proficiency: 100, color: "linear-gradient(45deg, #0078d4, #00bcd4)" },
      { name: "Vercel", proficiency: 100, color: "linear-gradient(45deg, #000000, #333333)" },
      { name: "MongoDB", proficiency: 90, color: "linear-gradient(45deg, #4db33d, #8bc34a)" },
      { name: "Google Cloud", proficiency: 70, color: "linear-gradient(45deg, #4285f4, #00bcd4)" },
      { name: "AWS", proficiency: 70, color: "linear-gradient(45deg, #232f3e, #ff9900)" },
      { name: "Firebase", proficiency: 70, color: "linear-gradient(45deg, #ffca28, #ffc107)" },
    ],
  },
  {
    category: "Technologies",
    icon: FaTools,
    description: "Development tools and technologies;",
    skills: [
      { name: "GitHub", proficiency: 100, color: "linear-gradient(45deg, #181717, #333333)" },
      { name: "Xcode", proficiency: 100, color: "linear-gradient(45deg, #2496ed, #00bcd4)" },
      { name: "Cursor AI", proficiency: 100, color: "linear-gradient(45deg, #326ce5, #2196F3)" },
      { name: "VS Code", proficiency: 100, color: "linear-gradient(45deg, #232f3e, #1976D2)" },
      { name: "Docker", proficiency: 90, color: "linear-gradient(45deg, #f1e05a, #ffd700)" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <Box
      component={motion.section}
      id="skills"
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
                background: "linear-gradient(to right, #805ad5, #3182ce)",
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
                background: "linear-gradient(to right, #805ad5, #3182ce)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {categories.map((cat, index) => (
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
                        component={cat.icon}
                        sx={{
                          fontSize: "2rem",
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
                        {cat.category}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        mb: 2,
                      }}
                    >
                      {cat.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                      {cat.skills.map((skill) => (
                        <SkillPill
                          key={skill.name}
                          name={skill.name}
                          proficiency={skill.proficiency}
                          color={skill.color}
                        />
                      ))}
                    </Box>
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