// components/sections/ExperienceSection.tsx
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import ResumeModal from "../ResumeModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const experiences = [
    {
    title: "Full Stack Developer @",
    company: "Avante Health Solutions",
    date: "May 2025",
    location: "Charlotte, NC",
    description: [
      "Developed full-stack features and product enhancements, utilizing JavaScript, Swift, and React to meet evolving business requirements and enhance user experience.",
      "Led the research and development of local Large Language Model (LLM) deployments for use within the company.",
      "Implemented RAG based LLM’s increasing service technicians productivity and delivering new insights to customers.",
      "Maintained and optimized application performance through proactive debugging and timely issue resolution, ensuring minimal downtime.",
      "Managed PostgreSQL databases on Debian servers, performing data migrations, and schema updates to maintain reliability and improve application efficiency."
    ],
  },
  {
    title: "Founding Software Engineer @",
    company: "Amiqo",
    date: "April 2025",
    location: "Atlanta, GA",
    description: [
      "Built and enhanced Amiqo’s mobile application using React Native, ensuring seamless cross-platform performance and intuitive user experiences.",
      "Led ongoing application refinement, developing scalable solutions, enhancing existing features, and proactively addressing performance bottlenecks and bugs.",
      "Collaborated directly with product and design teams to rapidly prototype, test, and deploy new app features, significantly accelerating product iteration cycles.",
    ],
  },
  {
    title: "Co-Founder & Chief Technology Officer @",
    company: "Homelore",
    date: "March 2025",
    location: "Charlotte, NC",
    description: [
      "Led the definition and implementation of the full technical stack to ensure scalability, maintainability, and seamless integration across services.",
      "Spearheaded the design and implementation of the Next.js web app, and Swift Vapor backend deployed in a scalable container.",
      "Architected and built authentication solutions using Firebase integrated with MongoDB, ensuring robust security and efficient user management.",
      "Strategically guided the product vision, ensuring technology alignment with business objectives, and enabling data-driven insights for predictive home maintenance analytics.",
    ],
  },
  {
    title: "Software Engineer/Full Stack Developer @",
    company: "Trane Technologies",
    date: "January 2024 - March 2025",
    location: "Davidson, NC",
    description: [
      "Built and deployed a full-stack applications with Next.js, MongoDB, and serverless functions delivering reliable web apps clients.",
      "Led the design, implementation, and engineering of modular UIs for LLM applications using Next.js and Azure OpenAI API, enhancing scalability and functionality.",
      "Automated CI/CD pipelines using GitHub Actions streamline deployment and testing processes, reducing errors and enhancing agile methodology.",
    ],
  },
  {
    title: "Freelance Full Stack Developer and iOS Developer",
    company: "",
    date: "May 2020",
    location: "Charlotte, NC",
    description: [
      "Developed modern, responsive web applications using Next.js and TypeScript, integrating RESTful APIs backend communication.",
      "Engineered and maintained iOS applications using SwiftUI and SwiftData, ensuring efficient local storage, synchronization, and real-time data communication.",
      "Designed and built interactive UI components, including image galleries and responsive forms, improving user engagement and enhancing functionality. ",
    ],
  },
  {
    title: "Software Engineer Intern @",
    company: "Bank of America",
    date: "February 2022 — May 2022",
    location: "Charlotte, NC",
    description: [
      "Managed service tickets for a Hadoop platform, ensuring high availability and reliability of distributed systems.",
      "Debugged and maintained Java-based services, ensuring smooth integration with Hadoop and other frameworks.",
      "Created comprehensive documentation for backend processes, improving team efficiency and knowledge sharing.",
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
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
                    {exp.title}  {exp.company}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "rgba(255,255,255,0.8)" }}>
                    {exp.date} | {exp.location}
                  </Typography>
                </Box>
                <List>
                  {exp.description.map((item, idx) => (
                    <ListItem key={idx} disablePadding>
                      <ListItemText primary={item} primaryTypographyProps={{ color: "rgba(255,255,255,0.8)" }} />
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
            display: 'flex',
            justifyContent: 'center',
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
              borderRadius: "12px",
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