import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Drawer, List, ListItem, ListItemText, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './components/Home';
import TeluguMovieLevelsQuiz from './components/TeluguMovieLevelsQuiz';
import ProgressiveMoviesQuiz from './components/ProgressiveMoviesQuiz';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Multi-Level Quiz', path: '/multi-level-quiz' },
    { text: 'Progressive Movies', path: '/progressive-movies' }
  ];

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Telugu Movie Quiz
          </Typography>
          {!isMobile && (
            <Box>
              {menuItems.map((item) => (
                <Button 
                  key={item.text} 
                  color="inherit" 
                  component={Link} 
                  to={item.path}
                  sx={{ ml: 1 }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/multi-level-quiz" element={<TeluguMovieLevelsQuiz />} />
          <Route path="/progressive-movies" element={<ProgressiveMoviesQuiz />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App; 