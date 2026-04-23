import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

describe('shared site chrome', () => {
    it('renders the main navigation and exposes the products mega menu', async () => {
        render(<Navigation />);

        expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
        expect(screen.getByRole('link', { name: 'Products' })).toHaveAttribute('href', '/products');
        expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');
        expect(screen.getByRole('link', { name: 'Resources' })).toHaveAttribute('href', '/resources');
        expect(screen.getByRole('link', { name: 'FAQs' })).toHaveAttribute('href', '/faqs');

        fireEvent.mouseEnter(screen.getByRole('link', { name: 'Products' }).parentElement as HTMLElement);

        expect(await screen.findByText('All Products')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /book support/i })).toHaveAttribute('href', 'https://tidycal.com/pivotfordancers/mentorship-1');
    });

    it('submits the footer community signup form', async () => {
        const fetchMock = jest.mocked(global.fetch).mockResolvedValue({
            ok: true,
        } as Response);

        render(<Footer />);

        fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
            target: { value: 'dancer@example.com' },
        });
        fireEvent.click(screen.getByRole('button', { name: /join the community/i }));

        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledWith(
                'https://stats.sender.net/forms/aKrmkz/subscribe',
                expect.objectContaining({
                    method: 'POST',
                })
            );
        });

        expect(await screen.findByText(/you are in\. check your inbox for confirmation\./i)).toBeInTheDocument();
    });
});
