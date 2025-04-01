import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  AppBar, 
  Toolbar,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import Quiz from './components/Quiz';
import MicrobiologyQuiz from './components/MicrobiologyQuiz';
import InteriorDesignExecutionQuiz from './components/InteriorDesignExecutionQuiz';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Quiz App
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Interior Design Quiz
              </Button>
              <Button color="inherit" component={Link} to="/microbiology">
                Microbiology Quiz
              </Button>
              <Button color="inherit" component={Link} to="/execution">
                Design Execution Quiz
              </Button>
            </Toolbar>
          </AppBar>
          <Container>
            <Box sx={{ mt: 4 }}>
              <Routes>
                <Route path="/" element={<Quiz />} />
                <Route path="/microbiology" element={<MicrobiologyQuiz />} />
                <Route path="/execution" element={<InteriorDesignExecutionQuiz />} />
              </Routes>
            </Box>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 