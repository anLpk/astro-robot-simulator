import React from 'react';
import { ChakraProvider, Heading, Flex, Text } from '@chakra-ui/react';
import Grid from './Grid';
import { useRobot } from 'src/hooks/useRobot';
import { ControlButton } from './ControlButton';

const App: React.FC = () => {
  const { robot, rotateLeft, rotateRight, moveForward, moveBackward, error } =
    useRobot({
      x: 0,
      y: 0,
      direction: 'NORTH',
    });

  return (
    <ChakraProvider>
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        bg="gray.200"
        p={4}
        flexDirection="column"
      >
        <Heading color="black" mb={6}>
          Robot Simulator
        </Heading>
        <Grid robotPosition={{ x: robot.x, y: robot.y }} />
        <Text mt={4} fontSize="xl" color="black">
          Direction: {robot.direction}
        </Text>
        {error && (
          <Text mt={2} fontSize="md" color="red.400">
            {error}
          </Text>
        )}
        <Flex mt={4} justifyContent="center">
          <ControlButton onClick={rotateLeft}>Rotate Left</ControlButton>
          <ControlButton onClick={moveForward}>Move Forward</ControlButton>
          <ControlButton onClick={moveBackward}>Move Backward</ControlButton>
          <ControlButton onClick={rotateRight}>Rotate Right</ControlButton>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
