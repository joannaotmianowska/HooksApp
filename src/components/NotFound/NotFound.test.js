import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound component', () => {
    test('renders "Page not found" text', () => {
        const { getByText } = render(<NotFound />);
        const text = getByText(/Page not found/i);

        expect(text).toBeInTheDocument();
    });
});
