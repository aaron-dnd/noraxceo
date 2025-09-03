import React from 'react';
import { Box, Typography, Container, Grid, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', color: '#333' },
    { icon: Twitter, href: '#', color: '#1da1f2' },
    { icon: Linkedin, href: '#', color: '#0077b5' },
    { icon: Mail, href: '#', color: '#ea4335' }
  ];

  const footerLinks = {
    'Product': ['Features', 'How It Works', 'Pricing', 'Security'],
    'Company': ['About Us', 'Careers', 'Blog', 'Press Kit'],
    'Support': ['Help Center', 'Contact Us', 'Status', 'API Docs'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white',
        pt: 8,
        pb: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2
                }}
              >
                NoraxCEO
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  mb: 4,
                  lineHeight: 1.8
                }}
              >
                Transforming leave management for the modern workplace. 
                Built with passion, designed for growth.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      href={social.href}
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        '&:hover': {
                          color: social.color,
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <social.icon size={20} />
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <Grid item xs={6} md={2} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: 'white'
                  }}
                >
                  {category}
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {links.map((link, linkIndex) => (
                    <motion.div
                      key={link}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          cursor: 'pointer',
                          '&:hover': {
                            color: '#667eea'
                          },
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {link}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              © 2025 NoraxCEO. Made with 
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} color="#ff6b6b" fill="#ff6b6b" />
              </motion.div>
              for modern teams
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Version 1.0.0 • Last updated: March 2025
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
