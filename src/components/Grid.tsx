import React from 'react';
import { Box } from '@chakra-ui/react';

interface GridProps {
  robotPosition: { x: number; y: number };
}

const Grid: React.FC<GridProps> = ({ robotPosition }) => {
  const gridSize = 5;

  const renderGrid = () => {
    const rows = [];

    for (let y = gridSize - 1; y >= 0; y--) {
      const cells = [];
      for (let x = 0; x < gridSize; x++) {
        const isRobotHere = x === robotPosition.x && y === robotPosition.y;
        cells.push(
          <Box
            margin={'auto'}
            key={`${x}-${y}`}
            width="50px"
            height="50px"
            border="1px solid black"
            bg={isRobotHere ? 'lightblue' : 'white'}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {isRobotHere ? '🤖' : ''}
          </Box>,
        );
      }
      rows.push(
        <Box key={y} display="flex">
          {cells}
        </Box>,
      );
    }

    return rows;
  };

  return <Box>{renderGrid()}</Box>;
};

export default Grid;
