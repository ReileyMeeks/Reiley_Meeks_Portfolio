import Head from "next/head";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import HomeSection from "../components/sections/HomeSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import EducationSection from "../components/sections/EducationSection";
import ServicesSection from "../components/sections/ServicesSection";
import ContactSection from "../components/sections/ContactSection";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website!" />
      </Head>

      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Enhanced Background Effects */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            pointerEvents: "none",
            backdropFilter: "blur(100px)",
            background: "rgba(13, 16, 45, 0.7)",
            zIndex: 0,
          }}
        >
          {/* Animated Grid Pattern */}
          <Box
            sx={{
              position: "absolute",
              top: "-10%",
              left: "-10%",
              width: "120%",
              height: "120%",
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              animation: "gridMove 20s linear infinite",
              "@keyframes gridMove": {
                "0%": { transform: "translateY(0)" },
                "100%": { transform: "translateY(30px)" },
              },
            }}
          />

          {/* Floating Gradient Orbs */}
          <MotionBox
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: "40%",
              height: "60%",
              background: "linear-gradient(45deg, #6b46c1, #3182ce)",
              filter: "blur(80px)",
              opacity: 0.05,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <MotionBox
            sx={{
              position: "absolute",
              bottom: "10%",
              right: "5%",
              width: "35%",
              height: "50%",
              background: "linear-gradient(45deg, #ed64a6, #805ad5)",
              filter: "blur(80px)",
              opacity: 0.05,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Additional Depth Layers */}
          <MotionBox
            sx={{
              position: "absolute",
              top: "30%",
              left: "20%",
              width: "25%",
              height: "40%",
              background: "linear-gradient(45deg, #48bb78, #38b2ac)",
              filter: "blur(60px)",
              opacity: 0.03,
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <MotionBox
            sx={{
              position: "absolute",
              bottom: "30%",
              right: "20%",
              width: "25%",
              height: "40%",
              background: "linear-gradient(45deg, #f6ad55, #ed8936)",
              filter: "blur(60px)",
              opacity: 0.03,
            }}
            animate={{
              scale: [1, 0.9, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Animated Light Beams */}
          {[...Array(3)].map((_, i) => (
            <MotionBox
              key={`beam-${i}`}
              sx={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: "200px",
                height: "200px",
                background: `linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)`,
                filter: "blur(30px)",
                transform: "rotate(45deg)",
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                rotate: [45, 90, 45],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <MotionBox
              key={`particle-${i}`}
              sx={{
                position: "absolute",
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                filter: "blur(2px)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            />
          ))}

          {/* Dynamic Shapes */}
          {[...Array(5)].map((_, i) => (
            <MotionBox
              key={`shape-${i}`}
              sx={{
                position: "absolute",
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                background: `linear-gradient(45deg, 
                  rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1),
                  rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)
                )`,
                filter: "blur(40px)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: "50%",
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Ambient Light */}
          <MotionBox
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </Box>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <HomeSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ServicesSection />
          <ContactSection />
        </Box>
      </Box>
    </>
  );
}