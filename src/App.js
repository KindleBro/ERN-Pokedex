import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple, blue } from '@material-ui/core/colors';

import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';


const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
      contrastText: purple[50]
    },
    secondary: {
      light: blue[400],
      main: blue[500],
      dark: blue[300],
      contrastText: blue[50]
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
      contrastText: purple[50]
    },
    secondary: {
      light: blue[400],
      main: blue[500],
      dark: blue[300],
      contrastText: blue[50]
    },
  },
});

function App() {

  const [theme, setTheme] = useState({
    palette: {
      type: 'dark',
      primary: {
        light: purple[300],
        main: purple[500],
        dark: purple[700],
        contrastText: purple[50]
      },
      secondary: {
        light: blue[400],
        main: blue[500],
        dark: blue[300],
        contrastText: blue[50]
      },
    }
  })

  const toggleTheme = () => {
    if (theme.palette.type === 'dark') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  const [navBarName, setnavBarName] = useState({
    primary: "MERN Pokedex",
    secondary: "Home Page"
  });

  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <BrowserRouter>
        <Navigation pageName={ navBarName.primary } subName={ navBarName.secondary } toggleThemeFunction={ toggleTheme }/>
        <Switch>
          <Route exact path="/">
            <HomePage setnavBarName={ setnavBarName }/>
          </Route>
          <Route exact path="/test_page">
            <TestPage setnavBarName={ setnavBarName }/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
