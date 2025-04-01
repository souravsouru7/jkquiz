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
import { quizData, calculateGrade } from '../data/quizData';

const getQuote = (grade) => {
  const quotes = {
    'A': [
      "Outstanding work! You're a true expert in interior design tools!",
      "Perfect score! Your knowledge of design software is exceptional!",
      "Excellent performance! You're ready to tackle any design challenge!"
    ],
    'B': [
      "Great job! You have a solid understanding of design tools!",
      "Well done! Your knowledge of interior design software is impressive!",
      "Strong performance! You're on the right track to mastering these tools!"
    ],
    'C': [
      "Good effort! Keep learning and practicing with these tools!",
      "Not bad! With more practice, you'll improve your skills further!",
      "You're getting there! Keep exploring different design software!"
    ],
    'D': [
      "Keep practicing! Every attempt brings you closer to mastery!",
      "Don't give up! Learning design tools takes time and dedication!",
      "You can do better! Review the answers and try again!"
    ],
    'F': [
      "Don't worry! Every expert was once a beginner!",
      "Keep learning! Practice makes perfect with design tools!",
      "Try again! Each attempt helps you learn and improve!"
    ]
  };
  const gradeQuotes = quotes[grade];
  return gradeQuotes[Math.floor(Math.random() * gradeQuotes.length)];
};

const Quiz = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentLevel, setCurrentLevel] = useState('beginner');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [failed, setFailed] = useState(false);

  const levels = {
    beginner: { title: 'Beginner Level', next: 'intermediate', minScore: 9 },
    intermediate: { title: 'Intermediate Level', next: 'advanced', minScore: 9 },
    advanced: { title: 'Advanced Level', next: null, minScore: 9 }
  };

  const currentQuestions = quizData[currentLevel];
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  useEffect(() => {
    if (showScore) {
      const passed = score >= levels[currentLevel].minScore;
      if (!passed) {
        setFailed(true);
      }
    }
  }, [showScore, score, currentLevel, levels]);

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleNext = () => {
    if (selectedAnswer === currentQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentLevel('beginner');
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowAnswers(false);
    setUserAnswers([]);
    setFailed(false);
  };

  const handleNextLevel = () => {
    setCurrentLevel(levels[currentLevel].next);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowAnswers(false);
    setUserAnswers([]);
  };

  if (showScore) {
    const grade = calculateGrade(score, currentQuestions.length);
    const quote = getQuote(grade);
    const passed = score >= levels[currentLevel].minScore;

    return (
      <Container maxWidth="md">
        <Zoom in timeout={800}>
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
              {levels[currentLevel].title} Completed! 🎉
            </Typography>
            <Grow in timeout={1000}>
              <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary' }}>
                Your Score: {score} out of {currentQuestions.length}
              </Typography>
            </Grow>
            <Grow in timeout={1200}>
              <Typography 
                variant="h4" 
                color={passed ? "success.main" : "error.main"}
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {passed ? "Level Passed! 🎉" : "Level Failed 😢"}
              </Typography>
            </Grow>
            <Grow in timeout={1300}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mt: 2,
                  mb: 3,
                  color: 'text.primary',
                  fontStyle: 'italic',
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  pl: 2,
                  textAlign: 'left'
                }}
              >
                "{quote}"
              </Typography>
            </Grow>
            <Grow in timeout={1400}>
              <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                {passed ? (
                  levels[currentLevel].next ? (
                    <Button 
                      variant="contained" 
                      color="success" 
                      onClick={handleNextLevel}
                      sx={{ 
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem'
                      }}
                    >
                      Next Level
                    </Button>
                  ) : (
                    <Button 
                      variant="contained" 
                      color="success" 
                      onClick={handleRestart}
                      sx={{ 
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem'
                      }}
                    >
                      Start Over
                    </Button>
                  )
                ) : (
                  <Button 
                    variant="contained" 
                    color="error" 
                    onClick={handleRestart}
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem'
                    }}
                  >
                    Try Again
                  </Button>
                )}
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={() => setShowAnswers(true)}
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  View Answers
                </Button>
              </Box>
            </Grow>

            {showAnswers && (
              <Grow in timeout={1600}>
                <Box sx={{ mt: 4, textAlign: 'left' }}>
                  <Typography variant="h5" gutterBottom color="primary">
                    Detailed Answers
                  </Typography>
                  <List>
                    {currentQuestions.map((question, index) => (
                      <React.Fragment key={index}>
                        <ListItem>
                          <ListItemText
                            primary={
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Question {index + 1}: {question.question}
                              </Typography>
                            }
                            secondary={
                              <Box sx={{ mt: 1 }}>
                                <Typography variant="body2" color="text.secondary">
                                  Your Answer: {question.options[userAnswers[index]]}
                                </Typography>
                                <Typography 
                                  variant="body2" 
                                  color={userAnswers[index] === question.correctAnswer ? 'success.main' : 'error.main'}
                                  sx={{ mt: 0.5 }}
                                >
                                  Correct Answer: {question.options[question.correctAnswer]}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                                  {question.explanation}
                                </Typography>
                              </Box>
                            }
                          />
                        </ListItem>
                        {index < currentQuestions.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              </Grow>
            )}
          </Paper>
        </Zoom>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Slide direction="up" in timeout={500}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 2, sm: 4 }, 
            mt: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
          }}
        >
          <Zoom in timeout={800}>
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
              {levels[currentLevel].title}
            </Typography>
          </Zoom>
          
          <Grow in timeout={1000}>
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
          </Grow>

          <Fade in timeout={1200}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" color="text.secondary">
                Question {currentQuestion + 1} of {currentQuestions.length}
              </Typography>
            </Box>
          </Fade>

          <Grow in timeout={1400}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                mb: 3,
                fontWeight: 500,
                color: 'text.primary'
              }}
            >
              {currentQuestions[currentQuestion].question}
            </Typography>
          </Grow>

          <RadioGroup
            value={selectedAnswer}
            onChange={handleAnswerSelect}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              {currentQuestions[currentQuestion].options.map((option, index) => (
                <Grid item xs={12} key={index}>
                  <Grow in timeout={1600 + index * 200}>
                    <Card 
                      sx={{ 
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in-out',
                        border: selectedAnswer === index ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                        transform: selectedAnswer === index ? 'scale(1.02)' : 'scale(1)',
                        '&:hover': {
                          transform: 'translateY(-2px) scale(1.01)',
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
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>

          <Fade in timeout={1800}>
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
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                {currentQuestion === currentQuestions.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </Fade>
        </Paper>
      </Slide>
    </Container>
  );
};

export default Quiz; 