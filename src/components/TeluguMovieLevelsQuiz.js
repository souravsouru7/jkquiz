import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Button, Card, CardContent, 
  RadioGroup, FormControlLabel, Radio, LinearProgress, 
  Dialog, DialogTitle, DialogContent, DialogContentText, 
  DialogActions, Grid, Paper, Alert, List, ListItem, ListItemText,
  Tooltip, IconButton, Divider, CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TimerIcon from '@mui/icons-material/Timer';
import { teluguMovieLevelsQuizData, levelPassingScores, getLevelAnswers } from '../data/teluguMovieLevelsQuizData';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FiftyFiftyIcon from '@mui/icons-material/Filter2';

const REQUIRED_SCORE = {
  easy: levelPassingScores.easy,
  intermediate: levelPassingScores.intermediate,
  advanced: levelPassingScores.advanced
};
const TIME_LIMIT = 6 * 60; // 6 minutes in seconds
const TOTAL_QUESTIONS = 12;

const ProgressContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  boxShadow: '0px 3px 15px rgba(0,0,0,0.1)',
  borderRadius: '12px',
}));

const TimerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const TimerText = styled(Typography)(({ theme, time }) => ({
  marginLeft: theme.spacing(1),
  fontWeight: 'bold',
  color: time <= 30 ? (time <= 10 ? 'red' : 'orange') : 'inherit',
}));

const LifelineButton = styled(Button)(({ theme, disabled }) => ({
  margin: theme.spacing(1),
  opacity: disabled ? 0.5 : 1,
  backgroundColor: disabled ? '#ccc' : theme.palette.primary.main,
  '&:hover': {
    backgroundColor: disabled ? '#ccc' : theme.palette.primary.dark,
  },
}));

