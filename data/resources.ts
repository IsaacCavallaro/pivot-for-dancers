import type { ComponentType } from 'react';
import { BookOpen, Film } from 'lucide-react';

export interface Resource {
    id: number;
    title: string;
    type: 'Blog' | 'Video';
    accessStatus: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    url: string;
    features: string[];
    image: string;
    gradient: string;
    duration: string;
}

export const resources: Resource[] = [
    {
        id: 1,
        title: 'Pivot Paths',
        type: 'Blog',
        accessStatus: 'Coming soon',
        description: 'A mobile app to help you find your path',
        icon: BookOpen,
        url: '/resources/pivot-paths',
        image: '/assets/how-to-pivot-ebook.png',
        gradient: 'from-blue-200 to-blue-300',
        duration: 'Mobile App',
        features: ['Career Transition', 'Guided Paths'],
    },
    {
        id: 2,
        title: 'Pivot Podcast',
        type: 'Video',
        accessStatus: 'Open now',
        description: 'Listen to inspiring stories of career transition',
        icon: Film,
        url: '/resources/pivot-podcast',
        image: '/assets/pivot-podcast.png',
        gradient: 'from-purple-200 to-purple-300',
        duration: 'Podcast',
        features: ['Interviews', 'Career Stories'],
    },
    {
        id: 3,
        title: 'Expectations vs Reality',
        type: 'Blog',
        accessStatus: 'Open now',
        description: 'Data-driven insights into career transitions for dancers',
        icon: BookOpen,
        url: '/resources/expectations-vs-reality',
        image: '/assets/data.png',
        gradient: 'from-green-200 to-green-300',
        duration: 'Data',
        features: ['Research', 'Career Insights'],
    },
    {
        id: 4,
        title: 'Find Your Pivot Personality',
        type: 'Blog',
        accessStatus: 'Open now',
        description: 'Take our quiz to discover your pivot personality and get personalized recommendations',
        icon: BookOpen,
        url: '/resources/find-your-pivot-personality',
        image: '/assets/quiz.png',
        gradient: 'from-yellow-200 to-yellow-300',
        duration: 'Quiz',
        features: ['10 Questions', 'Self-Discovery'],
    },
];
