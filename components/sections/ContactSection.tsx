import { useState, FormEvent, ChangeEvent } from "react";
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
  Snackbar,
  Alert,
  CircularProgress,
  SelectChangeEvent,
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactReason: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    contactReason: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };
  
  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user selects an option
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email || !/^\S+@\S+\.\S+$/.test(formData.email),
      contactReason: !formData.contactReason,
      message: !formData.message,
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setAlert({
        open: true,
        message: "Please fill in all required fields correctly",
        severity: "error",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare form data for sending
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        contact_reason: formData.contactReason,
        message: formData.message,
      };

      // For testing purposes, let's always use the main endpoint
      // Client-side environment variables need to be prefixed with NEXT_PUBLIC_
      const endpoint = '/api/contact';
      
      console.log(`Sending form submission to: ${endpoint}`);

      // Send the email using fetch to your own API endpoint
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error response:', errorData);
        throw new Error(errorData.error || 'Failed to send message');
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        contactReason: "",
        message: "",
      });
      
      setAlert({
        open: true,
        message: "Your message has been sent! I'll get back to you soon.",
        severity: "success",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setAlert({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAlert = () => {
    setAlert({
      ...alert,
      open: false,
    });
  };

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
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField
                required
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
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
                  "& .MuiFormHelperText-root": {
                    color: "#f44336",
                  },
                }}
              />
              <TextField
                required
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                helperText={errors.email ? "Valid email is required" : ""}
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
                  "& .MuiFormHelperText-root": {
                    color: "#f44336",
                  },
                }}
              />
              <FormControl fullWidth error={errors.contactReason}>
                <InputLabel
                  id="contact-reason-label"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    "&.Mui-focused": {
                      color: "#805ad5",
                    },
                  }}
                >
                  Contact Reason
                </InputLabel>
                <Select
                  labelId="contact-reason-label"
                  label="Contact Reason"
                  name="contactReason"
                  value={formData.contactReason}
                  onChange={handleSelectChange}
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
                {errors.contactReason && (
                  <Typography variant="caption" sx={{ color: "#f44336", ml: 2, mt: 0.5 }}>
                    Please select a contact reason
                  </Typography>
                )}
              </FormControl>
              <TextField
                required
                label="Message"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                helperText={errors.message ? "Message is required" : ""}
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
                  "& .MuiFormHelperText-root": {
                    color: "#f44336",
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                fullWidth
                sx={{
                  background: "linear-gradient(to right, rgba(128, 90, 213, 0.8), rgba(49, 130, 206, 0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(to right, rgba(128, 90, 213, 0.9), rgba(49, 130, 206, 0.9))",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                  "&:disabled": {
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "rgba(255, 255, 255, 0.4)",
                  },
                  transition: "all 0.2s",
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Send Message"
                )}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
      
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
} 