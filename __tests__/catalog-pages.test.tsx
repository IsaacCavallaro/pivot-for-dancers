import { render, screen } from '@testing-library/react';
import ProductsPage from '../pages/products';
import ServicesPage from '../pages/services';
import ResourcesPage from '../pages/resources';
import { products } from '../data/products';
import { services } from '../data/services';
import { resources } from '../data/resources';

describe('catalogue pages', () => {
    it('renders the products catalogue with the approved items and routes', () => {
        const { container } = render(<ProductsPage />);

        expect(screen.getByRole('heading', { name: 'Products' })).toBeInTheDocument();

        products.forEach((product) => {
            expect(screen.getByText(product.name)).toBeInTheDocument();
            expect(
                container.querySelector(`a[href="/products/${product.name.toLowerCase().replace(/\s+/g, '-')}"]`)
            ).toBeInTheDocument();
        });
    });

    it('renders the services catalogue with the approved items and routes', () => {
        const { container } = render(<ServicesPage />);

        expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument();

        services.forEach((service) => {
            expect(screen.getByText(service.name)).toBeInTheDocument();
            expect(
                container.querySelector(`a[href="/services/${service.name.toLowerCase().replace(/\s+/g, '-')}"]`)
            ).toBeInTheDocument();
        });
    });

    it('renders the resources catalogue with the approved items and routes', () => {
        const { container } = render(<ResourcesPage />);

        expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument();

        resources.forEach((resource) => {
            expect(screen.getAllByText(resource.title).length).toBeGreaterThan(0);
            expect(container.querySelector(`a[href="${resource.url}"]`)).toBeInTheDocument();
        });
    });
});
