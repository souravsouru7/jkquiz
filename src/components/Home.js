import React from 'react';
import { Typography, Box, Card, CardContent, Grid, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuizIcon from '@mui/icons-material/Quiz';
import TimerIcon from '@mui/icons-material/Timer';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Home = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Welcome to the Multi-Level Quiz Challenge!
        </Typography>
        <Typography variant="subtitle1" paragraph align="center">
          Test your knowledge with our multi-level quiz system featuring progressively challenging questions.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <QuizIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
                  <Typography variant="h6">Multi-Level Quiz</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Challenge yourself with our general knowledge quiz featuring three difficulty levels:
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Typography variant="body2" paragraph>
                    • <strong>Easy Level:</strong> Score at least 7/12 to advance
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • <strong>Intermediate Level:</strong> Score at least 6/12 to advance
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • <strong>Advanced Level:</strong> Score at least 5/12 to complete the quiz
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Each level features a 3-minute timer. Can you complete all three levels?
                </Typography>
                
                <Button 
                  component={Link}
                  to="/multi-level-quiz"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Start Multi-Level Quiz
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <MenuBookIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
                  <Typography variant="h6">Progressive Movies Quiz</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Test your knowledge of progressive Telugu cinema with thought-provoking questions about movies that address social issues and innovative storytelling.
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Typography variant="body2" paragraph>
                    • Explore social themes in cinema
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • Learn about groundbreaking directors and their work
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • Discover the evolution of progressive storytelling
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Perfect for film enthusiasts and those interested in socially relevant cinema.
                </Typography>
                
                <Button 
                  component={Link}
                  to="/progressive-movies"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Start Progressive Movies Quiz
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <EmojiEventsIcon color="primary" sx={{ mr: 1, fontSize: 24 }} />
          <Typography variant="h6">Quiz Features</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TimerIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">3-Minute Timer Per Level</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <QuizIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">View Answers After Each Level</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmojiEventsIcon color="action" sx={{ mr: 1 }} />
              <Typography variant="body2">Progressive Difficulty Levels</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home; 