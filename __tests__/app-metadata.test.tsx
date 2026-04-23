import { resolveRouteMetadata } from '../pages/_app';

describe('shared app metadata', () => {
    it('resolves canonical metadata for standard routes', () => {
        const { pageTitle, canonicalUrl, meta } = resolveRouteMetadata(
            '/services/mock-interviews',
            '/services/mock-interviews?ref=homepage'
        );

        expect(pageTitle).toBe('Mock Interviews | Pivot For Dancers');
        expect(meta.description).toBe(
            'Mock interview support to help dancers translate their experience into language employers understand.'
        );
        expect(canonicalUrl).toBe('https://pivotfordancers.com/services/mock-interviews/');
        expect(meta.noindex).toBeUndefined();
    });

    it('noindexes the legacy quiz alias and points canonical to the resource route', () => {
        const { pageTitle, canonicalUrl, meta } = resolveRouteMetadata(
            '/find-your-pivot-personality',
            '/find-your-pivot-personality'
        );

        expect(pageTitle).toBe('Find Your Pivot Personality | Pivot For Dancers');
        expect(canonicalUrl).toBe('https://pivotfordancers.com/resources/find-your-pivot-personality/');
        expect(meta.noindex).toBe(true);
    });
});
