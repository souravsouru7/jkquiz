import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Grid,
  LinearProgress,
  Box,
  Stack,
  Chip
} from '@mui/material';
import { QuizContext } from '../context/QuizContext';
import { quizData } from '../data/questions';

const Quiz = () => {
  const navigate = useNavigate();
  const { 
    currentLevel, 
    setCurrentLevel,
    score, 
    setScore, 
    lifelines, 
    setLifelines,
    timeRemaining, 
    setTimeRemaining 
  } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activeOptions, setActiveOptions] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          navigate('/results');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, setTimeRemaining]);

  const handleAnswer = (selectedIndex) => {
    const correct = quizData[currentLevel][currentQuestion].correct === selectedIndex;
    if (correct) setScore(score + 1);

    if (currentQuestion === quizData[currentLevel].length - 1) {
      navigate('/results');
    } else {
      setCurrentQuestion(prev => prev + 1);
      setActiveOptions([0, 1, 2, 3]);
    }
  };

  const handleLifeline = (type) => {
    if (!lifelines[type]) return;

    if (type === 'showAnswer') {
      const correctAnswer = quizData[currentLevel][currentQuestion].correct;
      setActiveOptions([correctAnswer]);
    } else if (type === 'removeTwoWrong') {
      const correctAnswer = quizData[currentLevel][currentQuestion].correct;
      const wrongOptions = [0, 1, 2, 3].filter(index => index !== correctAnswer);
      const remainingWrong = wrongOptions.slice(0, 1);
      setActiveOptions([correctAnswer, ...remainingWrong]);
    }
    setLifelines({ ...lifelines, [type]: false });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const currentQuizData = quizData[currentLevel]?.[currentQuestion] || {
    question: "Loading...",
    options: [],
    category: "",
    correct: 0
  };

  if (!quizData[currentLevel] || currentQuestion >= quizData[currentLevel].length) {
    navigate('/results');
    return null;
  }

  return (
    <Card sx={{ 
      maxWidth: 800, 
      margin: '0 auto',
      background: 'linear-gradient(to right bottom, #FFFFFF 50%, #f5f5f5 50%)',
      borderRadius: { xs: 2, sm: 4 },
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      mx: { xs: 2, sm: 'auto' }
    }}>
      <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
        <Stack spacing={{ xs: 2, sm: 3 }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 0 },
            justifyContent: 'space-between', 
            alignItems: { xs: 'stretch', sm: 'center' },
            bgcolor: 'background.paper',
            p: { xs: 1.5, sm: 2 },
            borderRadius: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <Typography variant="h5" sx={{ 
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              Level: {currentLevel.toUpperCase()}
            </Typography>
            <Typography variant="h6" sx={{
              color: timeRemaining < 60 ? 'error.main' : 'primary.main',
              animation: timeRemaining < 60 ? 'pulse 1s infinite' : 'none',
              '@keyframes pulse': {
                '0%': { opacity: 1 },
                '50%': { opacity: 0.5 },
                '100%': { opacity: 1 },
              }
            }}>
              Time: {formatTime(timeRemaining)}
            </Typography>
          </Box>

          <LinearProgress 
            variant="determinate" 
            value={(currentQuestion / quizData[currentLevel].length) * 100} 
            sx={{ height: 10, borderRadius: 5 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography>Question {currentQuestion + 1}/{quizData[currentLevel].length}</Typography>
            <Typography>Score: {score}</Typography>
          </Box>

          <Typography variant="h5" gutterBottom sx={{
            bgcolor: 'background.paper',
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            fontWeight: 500,
            fontSize: { xs: '1.1rem', sm: '1.5rem' }
          }}>
            {currentQuizData.question}
          </Typography>

          <Grid container spacing={{ xs: 1, sm: 2 }}>
            {currentQuizData.options.map((option, index) => (
              activeOptions.includes(index) && (
                <Grid item xs={12} sm={6} key={index}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleAnswer(index)}
                    sx={{
                      minHeight: { xs: '50px', sm: '60px' },
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      padding: { xs: 1, sm: 2 },
                      background: 'linear-gradient(45deg, #3f51b5 30%, #5c6bc0 90%)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    {option}
                  </Button>
                </Grid>
              )
            ))}
          </Grid>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center', 
            gap: { xs: 1, sm: 2 },
            mt: 2
          }}>
            <Button
              variant="outlined"
              disabled={!lifelines.showAnswer}
              onClick={() => handleLifeline('showAnswer')}
            >
              Show Answer
            </Button>
            <Button
              variant="outlined"
              disabled={!lifelines.removeTwoWrong}
              onClick={() => handleLifeline('removeTwoWrong')}
            >
              50:50
            </Button>
          </Box>

          <Chip 
            label={`Category: ${currentQuizData.category}`}
            color="primary"
            sx={{ alignSelf: 'flex-start' }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Quiz;
