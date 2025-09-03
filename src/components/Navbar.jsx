import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Features', id: 'features' },
  { name: 'How It Works', id: 'howitworks' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: 'center', p: 2 }}>
      <Typography 
        variant="h5" 
        sx={{ 
          color: 'primary.main', 
          fontWeight: 'bold', 
          mb: 3, 
          userSelect: 'none',
          letterSpacing: 2,
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        NoraxCEO
      </Typography>
      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem disablePadding>
              <ListItemText
                primary={item.name}
                onClick={() => scrollToSection(item.id)}
                sx={{ 
                  textAlign: 'center', 
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  py: 1,
                  '&:hover': { color: 'primary.main', transition: 'color 0.3s ease' }
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
          color: scrolled ? theme.palette.text.primary : 'white',
          boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.4s ease',
          px: { xs: 2, md: 4 }
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
            onClick={() => scrollToSection('home')}
          >
            <Sparkles size={28} color={scrolled ? theme.palette.primary.main : 'white'} style={{ marginRight: 8 }} />
            <Typography
              variant="h5"
              sx={{ 
                fontWeight: '900',
                fontFamily: "'Poppins', sans-serif",
                background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.3rem', md: '1.6rem' }
              }}
            >
              NoraxCEO
            </Typography>
          </motion.div>

          {isMobile ? (
            <IconButton
              color={scrolled ? 'primary' : 'inherit'}
              edge="start"
              aria-label="menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ fontSize: 28 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  style={{
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    color: scrolled ? theme.palette.text.primary : 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    padding: '6px 12px',
                    borderRadius: 8,
                    transition: 'all 0.3s ease',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = scrolled ? '#e3f2fd' : 'rgba(255,255,255,0.15)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {item.name}
                </motion.button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: '80%',
            maxWidth: 260,
            background: theme.palette.background.default,
            p: 2,
          }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
