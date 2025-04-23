import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './pages/Home';
import Coffee from './pages/Coffee';
import Plant from './pages/Plant';
import Write from './pages/Write';
import Login from './pages/Login';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coffee" element={<Coffee />} />
                    <Route path="/plant" element={<Plant />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App; 