import { useState, FormEvent, ChangeEvent } from "react";
import Head from "next/head";
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
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

const projectTypes = [
  "App Support",
  "Bug Report",
  "Privacy Inquiry",
  "Account / Data Request",
  "Other",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
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

const EFFECTIVE_DATE = "April 11, 2026";
const CONTACT_EMAIL = "support@reileymeeks.com";

export default function PrivacySupportPage() {
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
  }>({ open: false, message: "", severity: "success" });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
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
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        contact_reason: formData.contactReason,
        message: formData.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(templateParams),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setFormData({ name: "", email: "", contactReason: "", message: "" });
      setAlert({
        open: true,
        message: "Your inquiry has been sent! I'll get back to you soon.",
        severity: "success",
      });
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setAlert({
        open: true,
        message: "Failed to send inquiry. Please try again later.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAlert = () => setAlert({ ...alert, open: false });

  return (
    <>
      <Head>
        <title>Privacy & Support</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="description"
          content="Privacy policy, terms of use, and support for Reiley Meeks mobile applications."
        />
      </Head>

      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          py: 10,
        }}
      >
        <Container maxWidth="md">
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            sx={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            <Box
              component={motion.div}
              variants={cardVariants}
              sx={{ textAlign: "center" }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #805ad5, #3182ce)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Privacy & Support
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.6)", mt: 1 }}
              >
                Effective {EFFECTIVE_DATE}
              </Typography>
            </Box>

            {/* Privacy Policy */}
            <Paper
              component={motion.div}
              variants={cardVariants}
              id="privacy"
              sx={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
                p: { xs: 3, md: 5 },
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <Typography variant="h4" sx={{ color: "white", mb: 2 }}>
                Privacy Policy
              </Typography>
              <Typography sx={{ mb: 2 }}>
                This Privacy Policy describes how Reiley Meeks (&quot;we,&quot;
                &quot;us,&quot; or &quot;the Developer&quot;) handles
                information in connection with mobile applications published by
                the Developer (the &quot;Apps&quot;). By downloading or using
                the Apps, you agree to this policy.
              </Typography>

              <Typography variant="h6" sx={{ color: "white", mt: 3, mb: 1 }}>
                1. Information We Collect
              </Typography>
              <Typography sx={{ mb: 2 }}>
                The Apps are designed to collect the minimum information
                necessary to function. We do not require you to create an
                account or provide personal information to use core features.
                The Apps may process: (a) data you voluntarily enter into the
                App, which is stored locally on your device; (b) non-personal,
                aggregated diagnostic and crash data provided by the platform
                (Apple or Google); and (c) information you choose to send us
                directly when contacting support.
              </Typography>

              <Typography variant="h6" sx={{ color: "white", mt: 3, mb: 1 }}>
                2. How We Use Information
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Information is used solely to operate, maintain, and improve
                the Apps, respond to support requests, and fix bugs. We do not
                sell, rent, or trade your information. We do not use your
                information for advertising or profiling.
              </Typography>

              <Typography variant="h6" sx={{ color: "white", mt: 3, mb: 1 }}>
                3. Data Storage and Security
              </Typography>
              <Typography sx={{ mb: 2 }}>
                User-generated content is stored locally on your device unless
                explicitly synced through a platform service (such as iCloud or
                Google Drive) that you control. We implement reasonable
                technical measures to protect any information transmitted to
                us, but no method of transmission over the Internet is 100%
                secure.
              </Typography>

              <Typography variant="h6" sx={{ color: "white", mt: 3, mb: 1 }}>
                4. Third-Party Services
              </Typography>
              <Typography sx={{ mb: 2 }}>
                The Apps may rely on services provided by Apple, Google, or
                other platform providers. These third parties have their own
                privacy policies, and we are not responsible for their
                practices. We encourage you to review them.
              </Typography>

              <Typography variant="h6" sx={{ color: "white", mt: 3, mb: 1 }}>
                5. Children&apos;s Privacy
              </Typography>
              <Typography sx={{ mb: 2 }}>
                The Apps are not directed to children under the age of 13, and
                we do not knowingly collect personal information from children.
                If you believe a child has provided us with personal
                information, please contact us and we will take steps to
                delete it.
              </Typography>

              <Typography variant="h6" sx={{ color: "white", mt: 3, mb: 1 }}>
                6. Your Rights
              </Typography>
              <Typography sx={{ mb: 2 }}>
                You may request access to, correction of, or deletion of any
                personal information we hold about you by contacting us at{" "}
                {CONTACT_EMAIL}. Because most data stays on your device,
                uninstalling the App removes it.
              </Typography>

              <Typography variant="h6" sx={{ color: "white", mt: 3, mb: 1 }}>
                7. Changes to This Policy
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We may update this Privacy Policy from time to time. Continued
                use of the Apps after changes take effect constitutes
                acceptance of the revised policy.
              </Typography>

              <Divider
                sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }}
              />

              <Typography variant="h4" sx={{ color: "white", mb: 2 }}>
                Terms of Use
              </Typography>
              <Typography sx={{ mb: 2 }}>
                The Apps are provided on an &quot;as is&quot; and &quot;as
                available&quot; basis without warranties of any kind, express
                or implied. To the fullest extent permitted by law, the
                Developer disclaims all warranties, including merchantability,
                fitness for a particular purpose, and non-infringement.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                You agree to use the Apps only for lawful purposes and in a
                manner that does not infringe the rights of others. You may
                not reverse engineer, decompile, or attempt to extract the
                source code of the Apps, except as permitted by law.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                In no event shall the Developer be liable for any indirect,
                incidental, special, consequential, or punitive damages
                arising out of or related to your use of the Apps. The
                Developer&apos;s total cumulative liability shall not exceed
                the amount you paid, if any, to download the App.
              </Typography>
              <Typography>
                These terms are governed by the laws of the United States and
                the State of Texas, without regard to conflict-of-law
                principles.
              </Typography>
            </Paper>

            {/* Support Form */}
            <Paper
              component={motion.div}
              variants={cardVariants}
              id="support"
              sx={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography variant="h4" sx={{ color: "white", mb: 1 }}>
                Support
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}
              >
                Have a question, bug report, or privacy request? Send an
                inquiry and I&apos;ll get back to you.
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
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
                      borderRadius: "16px",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&.Mui-focused fieldset": { borderColor: "#805ad5" },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": { color: "#805ad5" },
                    },
                    "& .MuiFormHelperText-root": { color: "#f44336" },
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
                      borderRadius: "16px",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&.Mui-focused fieldset": { borderColor: "#805ad5" },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": { color: "#805ad5" },
                    },
                    "& .MuiFormHelperText-root": { color: "#f44336" },
                  }}
                />
                <FormControl fullWidth error={errors.contactReason}>
                  <InputLabel
                    id="support-reason-label"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": { color: "#805ad5" },
                    }}
                  >
                    Contact Reason
                  </InputLabel>
                  <Select
                    labelId="support-reason-label"
                    label="Contact Reason"
                    name="contactReason"
                    value={formData.contactReason}
                    onChange={handleSelectChange}
                    sx={{
                      color: "white",
                      borderRadius: "16px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
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
                    <Typography
                      variant="caption"
                      sx={{ color: "#f44336", ml: 2, mt: 0.5 }}
                    >
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
                      borderRadius: "16px",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&.Mui-focused fieldset": { borderColor: "#805ad5" },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": { color: "#805ad5" },
                    },
                    "& .MuiFormHelperText-root": { color: "#f44336" },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  fullWidth
                  sx={{
                    background:
                      "linear-gradient(to right, rgba(128, 90, 213, 0.8), rgba(49, 130, 206, 0.8))",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "9999px",
                    color: "white",
                    "&:hover": {
                      background:
                        "linear-gradient(to right, rgba(128, 90, 213, 0.9), rgba(49, 130, 206, 0.9))",
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
                    "Send Inquiry"
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
    </>
  );
}
