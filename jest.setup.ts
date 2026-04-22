import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ fill: _fill, ...props }: Record<string, unknown>) => React.createElement('img', props),
}));

jest.mock('next/link', () => ({
    __esModule: true,
    default: ({
        href,
        children,
        ...props
    }: {
        href: string | { pathname?: string };
        children: React.ReactNode;
    }) => React.createElement('a', { href: typeof href === 'string' ? href : href?.pathname ?? '', ...props }, children),
}));

const buildMockRouter = (overrides: Record<string, unknown> = {}) => ({
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    },
    isFallback: false,
    ...overrides,
});

const mockRouter = jest.fn(() => ({
    ...buildMockRouter(),
}));

jest.mock('next/router', () => ({
    useRouter: () => mockRouter(),
}));

const setMockRouter = (overrides: Record<string, unknown> = {}) => {
    mockRouter.mockReturnValue(buildMockRouter(overrides));
};

Object.defineProperty(globalThis, '__setMockRouter', {
    writable: true,
    value: setMockRouter,
});

class MockIntersectionObserver {
    constructor(private readonly callback: IntersectionObserverCallback) {}

    observe = () => {
        this.callback([{ isIntersecting: true } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
    };

    unobserve = () => undefined;

    disconnect = () => undefined;

    takeRecords = () => [];
}

class MockResizeObserver {
    observe = () => undefined;

    unobserve = () => undefined;

    disconnect = () => undefined;
}

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: MockIntersectionObserver,
});

Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    value: MockResizeObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    value: MockIntersectionObserver,
});

Object.defineProperty(global, 'ResizeObserver', {
    writable: true,
    value: MockResizeObserver,
});

Object.defineProperty(window, 'requestAnimationFrame', {
    writable: true,
    value: (callback: FrameRequestCallback) => window.setTimeout(() => callback(Date.now()), 0),
});

Object.defineProperty(window, 'cancelAnimationFrame', {
    writable: true,
    value: (id: number) => window.clearTimeout(id),
});

Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: jest.fn(),
});

Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
    writable: true,
    value: jest.fn(),
});

const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((...args: unknown[]) => {
        const message = args
            .filter((value): value is string => typeof value === 'string')
            .join(' ');
        if (message.includes('ReactDOMTestUtils.act') && message.includes('deprecated')) {
            return;
        }
        originalConsoleError(...args);
    });

    jest.spyOn(console, 'warn').mockImplementation((...args: unknown[]) => {
        const message = args
            .filter((value): value is string => typeof value === 'string')
            .join(' ');
        if (message.includes('The width(0) and height(0) of chart should be greater than 0')) {
            return;
        }
        originalConsoleWarn(...args);
    });
});

afterAll(() => {
    jest.restoreAllMocks();
});

beforeEach(() => {
    jest.clearAllMocks();
    setMockRouter();
    global.fetch = jest.fn();
});
