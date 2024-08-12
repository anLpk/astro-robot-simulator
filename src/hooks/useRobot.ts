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

    switch (robot.direction) {
      case 'NORTH':
        y = Math.min(4, y + 1);
        break;
      case 'EAST':
        x = Math.min(4, x + 1);
        break;
      case 'SOUTH':
        y = Math.max(0, y - 1);
        break;
      case 'WEST':
        x = Math.max(0, x - 1);
        break;
    }

    if (x === robot.x && y === robot.y) {
      setError("The robot can't move further in this direction.");
    } else {
      setRobot({ ...robot, x, y });
      setError(null);
    }
  };

  const moveBackward = () => {
    let { x, y } = robot;

    switch (robot.direction) {
      case 'NORTH':
        y = Math.max(0, y - 1);
        break;
      case 'EAST':
        x = Math.max(0, x - 1);
        break;
      case 'SOUTH':
        y = Math.min(4, y + 1);
        break;
      case 'WEST':
        x = Math.min(4, x + 1);
        break;
    }

    if (x === robot.x && y === robot.y) {
      setError("The robot can't move further in this direction.");
    } else {
      setRobot({ ...robot, x, y });
      setError(null);
    }
  };

  return {
    robot,
    rotateLeft,
    rotateRight,
    moveForward,
    moveBackward,
    error,
  };
};
