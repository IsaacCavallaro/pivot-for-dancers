import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

describe('HomePage', () => {
    it('renders the approved hero copy and key calls to action', () => {
        render(<HomePage />);

        expect(screen.getByRole('heading', { name: /pivot from the dream job to the dream life/i })).toBeInTheDocument();
        expect(
            screen.getAllByText(/we’re helping professional dancers find meaning off the stage through dancer-specific career change resources/i).length
        ).toBeGreaterThan(0);
        expect(screen.getByRole('link', { name: /start with pivot paths/i })).toHaveAttribute('href', '/resources/pivot-paths');
        expect(screen.getAllByRole('link', { name: /book support/i })[0]).toHaveAttribute('href', 'https://tidycal.com/pivotfordancers/mentorship-1');
        expect(screen.getByRole('link', { name: /join the waitlist/i })).toHaveAttribute('href', 'https://stats.sender.net/forms/bkRKWX/view');
        expect(
            screen.getByText(/your private toolkit for career transition, mindset wellness, and financial planning/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/real stories from dancers/i)).toBeInTheDocument();
    });
});
