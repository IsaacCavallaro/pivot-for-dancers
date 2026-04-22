import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

jest.mock('framer-motion', () => {
    const React = require('react');

    const createMotionComponent = (tag: string) => {
        const MotionComponent = React.forwardRef(
            (
                {
                    children,
                    animate: _animate,
                    exit: _exit,
                    initial: _initial,
                    transition: _transition,
                    whileHover: _whileHover,
                    whileTap: _whileTap,
                    ...props
                }: Record<string, unknown>,
                ref: React.Ref<Element>
            ) => React.createElement(tag, { ref, ...props }, children)
        );

        MotionComponent.displayName = `MockMotion(${tag})`;

        return MotionComponent;
    };

    return {
        AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
        motion: new Proxy(
            {},
            {
                get: (_target, key: string) => createMotionComponent(key),
            }
        ),
    };
});

import Quiz from '../components/Quiz';

const completeQuizQuestions = async () => {
    const steps = [
        {
            answer: /hesitant\. i'm not quite ready to let go\./i,
            nextHeading: /how do you usually approach big changes\?/i,
        },
        {
            answer: /i avoid them until i absolutely have to do something\./i,
            nextHeading: /what best describes where you are now\?/i,
        },
        {
            answer: /i haven't thought much about what's next after dance\./i,
            nextHeading: /what's your biggest fear about pivoting\?/i,
        },
        {
            answer: /losing my identity as a dancer\./i,
            nextHeading: /what motivates you most\?/i,
        },
        {
            answer: /living the dream\./i,
            nextHeading: /how do you feel about exploring other careers\?/i,
        },
        {
            answer: /i know i'll need to someday… but i'm avoiding it\./i,
            nextHeading: /what kind of support would feel most helpful right now\?/i,
        },
        {
            answer: /reassurance that i'm not alone\./i,
        },
    ];

    for (const step of steps) {
        fireEvent.click(screen.getByRole('button', { name: step.answer }));
        fireEvent.click(screen.getByRole('button', { name: /^next$/i }));

        if (step.nextHeading) {
            await waitFor(() => {
                expect(screen.getByRole('heading', { name: step.nextHeading })).toBeInTheDocument();
            });
        }
    }

    await waitFor(() => {
        expect(screen.getByRole('heading', { name: /almost there!/i })).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Isaac' } });
    fireEvent.change(screen.getByLabelText(/your email/i), { target: { value: 'isaac@example.com' } });
    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /get my results/i }));
        await Promise.resolve();
    });
};

describe('Quiz', () => {
    const originalSubmitUrl = process.env.NEXT_PUBLIC_QUIZ_SUBMIT_URL;
    const originalApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const originalApiKey = process.env.NEXT_PUBLIC_API_KEY;

    afterEach(() => {
        if (originalSubmitUrl === undefined) {
            delete process.env.NEXT_PUBLIC_QUIZ_SUBMIT_URL;
        } else {
            process.env.NEXT_PUBLIC_QUIZ_SUBMIT_URL = originalSubmitUrl;
        }

        if (originalApiUrl === undefined) {
            delete process.env.NEXT_PUBLIC_API_URL;
        } else {
            process.env.NEXT_PUBLIC_API_URL = originalApiUrl;
        }

        if (originalApiKey === undefined) {
            delete process.env.NEXT_PUBLIC_API_KEY;
        } else {
            process.env.NEXT_PUBLIC_API_KEY = originalApiKey;
        }
    });

    it('submits the quiz result using the configured API url and bearer token', async () => {
        process.env.NEXT_PUBLIC_API_URL = 'https://example.com/quiz-submit';
        process.env.NEXT_PUBLIC_API_KEY = 'secret-key';
        delete process.env.NEXT_PUBLIC_QUIZ_SUBMIT_URL;
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            headers: {
                get: () => 'application/json',
            },
            json: jest.fn().mockResolvedValue({ ok: true }),
        });

        render(<Quiz />);

        await completeQuizQuestions();

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(1);
        });

        expect(global.fetch).toHaveBeenCalledWith(
            'https://example.com/quiz-submit',
            expect.objectContaining({
                method: 'POST',
                headers: {
                    Authorization: 'Bearer secret-key',
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
        );

        const [, requestInit] = (global.fetch as jest.Mock).mock.calls[0] as [string, RequestInit];
        expect(JSON.parse(String(requestInit.body))).toEqual({
            email: 'isaac@example.com',
            firstname: 'Isaac',
            groups: ['bD6Xqy'],
            trigger_automation: true,
        });

        expect(await screen.findByRole('heading', { name: /the dreamer/i })).toBeInTheDocument();
    });

    it('shows the generic submission error when the quiz request fails', async () => {
        process.env.NEXT_PUBLIC_API_URL = 'https://example.com/quiz-submit';
        process.env.NEXT_PUBLIC_API_KEY = 'secret-key';
        delete process.env.NEXT_PUBLIC_QUIZ_SUBMIT_URL;
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            json: jest.fn().mockResolvedValue({ message: 'bad request' }),
        });

        render(<Quiz />);

        await completeQuizQuestions();

        expect(await screen.findByText(/there was an error submitting your results/i)).toBeInTheDocument();
    });
});
