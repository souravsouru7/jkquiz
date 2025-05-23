import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper
} from '@mui/material';
import { QuizContext } from '../context/QuizContext';
import { quizData } from '../data/questions';

const Results = () => {
  const navigate = useNavigate();
  const { currentLevel, score, setCurrentLevel, setScore, setTimeRemaining, setLifelines } = useContext(QuizContext);
  
  const getPassingScore = () => {
    switch(currentLevel) {
      case 'easy': return 6;
      case 'intermediate': return 7;
      case 'advanced': return 6;
      default: return 0;
    }
  };

  const passed = score >= getPassingScore();

  const handleNextLevel = () => {
    if (currentLevel === 'easy') {
      setCurrentLevel('intermediate');
    } else if (currentLevel === 'intermediate') {
      setCurrentLevel('advanced');
    }
    setScore(0);
    setTimeRemaining(240);
    setLifelines({ showAnswer: true, removeTwoWrong: true });
    navigate('/quiz');
  };

  return (
    <Box sx={{ 
      maxWidth: 800, 
      margin: '0 auto',
      px: { xs: 2, sm: 0 }
    }}>
      <Card sx={{ mb: { xs: 2, sm: 3 } }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography variant="h4" gutterBottom sx={{
            fontSize: { xs: '1.5rem', sm: '2.125rem' }
          }}>
            Quiz Results - {currentLevel.toUpperCase()}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Score: {score}/12
          </Typography>
          <Typography variant="h6" color={passed ? 'success.main' : 'error.main'} gutterBottom>
            Status: {passed ? 'Passed' : 'Failed'}
          </Typography>
          
          {passed && currentLevel !== 'advanced' ? (
            <Button variant="contained" color="primary" onClick={handleNextLevel}>
              Proceed to {currentLevel === 'easy' ? 'Intermediate' : 'Advanced'} Level
            </Button>
          ) : (
            <Typography variant="h6" color="error" sx={{ mt: 2 }}>
              {!passed 
                ? "Sorry, you failed this level. Game Over." 
                : "Congratulations! You've completed all levels!"}
            </Typography>
          )}
          
          {!passed && (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              To try again, you'll need to start a new game session.
            </Typography>
          )}
        </CardContent>
      </Card>

      <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h5" gutterBottom>
          Answer Review
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          {quizData[currentLevel].map((question, index) => (
            <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
              <ListItemText
                primary={`Q${index + 1}: ${question.question}`}
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <Typography color="textSecondary" gutterBottom>
                      Options:
                    </Typography>
                    {question.options.map((option, optIndex) => (
                      <Typography 
                        key={optIndex}
                        sx={{
                          color: optIndex === question.correct ? 'success.main' : 'text.primary',
                          fontWeight: optIndex === question.correct ? 'bold' : 'normal'
                        }}
                      >
                        {optIndex === question.correct ? '✓ ' : '   '}
                        {option}
                      </Typography>
                    ))}
                  </Box>
                }
              />
              <Divider sx={{ width: '100%', mt: 2 }} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Results;
