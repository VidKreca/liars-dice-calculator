import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { theme } from './config';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </DarkMode>
    </ChakraProvider>
  );
}

export default App;
