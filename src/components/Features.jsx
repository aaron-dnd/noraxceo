import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Crown,
  LayoutDashboard,
  Calendar,
  CheckCircle,
  User,
  BarChart3,
  Clock,
} from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const features = [
    {
      title: "Admin Console",
      description:
        "Complete control over user registrations, role assignments, and system configuration. Set up your organization structure with ease.",
      detailedDescription:
        "Create and manage user accounts, assign roles, configure leave policies, and maintain full control over your organization's leave management system.",
      icon: Crown,
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "left",
        iconOffset: -40,
    },
    {
      title: "Dual Dashboards",
      description:
        "Thoughtfully designed interfaces tailored for both employees and managers with intuitive navigation and clear information hierarchy.",
      detailedDescription:
        "Employees get a clean, simple interface to request leaves and track balances, while managers get comprehensive tools for approvals and team oversight.",
      icon: LayoutDashboard,
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      position: "right",
      align: "left",
        iconOffset: -40,
    },
    {
      title: "Smart Leave Types",
      description:
        "Annual (21), Sick (10), Casual (7) leaves designed with industry standards in mind, with automatic balance tracking.",
      detailedDescription:
        "Pre-configured leave types that follow common industry practices, with automatic balance calculations, carry-forward rules, and policy enforcement.",
      icon: Calendar,
      color: "#ffecd2",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      position: "left",
        iconOffset: -40,
    },
    {
      title: "Quick Approvals",
      description:
        "Streamlined leave requests with intuitive approve/reject functionality and instant notifications to all parties.",
      detailedDescription:
        "One-click approval system with automated email notifications, bulk approval options, and clear audit trails for all decisions.",
      icon: CheckCircle,
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
      position: "right",
      align: "left",
        iconOffset: -40,
    },
    {
      title: "Profile Management",
      description:
        "Easy profile updates with photo uploads, emergency contacts, and security settings for complete user control.",
      detailedDescription:
        "Comprehensive profile management including personal information, profile pictures, emergency contacts, password changes, and notification preferences.",
      icon: User,
      color: "#feca57",
      gradient: "linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)",
      position: "left",
        iconOffset: -40,
    },
    {
      title: "Smart Analytics",
      description:
        "Insightful team analytics, leave patterns, and comprehensive reporting tools to help make informed decisions.",
      detailedDescription:
        "Track leave trends, identify patterns, generate reports, monitor team availability, and get insights to optimize your leave policies.",
      icon: BarChart3,
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
      position: "right",
      align: "left",
      iconOffset: -40,
    },
    {
      title: "Visual Calendar",
      description:
        "Beautiful calendar views with interactive details and comprehensive leave visualization for better planning.",
      detailedDescription:
        "Month, week, and day views showing all team leaves, holidays, and important dates with color-coded categories and detailed tooltips.",
      icon: Clock,
      color: "#54a0ff",
      gradient: "linear-gradient(135deg, #54a0ff 0%, #667eea 100%)",
      position: "left",
        iconOffset: -40,
    },
  ];

  // Track scroll progress for timeline animation
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const progress = latest;
      const newActiveFeature = Math.min(
        Math.floor(progress * features.length),
        features.length - 1
      );
      setActiveFeature(Math.max(0, newActiveFeature));
    });

    return () => unsubscribe();
  }, [scrollYProgress, features.length]);

  return (
    <Box
      id="features"
      ref={containerRef}
      sx={{
        py: 15,
        minHeight: "200vh", // Make it tall for scrolling effect
        background: `
          radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0f0c29 0%, #24243e 35%, #302b63 100%)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Box sx={{ textAlign: "center", mb: 15 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 900,
                color: "white",
                mb: 4,
                fontSize: { xs: "2.5rem", md: "4rem" },
                textShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <motion.span
                style={{
                  background:
                    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Feature Journey
              </motion.span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              Scroll down to explore each feature as it unfolds
            </Typography>
          </Box>
        </motion.div>

        {/* Timeline Container */}
        <Box sx={{ position: "relative" }}>
          {/* Central Timeline Line */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 4,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 2,
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
            {/* Animated Progress Line */}
            <motion.div
              style={{
                width: "100%",
                background:
                  "linear-gradient(to bottom, #667eea, #f093fb, #ffecd2)",
                borderRadius: 2,
                scaleY: lineProgress,
                transformOrigin: "top",
              }}
            />
          </Box>

          {/* Feature Points */}
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                minHeight: { xs: "80vh", md: "60vh" },
                mb: 8,
              }}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: activeFeature >= index ? 1.2 : 0.8,
                  opacity: activeFeature >= index ? 1 : 0.3,
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${feature.iconOffset || 0}px)`,
                  transform: "translateX(-50%)",
                  zIndex: 3,
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background:
                      activeFeature >= index
                        ? feature.gradient
                        : "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "4px solid",
                    borderColor:
                      activeFeature >= index
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(255,255,255,0.1)",
                    boxShadow:
                      activeFeature >= index
                        ? `0 0 40px ${feature.color}60`
                        : "none",
                    transition: "all 0.6s ease",
                  }}
                >
                  <feature.icon
                    size={32}
                    color={
                      activeFeature >= index ? "white" : "rgba(255,255,255,0.4)"
                    }
                  />
                </Box>
              </motion.div>

              {/* Feature Content */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: feature.position === "left" ? -100 : 100,
                }}
                animate={{
                  opacity: activeFeature >= index ? 1 : 0.3,
                  x: 0,
                  scale: activeFeature >= index ? 1 : 0.95,
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  width: "45%",
                  marginLeft: feature.position === "left" ? 0 : "auto",
                  marginRight: feature.position === "right" ? 0 : "auto",
                }}
              >
                <Box
                  sx={{
                    background:
                      activeFeature >= index
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    borderRadius: 4,
                    p: 4,
                    border: `2px solid ${
                      activeFeature >= index
                        ? feature.color
                        : "rgba(255,255,255,0.1)"
                    }`,
                    boxShadow:
                      activeFeature >= index
                        ? `0 20px 60px ${feature.color}20`
                        : "none",
                    transition: "all 0.6s ease",
                    textAlign:
                      feature.align ||
                      (feature.position === "right" ? "right" : "left"),
                  }}
                >
                  {/* Feature Number */}
                  <Typography
                    variant="h6"
                    sx={{
                      color: feature.color,
                      fontWeight: 900,
                      mb: 2,
                      fontSize: "0.9rem",
                      opacity: activeFeature >= index ? 1 : 0.5,
                    }}
                  >
                    FEATURE {String(index + 1).padStart(2, "0")}
                  </Typography>

                  {/* Feature Title */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "white",
                      mb: 3,
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      opacity: activeFeature >= index ? 1 : 0.5,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  {/* Feature Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: "1.1rem",
                      opacity: activeFeature >= index ? 1 : 0.5,
                    }}
                  >
                    {feature.description}
                  </Typography>

                  {/* Detailed Description (shown only when active) */}
                  {activeFeature >= index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Box
                        sx={{
                          borderTop: `2px solid ${feature.color}`,
                          pt: 3,
                          mt: 3,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255,255,255,0.7)",
                            lineHeight: 1.7,
                            fontSize: "1rem",
                            fontStyle: "italic",
                          }}
                        >
                          {feature.detailedDescription}
                        </Typography>
                      </Box>
                    </motion.div>
                  )}

                  {/* Progress Indicator */}
                  <Box
                    sx={{
                      mt: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        feature.position === "right"
                          ? "flex-end"
                          : "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 4,
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: activeFeature >= index ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{
                          height: "100%",
                          background: feature.gradient,
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255,255,255,0.6)",
                        ml: feature.position === "left" ? 2 : 0,
                        mr: feature.position === "right" ? 2 : 0,
                        fontWeight: 600,
                      }}
                    >
                      {activeFeature >= index ? "UNLOCKED" : "LOCKED"}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Completion Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: activeFeature >= features.length - 1 ? 1 : 0,
            y: activeFeature >= features.length - 1 ? 0 : 50,
          }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ textAlign: "center", marginTop: 100 }}
        >
          <Box
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
              borderRadius: 4,
              p: 6,
              boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: 700,
                mb: 2,
              }}
            >
              🎉 All Features Unlocked!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "1.1rem",
              }}
            >
              Ready to see these features in action?
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Features;
