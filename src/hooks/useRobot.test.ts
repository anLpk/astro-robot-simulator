import { act, renderHook } from '@testing-library/react';
import { useRobot } from './useRobot';

describe('useRobot Hook', () => {
  test('initializes with the correct position and direction', () => {
    const { result } = renderHook(() =>
      useRobot({ x: 0, y: 0, direction: 'NORTH' }),
    );
    expect(result.current.robot).toEqual({ x: 0, y: 0, direction: 'NORTH' });
  });

  test('rotates the robot to the left', () => {
    const { result } = renderHook(() =>
      useRobot({ x: 0, y: 0, direction: 'NORTH' }),
    );

    act(() => {
      result.current.rotateLeft();
    });

    expect(result.current.robot.direction).toBe('WEST');
  });

  test('rotates the robot to the right', () => {
    const { result } = renderHook(() =>
      useRobot({ x: 0, y: 0, direction: 'NORTH' }),
    );

    act(() => {
      result.current.rotateRight();
    });

    expect(result.current.robot.direction).toBe('EAST');
  });

  test('moves the robot forward', () => {
    const { result } = renderHook(() =>
      useRobot({ x: 0, y: 0, direction: 'NORTH' }),
    );

    act(() => {
      result.current.moveForward();
    });

    expect(result.current.robot).toEqual({ x: 0, y: 1, direction: 'NORTH' });
  });

  test('prevents the robot from moving out of bounds', () => {
    const { result } = renderHook(() =>
      useRobot({ x: 0, y: 4, direction: 'NORTH' }),
    );

    act(() => {
      result.current.moveForward();
    });

    expect(result.current.robot).toEqual({ x: 0, y: 4, direction: 'NORTH' });
    expect(result.current.error).toBe(
      "The robot can't move further in this direction.",
    );
  });
});
