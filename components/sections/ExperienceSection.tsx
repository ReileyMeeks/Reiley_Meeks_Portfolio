// components/sections/ExperienceSection.tsx
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

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
    title: "Software Engineer/Full Stack Developer @",
    company: "Trane Technologies",
    date: "January 2024",
    location: "Davidson, NC",
    description: [
      "Built and deployed a full-stack final inspection system with Next.js and MongoDB, delivering seamless automation and integration between sales and factories.",
      "Spearheaded development of serverless architecture using Go and Python, integrating OpenAI capabilities while optimizing system performance through MongoDB and cloud services.",
      "Led the design, implementation, and engineering of modular UIs for LLM AI applications using Next.js, enhancing scalability and functionality.",
      "Managed GitHub repositories, implementing Git version control strategies, branching workflows, pull requests, and release management.",
      "Automated CI/CD pipelines using GitHub Actions to streamline deployment and testing processes, reducing errors and enhancing agile methodology.",
    ],
  },
  {
    title: "Freelance Full Stack Developer and iOS Developer",
    company: "",
    date: "May 2020",
    location: "Charlotte, NC",
    description: [
      "Automated deployment pipelines with GitHub CI/CD actions on Vercel and Azure, enabling reliable, scalable, and efficient software delivery.",
      "Developed modern, responsive web applications using Next.js and TypeScript, integrating RESTful APIs for backend communication.",
      "Engineered and maintained iOS applications using SwiftUI and SwiftData, ensuring efficient local storage, synchronization, and real-time data communication.",
      "Designed and built interactive UI components, including image galleries and responsive forms, improving user engagement and functionality.",
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
  return (
    <Box
      component={motion.section}
      id="experience"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{ py: 10, pb: 25 }}
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
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  p: 4,
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
      </Container>
    </Box>
  );
}