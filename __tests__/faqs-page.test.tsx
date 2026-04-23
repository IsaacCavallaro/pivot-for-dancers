import { fireEvent, render, screen } from '@testing-library/react';
import FaqsPage from '../pages/faqs';

describe('FaqsPage', () => {
    it('opens FAQ answers and keeps the branded CTA links intact', () => {
        render(<FaqsPage />);

        fireEvent.click(screen.getByRole('button', { name: /what are pivot conversations\?/i }));

        expect(screen.getByText(/free virtual meetups for dancers/i)).toBeVisible();
        expect(screen.getByRole('link', { name: /sign up/i })).toHaveAttribute('href', 'https://stats.sender.net/forms/bmZM4r/view');
    });
});
