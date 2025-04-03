import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box, Container, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimerIcon from '@mui/icons-material/Timer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 4 }
      }}>
        <Paper elevation={6} sx={{ 
          p: { xs: 2, sm: 4 }, 
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          borderRadius: { xs: 2, sm: 4 },
          width: '100%',
          color: 'white'
        }}>
          <Typography variant="h2" align="center" gutterBottom sx={{ 
            fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Jk Quiz
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 4 }}>
            Challenge Your Knowledge
          </Typography>
        </Paper>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: 3,
          width: '100%'
        }}>
          {[
            { 
              icon: <SchoolIcon sx={{ fontSize: 40 }}/>, 
              level: 'Easy', 
              score: '8/12',
              color: '#4CAF50'
            },
            { 
              icon: <EmojiEventsIcon sx={{ fontSize: 40 }}/>, 
              level: 'Intermediate', 
              score: '7/12',
              color: '#FF9800'
            },
            { 
              icon: <TimerIcon sx={{ fontSize: 40 }}/>, 
              level: 'Advanced', 
              score: '6/12',
              color: '#F44336'
            }
          ].map((item) => (
            <Paper
              key={item.level}
              elevation={4}
              sx={{
                p: 3,
                textAlign: 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <Box sx={{ color: item.color }}>{item.icon}</Box>
              <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                {item.level}
              </Typography>
              <Typography variant="body1">
                Pass Score: {item.score}
              </Typography>
            </Paper>
          ))}
        </Box>

        <Button 
          variant="contained"
          size="large"
          onClick={() => navigate('/quiz')}
          sx={{
            mt: 4,
            py: 2,
            px: 6,
            fontSize: '1.2rem',
            borderRadius: 8,
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #FE8B8B 30%, #FF9E53 90%)',
              transform: 'scale(1.05)',
              transition: 'transform 0.2s'
            }
          }}
        >
          Start Your Journey
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
