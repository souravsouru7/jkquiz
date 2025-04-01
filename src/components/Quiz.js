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
  Grid,
  Grow,
  Zoom,
  Slide,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { quizData, calculateGrade } from '../data/quizData';

const Quiz = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, selectedAnswer]);

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
    setShowAnswers(false);
    setUserAnswers([]);
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  if (showScore) {
    const grade = calculateGrade(score, quizData.length);
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
              Quiz Completed! 🎉
            </Typography>
            <Grow in timeout={1000}>
              <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary' }}>
                Your Score: {score} out of {quizData.length}
              </Typography>
            </Grow>
            <Grow in timeout={1200}>
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
            </Grow>
            <Grow in timeout={1400}>
              <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleRestart}
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  Try Again
                </Button>
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
                    {quizData.map((question, index) => (
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
                        {index < quizData.length - 1 && <Divider />}
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
              JK Quiz
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
                Question {currentQuestion + 1} of {quizData.length}
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
              {quizData[currentQuestion].question}
            </Typography>
          </Grow>

          <RadioGroup
            value={selectedAnswer}
            onChange={handleAnswerSelect}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              {quizData[currentQuestion].options.map((option, index) => (
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
                {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </Fade>
        </Paper>
      </Slide>
    </Container>
  );
};

export default Quiz; 