import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { motion } from "framer-motion";

const projectTypes = [
  "Web/Mobile Application",
  "AI Chatbot",
  "Tech Consulting",
  "UI/UX Design",
  "Recruitment",
  "Other",
];

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

export default function ContactSection() {
  return (
    <Box
      component={motion.section}
      id="contact"
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
              Contact
            </Typography>
          </Box>
          <Paper
            component={motion.div}
            variants={cardVariants}
            whileHover={{
              scale: 1.01,
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
              maxWidth: "800px",
              width: "100%",
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
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField
                required
                label="Name"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#805ad5",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                    "&.Mui-focused": {
                      color: "#805ad5",
                    },
                  },
                }}
              />
              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#805ad5",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                    "&.Mui-focused": {
                      color: "#805ad5",
                    },
                  },
                }}
              />
              <FormControl fullWidth>
                <InputLabel
                  id="project-type-label"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&.Mui-focused": {
                      color: "#805ad5",
                    },
                  }}
                >
                  Project Type
                </InputLabel>
                <Select
                  labelId="project-type-label"
                  label="Project Type"
                  defaultValue=""
                  sx={{
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#805ad5",
                    },
                  }}
                >
                  {projectTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                required
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#805ad5",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                    "&.Mui-focused": {
                      color: "#805ad5",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "white",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.2)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 