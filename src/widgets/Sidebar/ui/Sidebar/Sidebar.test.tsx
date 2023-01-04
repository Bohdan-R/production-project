import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
/* import { Button } from 'shared/ui/Button/Button'; */
import { Sidebar } from './Sidebar';

describe('Button components TEST', () => {
  test('Test render', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test sidebar className', () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle-btn');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
