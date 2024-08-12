import { Button } from '@chakra-ui/react';

export const ControlButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  label?: string;
}> = ({ onClick, children }) => (
  <Button
    onClick={onClick}
    bg="#E15A1D"
    color="white"
    _hover={{ bg: '#D4511A', boxShadow: 'lg' }}
    mr={2}
  >
    {children}
  </Button>
);
