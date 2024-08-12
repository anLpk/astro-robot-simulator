import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Flex } from '@chakra-ui/react';
import Grid from './Grid';

const App: React.FC = () => {
  const [robotPosition, _setRobotPosition] = useState({ x: 0, y: 0 });

  return (
    <ChakraProvider>
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        bg="tomato"
        color="white"
        p={4}
      >
        <Box textAlign="center">
          <Heading mb={6}>Robot Simulator</Heading>
          <Grid robotPosition={robotPosition} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
