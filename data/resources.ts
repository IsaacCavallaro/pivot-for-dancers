import { BookOpen, Film } from 'lucide-react';

export interface Resource {
    id: number;
    title: string;
    type: 'Blog' | 'Video';
    description: string;
    icon: React.FC<any>;
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
        description: 'A free guided app for dancers exploring career, mindset, and financial next steps',
        icon: BookOpen,
        url: '/resources/pivot-paths',
        image: '/assets/how-to-pivot-ebook.png',
        gradient: 'from-blue-200 to-blue-300',
        duration: 'Free App',
        features: ['Career Transition', 'Mindset', 'Finance']
    },
    {
        id: 2,
        title: 'Pivot Podcast',
        type: 'Video',
        description: 'Listen to inspiring stories of career transition',
        icon: Film,
        url: '/resources/pivot-podcast',
        image: '/assets/pivot-podcast.png',
        gradient: 'from-purple-200 to-purple-300',
        duration: 'Podcast',
        features: ['Interviews', 'Career Stories']
    },
    {
        id: 3,
        title: 'Expectations vs Reality',
        type: 'Blog',
        description: 'Data-driven insights into career transitions for dancers',
        icon: BookOpen,
        url: '/resources/expectations-vs-reality',
        image: '/assets/data.png',
        gradient: 'from-green-200 to-green-300',
        duration: 'Data',
        features: ['Research', 'Career Insights']
    },
    {
        id: 4,
        title: 'Find Your Pivot Personality',
        type: 'Blog',
        description: 'Take our quiz to discover your pivot personality and get personalized recommendations',
        icon: BookOpen,
        url: '/resources/find-your-pivot-personality',
        image: '/assets/quiz.png',
        gradient: 'from-yellow-200 to-yellow-300',
        duration: 'Quiz',
        features: ['10 Questions', 'Self-Discovery']
    },
];
