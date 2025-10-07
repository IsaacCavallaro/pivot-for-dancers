import { Briefcase, MessageSquare } from 'lucide-react';

export interface Service {
    id: number;
    name: string;
    subtitle: string;
    description: string;
    img: string;
    icon: React.FC<any>;
    rating: number;
    reviews: number;
    price: number;
    originalPrice: number;
    duration: string;
    features: string[];
    url: string;
}

export const services: Service[] = [
    {
        id: 1,
        name: 'Mentorship',
        subtitle: '1-on-1 Career Guidance',
        description: 'Personalized guidance to help you navigate your career transition with confidence.',
        img: '/assets/pivot-mentorship.png',
        icon: Briefcase,
        rating: 5,
        reviews: 25,
        price: 150,
        originalPrice: 200,
        duration: '4 weeks',
        features: [
            '1-on-1 sessions',
            'Personalized roadmap',
            'Resume/CV review',
            'LinkedIn profile optimization',
        ],
        url: 'https://tidycal.com/pivotfordancers/mentorship-1'
    },
    {
        id: 2,
        name: 'Mock Interviews',
        subtitle: 'Practice Makes Perfect',
        description: 'Sharpen your interview skills and get constructive feedback to land your dream job.',
        img: '/assets/mock-interview.png',
        icon: MessageSquare,
        rating: 4.9,
        reviews: 18,
        price: 75,
        originalPrice: 100,
        duration: '60 minutes',
        features: [
            'Interview practice',
            'Industry-specific scenarios',
            'Actionable feedback',
            'Confidence building',
        ],
        url: 'https://tidycal.com/pivotfordancers/mock-interview'
    },
];
