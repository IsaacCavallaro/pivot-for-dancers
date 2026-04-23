import { render, screen } from '@testing-library/react';
import AboutPage from '../pages/about';
import HowToPivotPage from '../pages/products/how-to-pivot';
import MentorshipPage from '../pages/services/mentorship';
import PivotPathsPage from '../pages/resources/pivot-paths';
import PivotPodcastPage from '../pages/resources/pivot-podcast';
import ExpectationsVsRealityPage from '../pages/resources/expectations-vs-reality';
import FindYourPivotPersonalityPage from '../pages/resources/find-your-pivot-personality';

describe('detail page smoke coverage', () => {
    it('renders the about page with the expected community CTA', () => {
        render(<AboutPage />);

        expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /join our community/i })).toHaveAttribute('href', 'https://stats.sender.net/forms/aKrmkz/view');
    });

    it('renders the how to pivot product detail page', () => {
        render(<HowToPivotPage />);

        expect(screen.getByRole('heading', { name: 'How to Pivot' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /buy the ebook/i })).toHaveAttribute('href', 'https://buy.stripe.com/14k6oG8rQexsgCI147');
    });

    it('renders the mentorship service detail page', () => {
        render(<MentorshipPage />);

        expect(screen.getByRole('heading', { name: 'Mentorship Program' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /book mentorship/i })).toHaveAttribute('href', 'https://tidycal.com/pivotfordancers/mentorship-1');
    });

    it('renders the pivot paths resource detail page', () => {
        render(<PivotPathsPage />);

        expect(screen.getByRole('heading', { name: 'Pivot Paths' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /join the waitlist/i })).toHaveAttribute('href', 'https://stats.sender.net/forms/bkRKWX/view');
    });

    it('renders the pivot podcast resource detail page', () => {
        render(<PivotPodcastPage />);

        expect(screen.getByRole('heading', { name: 'Pivot Podcast' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /watch on youtube/i })).toHaveAttribute(
            'href',
            'https://www.youtube.com/playlist?list=PLjTsov7LqGgJ1XUG3vPMIFA6KOojU4_mm'
        );
    });

    it('renders the expectations vs reality resource detail page', () => {
        render(<ExpectationsVsRealityPage />);

        expect(screen.getByRole('heading', { name: /expectations vs reality/i })).toBeInTheDocument();
        expect(screen.getAllByRole('link', { name: /view source/i })[0]).toHaveAttribute('href', 'http://neumann.hec.ca/aimac2005/PDF_Text/JeffriJ_ThrosbyD.pdf');
    });

    it('renders the pivot personality resource detail page', () => {
        render(<FindYourPivotPersonalityPage />);

        expect(screen.getByRole('heading', { name: /find your pivot personality/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /take the quiz/i })).toBeInTheDocument();
    });
});
