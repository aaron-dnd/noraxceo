import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Container, Modal, IconButton } from "@mui/material";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const imageSteps = [
  { src: "assets/admin-console.png", title: "Admin Registration", description: "Register CEOs, managers, and employees in the console." },
  { src: "assets/employeeDashboard.png", title: "Dashboard Overview", description: "Get a bird's-eye view of leave balances and requests." },
  { src: "assets/empReg.png", title: "Employee Setup", description: "Assign employees to managers with a few clicks." },
  { src: "assets/Leave.png", title: "Leave Request Form", description: "Employees submit leave requests via a clean form." },
  { src: "assets/approval.png", title: "Approval Screen", description: "Managers approve or reject requests instantly." },
  { src: "assets/managerFeature.png", title: "Calendar View", description: "Visualize team leaves on an interactive calendar." },
  { src: "assets/reqdet.png", title: "Analytics Dashboard", description: "Track leave trends and generate reports." },
  { src: "assets/EditProf.png", title: "Profile Management", description: "Update profile, photo, emergency contacts." },
  // { src: "src/assets/team-overview.png", title: "Team Overview", description: "See all team members and their leave status." },
  { src: "assets/leaveHistory.png", title: "Leave History", description: "Review past leaves and approval history." },
  { src: "assets/mgrnot.png", title: "Notifications", description: "Receive real-time alerts for new requests." },
  // { src: "src/assets/report-generation.png", title: "Report Generation", description: "Export detailed leave reports with one click." },
  // { src: "src/assets/settings.png", title: "System Settings", description: "Configure leave policies, roles, and permissions." }
];

const treePositions = [
  { top: "1%", left: "40%" },
  { top: "10%", left: "15%" },
  { top: "10%", left: "66%" },
  { top: "39%", left: "1%" },
  { top: "39%", left: "29%" },
  { top: "39%", left: "52%" },
  { top: "39%", left: "80%" },
  { top: "69%", left: "6%" },
  { top: "69%", left: "40%" },
  { top: "69%", left: "76%" },
  { top: "59%", left: "60%" },
  { top: "59%", left: "80%" },
  { top: "75%", left: "40%" }
];

const treeBranches = [
  { from: { x: "50%", y: "5%" }, to: { x: "50%", y: "20%" } },
  { from: { x: "50%", y: "20%" }, to: { x: "25%", y: "20%" } },
  { from: { x: "50%", y: "20%" }, to: { x: "75%", y: "20%" } },
  { from: { x: "25%", y: "20%" }, to: { x: "15%", y: "35%" } },
  { from: { x: "25%", y: "20%" }, to: { x: "35%", y: "35%" } },
  { from: { x: "75%", y: "20%" }, to: { x: "65%", y: "35%" } },
  { from: { x: "75%", y: "20%" }, to: { x: "85%", y: "35%" } },
  { from: { x: "15%", y: "35%" }, to: { x: "10%", y: "55%" } },
  { from: { x: "35%", y: "35%" }, to: { x: "30%", y: "55%" } },
  { from: { x: "50%", y: "35%" }, to: { x: "50%", y: "55%" } },
  { from: { x: "65%", y: "35%" }, to: { x: "70%", y: "55%" } },
  { from: { x: "85%", y: "35%" }, to: { x: "90%", y: "55%" } },
  { from: { x: "50%", y: "55%" }, to: { x: "50%", y: "75%" } }
];

const HowItWorks = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const totalSteps = imageSteps.length;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange(v => {
      const idx = Math.min(Math.floor(v * totalSteps), totalSteps - 1);
      setActiveIndex(idx);
    });
  }, [scrollYProgress, totalSteps]);

  return (
    <Box
      id="howitworks"
      ref={sectionRef}
      sx={{
        position: "relative",
        py: 15,
        minHeight: "200vh",
        background: `
          radial-gradient(circle at 20% 20%, rgba(102,126,234,0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(240,147,251,0.1) 0%, transparent 50%),
          linear-gradient(135deg, #302b63 0%, #24243e 60%, #0f0c29 100%)
        `,
        overflow: "hidden"
      }}
    >
      {/* Tree Branch Lines */}
      {treeBranches.map((branch, i) => (
        <motion.div
          key={i}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: [0, 1], opacity: [0, 0.6] }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.1, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            pointerEvents: "none"
          }}
        >
          <svg width="100%" height="100%" style={{ position: "absolute" }}>
            <motion.line
              x1={branch.from.x}
              y1={branch.from.y}
              x2={branch.to.x}
              y2={branch.to.y}
              stroke="url(#treeGradient)"
              strokeWidth="3"
              strokeOpacity="0.8"
            />
            <defs>
              <linearGradient id="treeGradient">
                <stop offset="0%" stopColor="#ffecd2" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f093fb" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#667eea" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <Typography variant="h2" sx={{ color: "white", fontWeight: 900, mb: 4, fontSize: { xs: "2.5rem", md: "4rem" } }}>
            How It Works
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 600, mx: "auto", mb: 8, lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.2rem" } }}>
            Follow the workflow tree and click any card to view its image.
          </Typography>
        </motion.div>

        {/* Tree Cards */}
        <Box sx={{ position: "relative", height: "150vh" }}>
          {imageSteps.map((step, i) => {
            const pos = treePositions[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100 }}
                style={{
                  position: "absolute",
                  top: pos.top,
                  left: pos.left,
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                  zIndex: 3,
                  textAlign: "center"
                }}
                onClick={() => setSelectedStep(step)}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(240,147,251,0.3)",
                      "0 0 25px rgba(240,147,251,0.6)",
                      "0 0 10px rgba(240,147,251,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Box
                    sx={{
                      width: { xs: 200, md: 280 },
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(20px)",
                      borderRadius: 4,
                      p: 3,
                      border: "2px solid #f093fb",
                      textAlign: "center"
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#f093fb,#ffecd2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "0.9rem"
                      }}
                    >
                      {i + 1}
                    </Box>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 1, fontSize: "1rem" }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.4, mb: 2, fontSize: "0.85rem" }}>
                      {step.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>
                      <ZoomIn size={14} /><Typography sx={{ ml: 0.5 }}>Click to view</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </motion.div>
            );
          })}
        </Box>
      </Container>

      {/* Modal */}
     <AnimatePresence>
  {selectedStep && (
    <Modal
      open
      onClose={() => setSelectedStep(null)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 1, sm: 2 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "95vw", sm: "80vw", md: "60vw", lg: "50vw" },
            maxHeight: { xs: "80vh", md: "90vh" },
            background: "rgba(0,0,0,0.9)",
            borderRadius: 3,
            p: { xs: 1, sm: 2, md: 3 },
            border: "2px solid #f093fb",
            overflowY: "auto",
          }}
        >
          <IconButton
            onClick={() => setSelectedStep(null)}
            sx={{
              position: "absolute",
              top: { xs: 4, sm: 8 },
              right: { xs: 4, sm: 8 },
              color: "white",
              background: "rgba(0,0,0,0.5)",
              p: { xs: 0.5, sm: 1 },
              "&:hover": { background: "rgba(0,0,0,0.7)" },
            }}
          >
            <X size={18} />
          </IconButton>
          <Box
            component="img"
            src={selectedStep.src}
            alt={selectedStep.title}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              color: "white",
              textAlign: "center",
              fontWeight: 600,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            }}
          >
            {selectedStep.title}
          </Typography>
        </Box>
      </motion.div>
    </Modal>
  )}
</AnimatePresence>

    </Box>
  );
};

export default HowItWorks;
