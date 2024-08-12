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

  const rotateLeft = () => {
    const currentDirectionIndex = directions.indexOf(robot.direction);
    const newDirection = directions[(currentDirectionIndex + 3) % 4]; // Rotate counterclockwise
    setRobot({ ...robot, direction: newDirection });
  };

  const rotateRight = () => {
    const currentDirectionIndex = directions.indexOf(robot.direction);
    const newDirection = directions[(currentDirectionIndex + 1) % 4]; // Rotate clockwise
    setRobot({ ...robot, direction: newDirection });
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

    setRobot({ ...robot, x, y });
  };

  return {
    robot,
    rotateLeft,
    rotateRight,
    moveForward,
  };
};
