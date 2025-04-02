import React, { useState, useEffect } from 'react';
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
  Card,
  CardContent,
  Grid,
  Zoom,
  Slide,
  Alert
} from '@mui/material';
import { teluguMovieQuizData, calculateGrade } from '../data/teluguMovieQuizData';

const TeluguMovieQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(12 * 60); // 12 minutes in seconds
  const theme = useTheme();

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showScore) {
      setShowScore(true);
    }
  }, [timeLeft, showScore]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleNext = () => {
    if (selectedAnswer === teluguMovieQuizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < teluguMovieQuizData.length - 1) {
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
    setTimeLeft(12 * 60);
  };

  const progress = ((currentQuestion + 1) / teluguMovieQuizData.length) * 100;

  if (showScore) {
    return (
      <Container maxWidth="md">
        <Zoom in timeout={800}>
          <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom color="primary">
              Quiz Completed! 🎬
            </Typography>
            <Typography variant="h5" gutterBottom>
              Time Taken: {formatTime(720 - timeLeft)}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Your Score: {score} out of {teluguMovieQuizData.length}
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              Grade: {calculateGrade(score, teluguMovieQuizData.length)}
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" color="primary">
              Telugu Movie Quiz
            </Typography>
            <Box>
              <Typography variant="h6" color={timeLeft < 60 ? "error" : "primary"}>
                Time Left: {formatTime(timeLeft)}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Questions Left: {teluguMovieQuizData.length - currentQuestion - 1}
              </Typography>
            </Box>
          </Box>

          {timeLeft <= 60 && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              Less than a minute remaining!
            </Alert>
          )}
          
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ height: 8, borderRadius: 4, mb: 3 }}
          />

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            {teluguMovieQuizData[currentQuestion].question}
          </Typography>

          <RadioGroup
            value={selectedAnswer}
            onChange={handleAnswerSelect}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              {teluguMovieQuizData[currentQuestion].options.map((option, index) => (
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

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              Question {currentQuestion + 1} of {teluguMovieQuizData.length}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === teluguMovieQuizData.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Paper>
      </Slide>
    </Container>
  );
};

export default TeluguMovieQuiz; 