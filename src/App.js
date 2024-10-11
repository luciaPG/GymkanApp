import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';

import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />

        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
