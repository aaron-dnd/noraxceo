import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Code2,
  Heart,
  Target,
  Users,
  TrendingUp,
  Sparkles,
  Rocket
} from 'lucide-react';

const techStack = [
  { name: 'React', color: '#61dafb', description: 'Dynamic UIs with declarative components' },
  { name: 'Node.js', color: '#339933', description: 'Scalable server-side JavaScript' },
  { name: 'Express', color: '#000000', description: 'Fast, minimal REST API framework' },
  { name: 'MongoDB Atlas', color: '#47a248', description: 'Flexible, cloud-hosted database' }
];

const values = [
  { icon: Heart, title: 'Passion-Driven', description: 'Crafting every feature with empathy and dedication' },
  { icon: Target, title: 'Purpose-Built', description: 'Focused on solving real-world leave management challenges' },
  { icon: Users, title: 'People-First', description: 'Putting user experience and clarity at the core' },
  { icon: TrendingUp, title: 'Growth-Oriented', description: 'Designed to scale with your team’s evolving needs' }
];

const stats = [
  { number: '21', label: 'Annual Leave Days', color: '#ff6b6b' },
  { number: '10', label: 'Sick Leave Days', color: '#4ecdc4' },
  { number: '7', label: 'Casual Leave Days', color: '#45b7d1' },
  { number: '38', label: 'Total Leave Days', color: '#fcbf49' }
];

const About = () => (
  <Box
    id="about"
    sx={{
      position: 'relative',
      py: 20,
      background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
      overflow: 'hidden'
    }}
  >
    {/* Floating background gradients */}
    <Box
      sx={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '60vh',
        height: '60vh',
        background: 'radial-gradient(circle, rgba(102,126,234,0.5), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        zIndex: 0
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '70vh',
        height: '70vh',
        background: 'radial-gradient(circle, rgba(118,75,162,0.5), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(120px)',
        zIndex: 0
      }}
    />

    {/* Particle sparkle effect */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0], scale: [0, 1, 0] }}
        transition={{
          duration: 6 + Math.random() * 5,
          delay: Math.random() * 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'white',
          boxShadow: '0 0 8px white'
        }}
      />
    ))}

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={42} color="#facc15" />
          </motion.div>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mt: 2,
              background: 'linear-gradient(90deg,#facc15,#f472b6,#60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Our Journey
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.85)', mt: 1, maxWidth: 700, mx: 'auto' }}>
            From day one, NoraxCEO set out to solve the chaos of manual leave tracking with clarity, efficiency, and empathy.
          </Typography>
        </Box>
      </motion.div>

      {/* Mission Card */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <Card
          sx={{
            mb: 12,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 4,
            boxShadow: '0 8px 40px rgba(0,0,0,0.25)'
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Avatar sx={{ bgcolor: 'rgba(250,204,21,0.15)', mr: 2 }}>
                <Rocket color="#facc15" />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
                Our Mission
              </Typography>
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.95)', mb: 2, lineHeight: 1.8 }}>
              Traditional leave management was broken—endless messages, lost requests, frustrated teams. We envisioned a seamless system where approvals are clear and data drives decisions.
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontStyle: 'italic' }}>
              “We don’t just automate processes; we humanize them.”
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tech Stack */}
      <Box textAlign="center" mb={12}>
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 4 }}>
          <Code2 style={{ verticalAlign: 'middle', marginRight: 8 }} /> Built With
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {techStack.map((tech, i) => (
            <Grid item key={tech.name}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: i * 0.15 }}>
                <Chip
                  label={
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{tech.name}</Typography>
                      <Typography variant="caption">{tech.description}</Typography>
                    </Box>
                  }
                  sx={{
                    border: `2px solid ${tech.color}`,
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    py: 2,
                    px: 2.5,
                    borderRadius: 3,
                    fontSize: '0.85rem'
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Core Values */}
      <Grid container spacing={5} sx={{ mb: 12 }}>
        {values.map((v, i) => (
          <Grid item xs={12} md={6} key={v.title}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.15 }}>
              <Card
                sx={{
                  p: 4,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 3,
                  height: '100%'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.1)', mr: 2 }}>
                    <v.icon color="#60a5fa" />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>{v.title}</Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                  {v.description}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Stats */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
        <Card
          sx={{
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 4,
            boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              background: 'linear-gradient(90deg,#f472b6,#facc15,#4ade80)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Leave Allocation Breakdown
          </Typography>
          <Grid container spacing={4}>
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: i * 0.15 + 0.6 }}>
                  <Typography variant="h3" sx={{ color: stat.color, fontWeight: 'bold', mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                    {stat.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Card>
      </motion.div>
    </Container>
  </Box>
);

export default About;
