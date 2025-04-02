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
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip
} from '@mui/material';
import { teluguMovieLevelsQuizData } from '../data/teluguMovieLevelsQuizData';

const REQUIRED_SCORE = 11;
const TIME_LIMIT = 180; // 3 minutes in seconds
const LEVELS = ['easy', 'intermediate', 'advanced'];

const TeluguMovieLevelsQuiz = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [showLevelDialog, setShowLevelDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (timeLeft > 0 && !showScore && !showLevelDialog) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showScore && !showLevelDialog) {
      handleLevelComplete();
    }
  }, [timeLeft, showScore, showLevelDialog]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleNext = () => {
    const currentLevelQuestions = teluguMovieLevelsQuizData[LEVELS[currentLevel]];
    
    if (selectedAnswer === currentLevelQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < currentLevelQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      handleLevelComplete();
    }
  };

  const handleLevelComplete = () => {
    setShowLevelDialog(true);
    if (score >= REQUIRED_SCORE) {
      if (currentLevel < LEVELS.length - 1) {
        setDialogMessage(`Congratulations! You scored ${score}/12 and qualified for the next level!`);
      } else {
        setDialogMessage(`Congratulations! You've completed all levels with a final score of ${score}/12!`);
        setGameOver(true);
      }
    } else {
      setDialogMessage(`You scored ${score}/12. You need at least ${REQUIRED_SCORE} points to advance. Try again!`);
      setGameOver(true);
    }
  };

  const startNextLevel = () => {
    if (score >= REQUIRED_SCORE && currentLevel < LEVELS.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setTimeLeft(TIME_LIMIT);
      setShowLevelDialog(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(TIME_LIMIT);
    setShowLevelDialog(false);
    setGameOver(false);
  };

  if (showScore) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Game Over!
          </Typography>
          <Typography variant="h5" gutterBottom>
            Level Reached: {LEVELS[currentLevel].toUpperCase()}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Final Score: {score}/12
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
      </Container>
    );
  }

  const currentLevelQuestions = teluguMovieLevelsQuizData[LEVELS[currentLevel]];

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" color="primary">
            Telugu Movie Quiz - {LEVELS[currentLevel].toUpperCase()} Level
          </Typography>
          <Box>
            <Chip 
              label={`Time Left: ${formatTime(timeLeft)}`}
              color={timeLeft < 30 ? "error" : "primary"}
              sx={{ mb: 1 }}
            />
            <Typography variant="subtitle1" color="text.secondary">
              Score needed: {REQUIRED_SCORE}/12
            </Typography>
          </Box>
        </Box>

        {timeLeft <= 30 && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            Less than 30 seconds remaining!
          </Alert>
        )}
        
        <LinearProgress 
          variant="determinate" 
          value={(currentQuestion + 1) / currentLevelQuestions.length * 100} 
          sx={{ height: 8, borderRadius: 4, mb: 3 }}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          {currentLevelQuestions[currentQuestion].question}
        </Typography>

        <RadioGroup
          value={selectedAnswer}
          onChange={handleAnswerSelect}
          sx={{ mt: 2 }}
        >
          <Grid container spacing={2}>
            {currentLevelQuestions[currentQuestion].options.map((option, index) => (
              <Grid item xs={12} key={index}>
                <Card 
                  sx={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    border: selectedAnswer === index ? `2px solid ${theme.palette.primary.main}` : 'none',
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
            Question {currentQuestion + 1} of {currentLevelQuestions.length}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === currentLevelQuestions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>

        <Dialog open={showLevelDialog} onClose={() => gameOver ? setShowScore(true) : startNextLevel()}>
          <DialogTitle>Level {LEVELS[currentLevel]} Complete!</DialogTitle>
          <DialogContent>
            <Typography>{dialogMessage}</Typography>
          </DialogContent>
          <DialogActions>
            {gameOver ? (
              <Button onClick={() => setShowScore(true)} color="primary">
                See Final Score
              </Button>
            ) : (
              <Button onClick={startNextLevel} color="primary">
                Start Next Level
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </Paper>
    </Container>
  );
};

export default TeluguMovieLevelsQuiz; 