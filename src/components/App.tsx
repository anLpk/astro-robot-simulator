import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <div>
        <h1>Hello, Bellroy - Robot Simulator!</h1>
      </div>
    </ChakraProvider>
  );
};

export default App;