// Helper function to get a random subset of questions
const getRandomQuestions = (questions, count) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const TeluguMovieLevelsQuiz = () => {
  const [level, setLevel] = useState('easy');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [timerActive, setTimerActive] = useState(true);
  const [showAnswers, setShowAnswers] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState(() => 
    getRandomQuestions(teluguMovieLevelsQuizData.easy, TOTAL_QUESTIONS)
  );
  const [showHint, setShowHint] = useState(false);
  const [remainingLifelines, setRemainingLifelines] = useState({
    showAnswer: true,
    removeOptions: true
  });
  const [removedOptions, setRemovedOptions] = useState([]);
  
  useEffect(() => {
    // When level changes, select a new set of random questions
    setSelectedQuestions(getRandomQuestions(teluguMovieLevelsQuizData[level], TOTAL_QUESTIONS));
  }, [level]);

  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !levelComplete) {
      handleLevelComplete();
    }
    
    return () => clearTimeout(timer);
  }, [timeLeft, timerActive, levelComplete]);

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    // Check if answer is correct
    const currentQuestionData = selectedQuestions[currentQuestion];
    if (parseInt(selectedOption) === currentQuestionData.correctAnswer) {
      setScore(score + 1);
    }
    
    setSelectedOption('');
    setShowHint(false);
    setRemovedOptions([]);
    
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleLevelComplete();
    }
  };

  const handleLevelComplete = () => {
    setTimerActive(false);
    setLevelComplete(true);
    
    // Create answers from selected questions
    const levelAnswers = selectedQuestions.map(question => ({
      id: question.id,
      question: question.question,
      correctAnswer: question.options[question.correctAnswer],
      explanation: question.explanation
    }));
    
    setAnswers(levelAnswers);
  };

  const handleNextLevel = () => {
    const currentLevel = level;
    const requiredScore = REQUIRED_SCORE[currentLevel];
    
    if (score >= requiredScore) {
      if (currentLevel === 'easy') {
        setLevel('intermediate');
      } else if (currentLevel === 'intermediate') {
        setLevel('advanced');
      } else {
        setQuizComplete(true);
        return;
      }
      
      // Reset for next level
      setCurrentQuestion(0);
      setScore(0);
      setTimeLeft(TIME_LIMIT);
      setLevelComplete(false);
      setTimerActive(true);
      setShowAnswers(false);
      setShowHint(false);
      setRemovedOptions([]);
      setRemainingLifelines({
        showAnswer: true,
        removeOptions: true
      });
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setLevel('easy');
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setQuizComplete(false);
    setLevelComplete(false);
    setTimeLeft(TIME_LIMIT);
    setTimerActive(true);
    setShowAnswers(false);
    setShowHint(false);
    setRemovedOptions([]);
    setRemainingLifelines({
      showAnswer: true,
      removeOptions: true
    });
    setSelectedQuestions(getRandomQuestions(teluguMovieLevelsQuizData.easy, TOTAL_QUESTIONS));
  };

  const toggleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleShowAnswer = () => {
    if (remainingLifelines.showAnswer) {
      setShowHint(true);
      setRemainingLifelines({...remainingLifelines, showAnswer: false});
    }
  };

  const handleRemoveOptions = () => {
    if (remainingLifelines.removeOptions) {
      const questionItem = selectedQuestions[currentQuestion];
      const correctAnswerIndex = questionItem.correctAnswer;
      
      // Generate all option indices except the correct one
      const incorrectIndices = [0, 1, 2, 3].filter(idx => idx !== correctAnswerIndex);
      
      // Randomly select two incorrect options to remove
      const shuffled = incorrectIndices.sort(() => 0.5 - Math.random());
      const toRemove = shuffled.slice(0, 2);
      
      setRemovedOptions(toRemove);
      setRemainingLifelines({...remainingLifelines, removeOptions: false});
    }
  };

  if (quizComplete) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Quiz Complete!
          </Typography>
          <Typography variant="h5" gutterBottom>
            You reached the {level} level with a score of {score}/{TOTAL_QUESTIONS}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {score >= REQUIRED_SCORE[level] 
              ? "Great job! You've successfully completed all levels!" 
              : `You needed a score of ${REQUIRED_SCORE[level]} to advance to the next level.`}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={restartQuiz}
            sx={{ mt: 3 }}
          >
            Start Again
          </Button>
        </Box>
      </Container>
    );
  }

  if (levelComplete) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom align="center">
            {level.charAt(0).toUpperCase() + level.slice(1)} Level Complete!
          </Typography>
          
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Your Score: {score}/{TOTAL_QUESTIONS}
            </Typography>
            <Typography variant="body1">
              {score >= REQUIRED_SCORE[level] 
                ? `Congratulations! You've scored enough to advance to the ${level === 'easy' ? 'intermediate' : level === 'intermediate' ? 'advanced' : 'final'} level.`
                : `You needed a score of ${REQUIRED_SCORE[level]} to advance to the next level.`}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Required to pass: {REQUIRED_SCORE[level]}/{TOTAL_QUESTIONS}
            </Typography>
          </Paper>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Button 
              variant="outlined" 
              onClick={toggleShowAnswers}
              color="secondary"
            >
              {showAnswers ? "Hide Answers" : "Show Answers"}
            </Button>
            
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleNextLevel}
            >
              {score >= REQUIRED_SCORE[level] 
                ? (level === 'advanced' ? "Finish Quiz" : "Next Level") 
                : "Finish Quiz"}
            </Button>
          </Box>
          
          {showAnswers && (
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Answers for {level.charAt(0).toUpperCase() + level.slice(1)} Level:
              </Typography>
              <List>
                {answers.map((answer, index) => (
                  <ListItem key={index} divider>
                    <ListItemText
                      primary={`Q${index + 1}: ${answer.question}`}
                      secondary={
                        <>
                          <Typography component="span" color="primary">
                            Answer: {answer.correctAnswer}
                          </Typography>
                          <br />
                          {answer.explanation}
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Box>
      </Container>
    );
  }

  const currentQuestionData = selectedQuestions[currentQuestion];
  const progress = ((currentQuestion) / TOTAL_QUESTIONS) * 100;

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          {level.charAt(0).toUpperCase() + level.slice(1)} Level Quiz
        </Typography>
        
        <Typography variant="subtitle1" gutterBottom align="center">
          Score {score} out of {currentQuestion} answered
        </Typography>
        
        <TimerContainer>
          <TimerIcon color={timeLeft <= 30 ? (timeLeft <= 10 ? "error" : "warning") : "action"} />
          <TimerText variant="h6" time={timeLeft}>
            Time Left: {formatTime(timeLeft)}
          </TimerText>
        </TimerContainer>
        
        {timeLeft <= 30 && (
          <Alert severity={timeLeft <= 10 ? "error" : "warning"} sx={{ mb: 2 }}>
            {timeLeft <= 10 ? "Hurry up! Less than 10 seconds left!" : "Time is running out!"}
          </Alert>
        )}
        
        <ProgressContainer>
          <Typography variant="body2" gutterBottom>
            Question {currentQuestion + 1} of {TOTAL_QUESTIONS}
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ height: 10, borderRadius: 5 }}
          />
        </ProgressContainer>
        
        <StyledCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {currentQuestionData.question}
            </Typography>
            <RadioGroup value={selectedOption} onChange={handleOptionSelect}>
              {currentQuestionData.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index.toString()}
                  control={<Radio />}
                  label={option}
                  sx={{
                    display: removedOptions.includes(index) ? 'none' : 'flex',
                    p: 1,
                    mb: 1,
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </CardContent>
        </StyledCard>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">
            Required to advance: {REQUIRED_SCORE[level]}/{TOTAL_QUESTIONS}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disabled={selectedOption === ''}
            onClick={handleNextQuestion}
          >
            {currentQuestion < TOTAL_QUESTIONS - 1 ? "Next Question" : "Finish Level"}
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <LifelineButton
            variant="contained"
            startIcon={<HelpOutlineIcon />}
            onClick={handleShowAnswer}
            disabled={!remainingLifelines.showAnswer}
          >
            Show Answer
          </LifelineButton>
          
          <LifelineButton
            variant="contained"
            startIcon={<FiftyFiftyIcon />}
            onClick={handleRemoveOptions}
            disabled={!remainingLifelines.removeOptions}
          >
            Remove Options
          </LifelineButton>
        </Box>
        
        {showHint && (
          <Alert severity="info" sx={{ mb: 2 }}>
            The correct answer is: {currentQuestionData.options[currentQuestionData.correctAnswer]}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default TeluguMovieLevelsQuiz; 