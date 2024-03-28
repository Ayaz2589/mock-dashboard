// src/App.test.tsx or src/__tests__/App.test.tsx
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Your expected text or element here')).toBeInTheDocument();
  });
});
