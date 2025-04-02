import React from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Button, 
  RadioGroup, 
  FormControlLabel, 
  Radio,
  Box,
  LinearProgress,
  useTheme,
  useMediaQuery,
  Fade,
  Card,
  CardContent,
  Grid,
  Grow,
  Zoom,
  Slide,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { progressiveMoviesQuizData, calculateGrade } from '../data/progressiveMoviesQuizData';

const ProgressiveMoviesQuiz = () => {
  // Reuse the same quiz logic as the main Quiz component
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const theme = useTheme();

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleNext = () => {
    if (selectedAnswer === progressiveMoviesQuizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < progressiveMoviesQuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  const progress = ((currentQuestion + 1) / progressiveMoviesQuizData.length) * 100;

  if (showScore) {
    return (
      <Container maxWidth="md">
        <Zoom in timeout={800}>
          <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom color="primary">
              Quiz Completed! 🎥
            </Typography>
            <Typography variant="h5" gutterBottom>
              Your Score: {score} out of {progressiveMoviesQuizData.length}
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              Grade: {calculateGrade(score, progressiveMoviesQuizData.length)}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleRestart}
              sx={{ mt: 2 }}
            >
              Try Again
            </Button>
          </Paper>
        </Zoom>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Slide direction="up" in timeout={500}>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Progressive Movies Quiz (2000-2020)
          </Typography>
          
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ height: 8, borderRadius: 4, mb: 3 }}
          />

          <Typography variant="subtitle1" gutterBottom>
            Question {currentQuestion + 1} of {progressiveMoviesQuizData.length}
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            {progressiveMoviesQuizData[currentQuestion].question}
          </Typography>

          <RadioGroup
            value={selectedAnswer}
            onChange={handleAnswerSelect}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              {progressiveMoviesQuizData[currentQuestion].options.map((option, index) => (
                <Grid item xs={12} key={index}>
                  <Card 
                    sx={{ 
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 3,
                      }
                    }}
                    onClick={() => setSelectedAnswer(index)}
                  >
                    <CardContent>
                      <FormControlLabel
                        value={index}
                        control={<Radio />}
                        label={option}
                        sx={{ width: '100%' }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === progressiveMoviesQuizData.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Paper>
      </Slide>
    </Container>
  );
};

export default ProgressiveMoviesQuiz; 