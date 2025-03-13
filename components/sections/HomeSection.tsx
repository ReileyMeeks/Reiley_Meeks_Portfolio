import { Box, Typography, Container, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function HomeSection() {
  return (
    <Box
      component={motion.section}
      id="home"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            component={motion.div}
            variants={childVariants}
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
                background: "linear-gradient(to right, #9f7aea, #ed64a6)",
                borderRadius: "2px",
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "5rem" },
                fontWeight: "bold",
                textAlign: "center",
                background: "linear-gradient(to right, #9f7aea, #ed64a6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hi, I&apos;m Reiley Meeks
            </Typography>
          </Box>
          <Box
            component={motion.div}
            variants={childVariants}
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
                background: "linear-gradient(to right, transparent, #9f7aea, transparent)",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
              }}
            >
              I&apos;m a Software Engineer passionate about technology, creating beautiful
              and functional websites, apps, and all things tech.
            </Typography>
          </Box>

          {/* Social Media Links */}
          <Box
            component={motion.div}
            variants={childVariants}
            sx={{
              display: "flex",
              gap: 3,
              mt: 4,
            }}
          >
            <IconButton
              href="https://github.com/ReileyMeeks"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "2rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#9f7aea",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <FaGithub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/reiley-meeks"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "2rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#ed64a6",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <FaLinkedin />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 