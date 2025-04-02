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
  CssBaseline,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Quiz from './components/Quiz';
import TeluguMovieLevelsQuiz from './components/TeluguMovieLevelsQuiz';
import ProgressiveMoviesQuiz from './components/ProgressiveMoviesQuiz';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 8px',
        },
      },
    },
  },
});

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Telugu Movie Quiz Hub
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} component={Link} to="/">
                      Interior Design
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/telugu-movie-levels">
                      Telugu Movie Levels
                    </MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/progressive-movies">
                      Progressive Movies
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button color="inherit" component={Link} to="/">
                    Interior Design Quiz
                  </Button>
                  <Button color="inherit" component={Link} to="/telugu-movie-levels">
                    Telugu Movie Levels
                  </Button>
                  <Button color="inherit" component={Link} to="/progressive-movies">
                    Progressive Movies
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
          <Container>
            <Box sx={{ mt: 4 }}>
              <Routes>
                <Route path="/" element={<Quiz />} />
                <Route path="/telugu-movie-levels" element={<TeluguMovieLevelsQuiz />} />
                <Route path="/progressive-movies" element={<ProgressiveMoviesQuiz />} />
              </Routes>
            </Box>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 