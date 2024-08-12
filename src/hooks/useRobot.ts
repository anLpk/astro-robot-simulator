import { useState } from 'react';

type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

interface RobotState {
  x: number;
  y: number;
  direction: Direction;
}

const directions: Direction[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

export const useRobot = (initialState: RobotState) => {
  const [robot, setRobot] = useState<RobotState>(initialState);
  const [error, setError] = useState<string | null>(null);

  const rotateLeft = () => {
    const currentDirectionIndex = directions.indexOf(robot.direction);
    const newDirection = directions[(currentDirectionIndex + 3) % 4]; // Rotate counterclockwise
    setRobot({ ...robot, direction: newDirection });
    setError(null);
  };

  const rotateRight = () => {
    const currentDirectionIndex = directions.indexOf(robot.direction);
    const newDirection = directions[(currentDirectionIndex + 1) % 4]; // Rotate clockwise
    setRobot({ ...robot, direction: newDirection });
    setError(null);
  };

  const moveForward = () => {
    let { x, y } = robot;
    let newX = x;
    let newY = y;

    switch (robot.direction) {
      case 'NORTH':
        newY = Math.min(4, y + 1);
        break;
      case 'EAST':
        newX = Math.min(4, x + 1);
        break;
      case 'SOUTH':
        newY = Math.max(0, y - 1);
        break;
      case 'WEST':
        newX = Math.max(0, x - 1);
        break;
    }

    if (newX === x && newY === y) {
      setError("The robot can't move further in this direction.");
    } else {
      setRobot({ ...robot, x: newX, y: newY });
      setError(null);
    }
  };

  return {
    robot,
    rotateLeft,
    rotateRight,
    moveForward,
    error,
  };
};
