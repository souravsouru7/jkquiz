import React, { useState } from 'react';
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
  Grid
} from '@mui/material';
import { quizData, calculateGrade } from '../data/quizData';

const Quiz = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
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

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  if (showScore) {
    const grade = calculateGrade(score, quizData.length);
    return (
      <Container maxWidth="sm">
        <Fade in timeout={500}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 2, sm: 4 }, 
              mt: 4, 
              textAlign: 'center',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
            }}
          >
            <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Quiz Completed! 🎉
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary' }}>
              Your Score: {score} out of {quizData.length}
            </Typography>
            <Typography 
              variant="h4" 
              color="secondary" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Grade: {grade}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleRestart}
              sx={{ 
                mt: 3,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Try Again
            </Button>
          </Paper>
        </Fade>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Fade in timeout={500}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 2, sm: 4 }, 
            mt: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            align="center" 
            color="primary"
            sx={{ 
              fontWeight: 'bold',
              mb: 3
            }}
          >
            JK Quiz
          </Typography>
          
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              mb: 3,
              backgroundColor: 'rgba(33, 150, 243, 0.1)',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
              }
            }}
          />

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" color="text.secondary">
              Question {currentQuestion + 1} of {quizData.length}
            </Typography>
          </Box>

          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              mb: 3,
              fontWeight: 500,
              color: 'text.primary'
            }}
          >
            {quizData[currentQuestion].question}
          </Typography>

          <RadioGroup
            value={selectedAnswer}
            onChange={handleAnswerSelect}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              {quizData[currentQuestion].options.map((option, index) => (
                <Grid item xs={12} key={index}>
                  <Card 
                    sx={{ 
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      border: selectedAnswer === index ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
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
                        sx={{ 
                          width: '100%',
                          m: 0,
                          '& .MuiFormControlLabel-label': {
                            fontSize: '1rem',
                            color: 'text.primary'
                          }
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>

          <Box sx={{ 
            mt: 4, 
            display: 'flex', 
            justifyContent: 'flex-end',
            gap: 2
          }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={selectedAnswer === null}
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Paper>
      </Fade>
    </Container>
  );
};

export default Quiz; 