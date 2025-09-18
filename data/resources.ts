import { Star, Clock } from 'lucide-react';

export const resources = [
    {
        id: 1,
        title: 'Pivot Paths',
        description: 'A mobile app that is free and is structured around three main categories, each containing a set of paths.',
        image: '/assets/how-to-pivot-ebook.png',
        link: '#',
        features: ['Mobile App', 'Free'],
        duration: 'Ongoing',
        gradient: 'from-yellow-100 to-white',
        icon: Star
    },
    {
        id: 2,
        title: 'Pivot Podcast',
        description: 'Listen to inspiring stories and practical advice from dancers who have successfully navigated career changes.',
        image: '/assets/pivot-panels.png',
        link: '#',
        features: ['Guest Interviews', 'Actionable Tips'],
        duration: '45 min episodes',
        gradient: 'from-blue-100 to-white',
        icon: Clock
    },
    {
        id: 3,
        title: 'Expectations vs Reality',
        description: 'A realistic look at career transitions for dancers.',
        image: '/assets/happy-trails-mini-course.png',
        link: '#',
        features: ['Data-driven', 'Infographics'],
        duration: '15 min read',
        gradient: 'from-green-100 to-white',
        icon: Clock
    },
    {
        id: 4,
        title: 'Discover Your Pivot Personality',
        description: 'A comprehensive guide for dancers transitioning into new careers.',
        image: '/assets/how-to-pivot-ebook.png',
        link: '#',
        features: ['Quiz', 'Personalized Results'],
        duration: '10 min',
        gradient: 'from-purple-100 to-white',
        icon: Star
    },
];

export type Resource = typeof resources[0];