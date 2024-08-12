import { render } from '@testing-library/react';
import Grid from './Grid';

describe('Grid Component', () => {
  it('renders the robot icon', () => {
    const { getByText } = render(
      <Grid
        robotPosition={{
          x: 0,
          y: 0,
        }}
      />,
    );
    expect(getByText('🤖')).toBeInTheDocument();
  });
});
