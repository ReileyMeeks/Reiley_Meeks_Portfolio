// components/SkillPill.tsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface SkillPillProps {
  name: string;
  proficiency: number; // value from 0 to 100
  color: string;
}

const MotionBox = motion(Box);

export function SkillPill({ name, proficiency, color }: SkillPillProps) {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      sx={{
        background: "rgba(255,255,255,0.1)",
        borderRadius: "9999px",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        maxWidth: "300px",
        height: "30px",
        margin: "4px 0",
        cursor: "pointer",
      }}
    >
      {/* Colored fill representing proficiency */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${proficiency}%`,
          background: color,
          opacity: 0.7,
          transition: "width 0.3s ease",
        }}
      />
      {/* Skill text overlay */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "white",
          fontWeight: "bold",
          textShadow: "0px 0px 4px rgba(0,0,0,0.5)",
        }}
      >
        <Typography variant="body2">
          {name}
        </Typography>
      </Box>
    </MotionBox>
  );
}