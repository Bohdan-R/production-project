import { render, screen } from '@testing-library/react';
/* import { Button } from 'shared/ui/Button/Button'; */
import { Button, ThemeButton } from './Button';

describe('Button components TEST', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test theme className', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
