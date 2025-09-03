import React from 'react';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Clock, Zap, Crown, CheckCircle } from 'lucide-react';

const Home = () => {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { Icon: Crown, delay: 0, position: { top: '15%', left: '10%' } },
    { Icon: TrendingUp, delay: 0.2, position: { top: '25%', right: '15%' } },
    { Icon: Users, delay: 0.4, position: { top: '60%', left: '8%' } },
    { Icon: CheckCircle, delay: 0.6, position: { top: '70%', right: '12%' } },
    { Icon: Zap, delay: 0.8, position: { top: '40%', left: '5%' } },
    { Icon: Clock, delay: 1, position: { top: '50%', right: '8%' } }
  ];

  const premiumFeatures = [
    "✨ Zero WhatsApp Chaos",
    "🚀 Instant Approvals", 
    "📊 Smart Analytics"
  ];

  // Creative connecting lines data
  const connectingLines = [
    { from: { x: '20%', y: '30%' }, to: { x: '80%', y: '25%' }, delay: 0 },
    { from: { x: '15%', y: '70%' }, to: { x: '85%', y: '75%' }, delay: 1 },
    { from: { x: '10%', y: '15%' }, to: { x: '15%', y: '60%' }, delay: 2 },
    { from: { x: '85%', y: '15%' }, to: { x: '88%', y: '70%' }, delay: 3 },
    { from: { x: '30%', y: '20%' }, to: { x: '70%', y: '80%' }, delay: 4 },
    { from: { x: '70%', y: '20%' }, to: { x: '30%', y: '75%' }, delay: 5 }
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `
          radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0f0c29 0%, #24243e 35%, #302b63 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
        px: 2,
        textAlign: 'center'
      }}
    >
      {/* Creative Connecting Lines */}
      {connectingLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 4,
            delay: line.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <svg
            width="100%"
            height="100%"
            style={{
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <motion.line
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeOpacity="0.6"
              strokeDasharray="5,5"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f093fb" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffecd2" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      {/* Premium Floating Elements */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            delay, 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            ...position,
            zIndex: 2
          }}
        >
          <Box
            sx={{
              p: 2,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <Icon size={28} color="rgba(255,255,255,0.6)" />
          </Box>
        </motion.div>
      ))}

      {/* Additional Creative Network Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: 3,
            height: 3,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea, #f093fb)',
            zIndex: 1,
            boxShadow: '0 0 10px rgba(102, 126, 234, 0.5)'
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        {/* Simple Product Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip 
            label="🚀 Modern Leave Management Solution" 
            sx={{ 
              mb: 4,
              px: 3,
              py: 1,
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.9rem',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }} 
          />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 900,
              mb: 3,
              fontSize: { xs: '2.8rem', md: '4.5rem', lg: '5.5rem' },
              lineHeight: 1.1,
              textShadow: '0 10px 40px rgba(0,0,0,0.3)'
            }}
          >
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block'
              }}
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Leave Management
            </motion.span>
            
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
                marginTop: '0.2rem'
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Reimagined
            </motion.span>
          </Typography>
        </motion.div>

        {/* Catchy Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'rgba(255,255,255,0.95)',
              mb: 2,
              lineHeight: 1.4,
              fontSize: { xs: '1.3rem', md: '1.8rem', lg: '2rem' },
              fontWeight: 400,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Where <span style={{ color: '#ffecd2', fontWeight: 600 }}>CEO Vision</span> Meets 
            <span style={{ color: '#f093fb', fontWeight: 600 }}> Effortless Execution</span>
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              mb: 6,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 300,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Transform chaotic WhatsApp groups and endless emails into a 
            <span style={{ color: '#667eea', fontWeight: 600 }}> streamlined, beautiful experience</span> {" "}
            designed for modern teams.
          </Typography>
        </motion.div>

        {/* Premium Features Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ marginBottom: 48 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Chip
                  label={feature}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(15px)',
                    color: '#fff',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    border: '1px solid rgba(255,255,255,0.2)',
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>
        
        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{ marginBottom: 80 }}
        >
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={scrollToFeatures}
                startIcon={<Sparkles size={20} />}
                sx={{
                  px: 6,
                  py: 2.5,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)',
                  border: 'none',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5a6fd8 0%, #6b4190 100%)',
                    boxShadow: '0 20px 50px rgba(102, 126, 234, 0.6)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.4s ease'
                }}
              >
                Explore Features
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 2.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 4,
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: 'rgba(255,255,255,0.9)',
                  textTransform: 'none',
                  backdropFilter: 'blur(20px)',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.6)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                See How It Works
              </Button> */}
            </motion.div>
          </Box>
        </motion.div>

        {/* Simple Version Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.9rem',
              fontWeight: 300
            }}
          >
            {/* Built for the modern workplace */}
          </Typography>
        </motion.div>
      </Container>

      {/* Premium Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: -40,
          left: '49%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          marginBottom:50
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 48,
            border: '2px solid rgba(255,255,255,0.4)',
            borderRadius: 16,
            position: 'relative',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255,255,255,0.05)'
          }}
        >
          <motion.div
            animate={{ y: [8, 20, 8] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: 4,
              height: 12,
              background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
              borderRadius: 2,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: 8,
              boxShadow: '0 0 10px rgba(102, 126, 234, 0.5)'
            }}
          />
        </Box>
        
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.6)',
            display: 'block',
            textAlign: 'center',
            mt: 1,
            fontSize: '0.7rem',
            fontWeight: 500
          }}
        >
          Scroll to explore
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Home;
