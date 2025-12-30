// components/sections/ExperienceSection.tsx
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import ResumeModal from "../ResumeModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const experiences = [
  {
    title: "AI Engineer @",
    company: "Avante Health Solutions",
    date: "May 2025",
    location: "Charlotte, NC",
    description: [
      "Architected and deployed RAG-based LLM pipeline using MongoDB, Azure Document Intelligence, and Azure OpenAI, increasing service technician productivity and reducing equipment service time.",
      "Led research and implementation of local Large Language Model deployments (GPT OSS, Qwen 3).",
      "Own all AI initiatives across the company including development, planning, architecture, and cloud infrastructure for machine learning systems.",
      "Developed full-stack AI features using Python, JavaScript, and React, integrating Azure OpenAI and custom fine-tuned models to deliver predictive insights to enterprise customers.",
    ],
  },
  {
    title: "Founding Software Engineer @",
    company: "Amiqo",
    date: "April 2025",
    location: "Atlanta, GA",
    description: [
      "Built and scaled Amiqo's mobile application using React Native, delivering seamless cross-platform performance.",
      "Led application architecture refinement, implementing modular component design that reduced technical debt by 30% and improved feature velocity by 50%.",
      "Optimized app performance through code profiling and lazy loading strategies, reducing initial load time by 65% and memory usage by 40%.",
    ],
  },
  {
    title: "Co-Founder & Chief Technology Officer @",
    company: "Homelore",
    date: "March 2025",
    location: "Charlotte, NC",
    description: [
      "Defined and implemented full technical stack (Next.js, Swift Vapor, MongoDB, Firebase) to support AI-powered home data platform.",
      "Architected and deployed containerized Swift Vapor backend with RESTful APIs, achieving 99.9% uptime and <100ms average response time.",
      "Engineered secure authentication system using Firebase Auth integrated with MongoDB, supporting multi-tenant architecture and role-based access control.",
      "Integrated AI capabilities for intelligent data processing and analysis, leveraging natural language interfaces and automated insights generation.",
    ],
  },
  {
    title: "Software Engineer/Full Stack Developer @",
    company: "Trane Technologies",
    date: "January 2024 - March 2025",
    location: "Davidson, NC",
    description: [
      "Built and deployed 8+ production full-stack applications using Next.js, MongoDB, and Azure serverless functions, serving 1,000+ internal users across global operations.",
      "Led design and implementation of modular UI framework for LLM-powered applications using Next.js and Azure OpenAI API, reducing development time for new AI features by 60%.",
      "Automated CI/CD pipelines using GitHub Actions, reducing deployment time and decreasing production incidents through automated testing.",
    ],
  },
  {
    title: "Independent Software Consultant",
    company: "",
    date: "May 2020",
    location: "Charlotte, NC",
    description: [
      "Delivered custom full-stack web applications for clients using Next.js, TypeScript, and RESTful APIs, with 100% on-time project completion rate.",
      "Engineered iOS applications using SwiftUI and SwiftData with oﬄine-first architecture, iCloud sync, and cloud database integration.",
      "Provided technical consulting on cloud architecture, API design, and mobile app modernization strategies for small and medium-sized businesses.",
    ],
  },
];

export default function ExperienceSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <Box
      component={motion.section}
      id="experience"
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
          Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
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
                  borderRadius: "24px",
                  p: 4,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.6s",
                  },
                  "&:hover::before": {
                    transform: "translateX(100%)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    {exp.title} {exp.company}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {exp.date} | {exp.location}
                  </Typography>
                </Box>
                <List>
                  {exp.description.map((item, idx) => (
                    <ListItem key={idx} disablePadding>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          color: "rgba(255,255,255,0.8)",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Resume Button */}
        <Box
          component={motion.div}
          variants={cardVariants}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <Button
            variant="contained"
            startIcon={<FaFileAlt />}
            onClick={() => setIsResumeOpen(true)}
            sx={{
              background: "linear-gradient(45deg, #3182ce, #805ad5)",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              borderRadius: "9999px",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(45deg, #2c5282, #6b46c1)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            View Resume
          </Button>
        </Box>

        {/* Resume Modal */}
        <ResumeModal
          open={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </Container>
    </Box>
  );
}
